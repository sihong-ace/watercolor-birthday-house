import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {createInteriorMaterials} from './interior-materials.js';
import {createPurpleSofa,createPlasticChair} from './room-seating.js';
import {createRoomProps} from './room-props.js';
import {createSofaInteraction} from './sofa-interaction.js';
import {createRoomNight} from './room-night.js';
import {createRoomAtmosphere} from './room-atmosphere.js';
import {createCakeJourney} from './cake-journey.js';
import {createLetterModal} from './letter-modal.js';
import {createTableCarousel} from './table-carousel.ts';
import {createBirthdayRoomDetails} from './birthday-room-details.js';
import {createBirthdayCalendar} from './birthday-calendar.js';
import {createKeepsakeInteraction} from './keepsake-interaction.js';
import {createRoomMemoryInteraction} from './room-memory-interaction.js';
import {createCarouselInteraction} from './carousel-interaction.js';

function createRoom() {
  const room=new THREE.Group();room.name='独立的老房间';const m=createInteriorMaterials();
  const wall=m.wall;
  const screen=new THREE.MeshStandardMaterial({color:'#242d2e',roughness:.35});
  function box(name,size,position,material,parent=room){
    const geometry=material===wall||material===m.wallLower?new THREE.BoxGeometry(...size):new RoundedBoxGeometry(...size,2,Math.min(.016,Math.min(...size)*.15));
    if(material.userData.worldSpan){const p=geometry.attributes.position,n=geometry.attributes.normal,uv=geometry.attributes.uv,span=material.userData.worldSpan;for(let i=0;i<p.count;i++){const x=p.getX(i)+position[0],y=p.getY(i)+position[1],z=p.getZ(i)+position[2];uv.setXY(i,(Math.abs(n.getX(i))>.5?z:x)/span,(Math.abs(n.getY(i))>.5?z:y)/span);}}
    if(material.userData.woodGrain){const p=geometry.attributes.position,n=geometry.attributes.normal,uv=geometry.attributes.uv;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i);const horizontal=Math.abs(n.getY(i))>.5;const along=horizontal?(size[2]>size[0]?z:x):(Math.abs(n.getX(i))>.5?z:x);const across=horizontal?(size[2]>size[0]?x:z):y;uv.setXY(i,(size[1]>Math.max(size[0],size[2])*2?y:along)/1.3,across/.8);}}
    const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.position.set(...position);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
  }
  function cylinder(name,radius,length,position,material,parent=room){const mesh=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,length,12),material);mesh.name=name;mesh.position.set(...position);mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  function frontFrame(name,x,y,z,w,h,parent=room){
    for(const dx of [-w/2,w/2])box(name,[.026,h,.026],[x+dx,y,z],m.darkWood,parent);
    for(const dy of [-h/2,h/2])box(name,[w,.026,.026],[x,y+dy,z],m.darkWood,parent);
  }
  box('房间地面基座',[5.1,.16,4.4],[0,-.08,0],m.wood);
  box('浅色旧地砖',[5,.025,4.3],[0,.012,0],m.floor);
  box('后墙',[5.08,2.55,.12],[0,1.275,-2.15],wall);
  box('淡鼠尾草绿旧墙裙',[4.98,.86,.006],[0,.43,-2.086],m.wallLower);
  box('墙裙上沿细线',[4.98,.012,.008],[0,.864,-2.08],m.concrete);
  for(const [depth,z] of [[2.95,-.625],[.35,1.975]]){
    box('右侧淡绿墙裙',[.006,.86,depth],[2.436,.43,z],m.wallLower);
    box('右侧墙裙细线',[.008,.012,depth],[2.43,.864,z],m.concrete);
  }
  // The left wall is cut away above its old painted dado to preserve visibility.
  const cutWall=new THREE.Group();cutWall.name='左侧剖切墙展示组';room.add(cutWall);
  const cutMaterials=[m.wallLower.clone(),m.concrete.clone(),m.darkWood.clone()];cutMaterials.forEach(material=>material.transparent=true);
  box('左侧剖切墙',[.12,.86,4.30],[-2.50,.43,0],cutMaterials[0],cutWall);
  box('剖切墙米白切面',[.13,.028,4.30],[-2.50,.874,0],cutMaterials[1],cutWall);
  box('左侧墙木踢脚线',[.038,.12,4.18],[-2.423,.06,0],cutMaterials[2],cutWall);
  cutWall.userData.update=(polar,azimuth)=>{
    const low=THREE.MathUtils.smoothstep(polar,1.35,1.54),left=THREE.MathUtils.smoothstep(-azimuth,1.1,1.50),opacity=1-.94*low*left;
    for(const material of cutMaterials){material.opacity=opacity;material.depthWrite=opacity>.98;}
  };
  // Leave real openings for the window and the wooden door behind the bench.
  const wallZ=[-2.15,-1.25,.65,.85,1.75,2.15],wallY=[0,1.13,2.02,2.14,2.55];
  for(let zi=0;zi<wallZ.length-1;zi++)for(let yi=0;yi<wallY.length-1;yi++){
    const z=(wallZ[zi]+wallZ[zi+1])/2,y=(wallY[yi]+wallY[yi+1])/2;
    if((z>-1.25&&z<.65&&y>1.13&&y<2.14)||(z>.85&&z<1.75&&y<2.02))continue;
    box('右侧墙面',[.12,wallY[yi+1]-wallY[yi],wallZ[zi+1]-wallZ[zi]],[2.5,y,z],wall);
  }
  box('后墙木踢脚线',[4.98,.12,.05],[0,.06,-2.07],m.darkWood);
  box('右墙木踢脚线',[.05,.12,2.92],[2.425,.06,-.64],m.darkWood);
  box('木门旁踢脚线',[.05,.12,.35],[2.425,.06,1.95],m.darkWood);
  const door=new THREE.Group();door.name='长椅后方的单扇木门';room.add(door);
  box('关闭的木门',[.065,1.98,.86],[2.48,.99,1.30],m.wood,door);
  for(const z of [.82,1.78])box('木门竖门框',[.14,2.10,.075],[2.43,1.05,z],m.darkWood,door);
  box('木门上门框',[.14,.075,1.03],[2.43,2.07,1.30],m.darkWood,door);
  for(const [y,h] of [[.48,.65],[1.40,.95]]){
    box('木门内嵌面板',[.025,h,.66],[2.437,y,1.30],m.panel,door);
    for(const z of [.965,1.635])box('门板竖压条',[.035,h+.04,.025],[2.413,y,z],m.darkWood,door);
    for(const edgeY of [y-h/2,y+h/2])box('门板横压条',[.035,.025,.69],[2.413,edgeY,1.30],m.darkWood,door);
  }
  box('木门把手',[.06,.12,.025],[2.39,.98,1.65],m.pipe,door);
  const outside=m.view;
  const windowView=box('长椅上方的窗景',[.025,.98,1.90],[2.48,1.64,-.3],outside);windowView.castShadow=false;
  for(const z of [-1.25,.65])box('窗户竖边框',[.15,1.10,.055],[2.405,1.64,z],m.frame);
  for(const y of [1.10,2.18])box('窗户横边框',[.15,.055,1.98],[2.405,y,-.3],m.frame);
  box('窗户分格',[.15,1.04,.04],[2.40,1.64,-.3],m.frame);
  box('窗台',[.26,.055,2.10],[2.37,1.09,-.3],m.concrete);
  for(const z of [-.79,.19])box('窗户下沿拉手',[.025,.04,.16],[2.31,1.19,z],m.metal);
  const cabinet=new THREE.Group();cabinet.name='L形木电视柜';room.add(cabinet);
  box('电视柜长边',[1.9,.53,.52],[-1.30,.385,-1.77],m.wood,cabinet);
  // Including the shared corner, both L arms have an outer length of 1.90 m.
  box('电视柜另一条等长边',[.52,.53,1.38],[-1.99,.385,-.82],m.wood,cabinet);
  box('电视柜侧边柜顶',[.57,.045,1.38],[-1.99,.67,-.82],m.darkWood,cabinet);
  for(const z of [-1.17,-.53]){
    box('侧边柜门内嵌板',[.035,.43,.56],[-1.712,.36,z],m.panel,cabinet);
    for(const dz of [-.28,.28])box('侧柜门雕框',[.028,.43,.025],[-1.686,.36,z+dz],m.darkWood,cabinet);
    for(const y of [.145,.575])box('侧柜门雕框',[.028,.025,.56],[-1.686,y,z],m.darkWood,cabinet);
    box('侧边柜门把手',[.025,.08,.025],[-1.68,.37,z+.17],m.pipe,cabinet);
  }
  for(const x of [-1.97,-.64]){
    box('柜门内嵌板',[.48,.43,.035],[x,.36,-1.492],m.panel,cabinet);
    frontFrame('柜门雕框',x,.36,-1.467,.46,.41,cabinet);
    frontFrame('柜门内层线脚',x,.36,-1.463,.39,.34,cabinet);
    box('柜门把手',[.025,.08,.025],[x+.15,.37,-1.46],m.pipe,cabinet);
  }
  box('电视柜开放格暗部',[.68,.19,.012],[-1.30,.50,-1.492],m.darkWood,cabinet);
  box('开放格底板',[.70,.026,.07],[-1.30,.405,-1.465],m.wood,cabinet);
  box('中间抽屉面',[.68,.19,.038],[-1.30,.265,-1.487],m.panel,cabinet);
  frontFrame('抽屉线脚',-1.30,.265,-1.462,.64,.16,cabinet);
  for(const x of [-1.48,-1.12]){const pull=cylinder('抽屉圆把手',.018,.026,[x,.265,-1.441],m.pipe,cabinet);pull.rotation.x=Math.PI/2;}
  box('柜顶',[1.99,.045,.57],[-1.3,.67,-1.77],m.darkWood,cabinet);
  for(const y of [.13,.615]){
    box('柜体正面线脚',[1.94,.035,.04],[-1.30,y,-1.492],m.darkWood,cabinet);
    box('柜体侧面线脚',[.04,.035,1.39],[-1.711,y,-.82],m.darkWood,cabinet);
  }
  for(const [x,z] of [[-2.15,-1.91],[-.46,-1.91],[-.46,-1.63],[-2.15,-.25],[-1.82,-.25]]){
    box('柜子短脚',[.11,.12,.11],[x,.06,z],m.darkWood,cabinet);
    box('柜脚底托',[.13,.035,.13],[x,.025,z],m.wood,cabinet);
  }
  cabinet.position.set(-.185,0,-.055);
  const television=new THREE.Group();television.name='朝向塑料椅的斜置电视';television.position.set(-1.335,0,-1.765);television.rotation.y=Math.atan2(1.235,2.505);room.add(television);
  box('电视机身',[1.26,.75,.075],[0,1.09,0],screen,television);
  box('电视屏幕',[1.17,.65,.005],[0,1.10,.042],new THREE.MeshStandardMaterial({color:'#394545',roughness:.25}),television);
  box('电视下沿',[1.22,.025,.016],[0,.739,.053],screen,television);
  box('电视指示灯',[.012,.006,.009],[.53,.743,.07],new THREE.MeshBasicMaterial({color:'#b1c4b8'}),television);
  for(const x of [-.42,.42]){const foot=box('电视支脚',[.16,.028,.085],[x,.716,-.08],screen,television);foot.rotation.y=x<0?-.3:.3;}
  const bench=new THREE.Group();bench.name='木长椅';room.add(bench);
  box('长椅坐面',[.62,.12,2.60],[2.04,.51,.58],m.wood,bench);
  box('长椅靠背',[.09,.66,2.60],[2.32,.85,.58],m.wood,bench);
  for(const z of [-.38,.26,.90,1.54])box('靠背内嵌板',[.025,.46,.57],[2.258,.88,z],m.panel,bench);
  for(const z of [-.38,.26,.90,1.54]){
    for(const dz of [-.30,.30])box('长椅靠背分格雕框',[.035,.52,.035],[2.232,.88,z+dz],m.darkWood,bench);
    for(const y of [.62,1.14])box('长椅靠背横雕框',[.035,.035,.61],[2.232,y,z],m.darkWood,bench);
    const points=[];for(let i=0;i<=48;i++){const a=i/48*Math.PI*2;points.push(new THREE.Vector3(2.22,.88+Math.sin(a)*.19,z+Math.cos(a)*.245));}
    const oval=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),48,.009,6,false),m.darkWood);oval.name='椭圆木雕线';bench.add(oval);
  }
  for(const z of [.15,.36,.57,.78,.99])box('长椅坐面拼板缝',[.55,.004,.003],[2.04,.572,z],m.darkWood,bench);
  box('长椅前沿裙板',[.055,.15,2.51],[1.754,.40,.58],m.darkWood,bench);
  box('长椅下横撑',[.045,.055,2.45],[1.82,.17,.58],m.darkWood,bench);
  box('靠背上沿木线',[.13,.05,2.65],[2.305,1.18,.58],m.darkWood,bench);
  for(const z of [-.665,1.825]){box('长椅扶手',[.64,.08,.07],[2.05,.83,z],m.darkWood,bench);for(const x of [1.82,2.24])box('长椅椅腿',[.075,.45,.075],[x,.225,z],m.darkWood,bench);}
  function table(name,x,z,w,d,material,height=.80){
    const group=new THREE.Group();group.name=name;room.add(group);
    box('桌面',[w,.065,d],[x,height,z],material,group);
    const legHeight=height-.0325;
    const isWhite=name==='白色长桌',legWidth=isWhite?.065:.09;
    for(const dx of [-w/2+.065,w/2-.065])for(const dz of [-d/2+.065,d/2-.065]){
      box('桌腿',[legWidth,legHeight,legWidth],[x+dx,legHeight/2,z+dz],material,group);
      if(!isWhite)box('桌腿磨损脚套',[.093,.065,.093],[x+dx,.033,z+dz],m.oldWood,group);
    }
    if(isWhite)for(const dz of [-d/2+.065,d/2-.065])box('白桌方管底横撑',[w-.065,.065,.065],[x,.048,z+dz],material,group);
    for(const dz of [-d/2+.055,d/2-.055])box('桌面下横梁',[w-.10,.12,.05],[x,height-.10,z+dz],material,group);
    for(const dx of [-w/2+.055,w/2-.055])box('桌面下侧梁',[.05,.12,d-.10],[x+dx,height-.10,z],material,group);
  }
  table('白色长桌',-2.13,1.08,.62,1.90,m.cream);
  table('旧木桌',1.52,-1.42,1.58,1.20,m.oldWood,.90);
  for(const x of [1.12,1.52,1.92])box('旧木桌拼板接缝',[.003,.003,1.17],[x,.934,-1.42],m.darkWood);
  const sofa=createPurpleSofa();sofa.position.x-=.18;room.add(sofa);
  room.add(createPlasticChair(-.45,.70,'青色'),createPlasticChair(.25,.78,'蓝色'));
  room.add(createRoomProps({deskOffsetX:-.18,cabinetOffsetX:-.185,cabinetOffsetZ:-.055}));
  return room;
}

export function mountInteriorScene(host){
  const scene=new THREE.Scene();const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.12;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.VSMShadowMap;
  renderer.domElement.setAttribute('role','img');renderer.domElement.setAttribute('aria-label','独立的老家房间，L形电视柜、木长椅、紫色沙发、两张桌子和青蓝塑料椅');host.appendChild(renderer.domElement);
  const room=createRoom();scene.add(room);const birthdayDetails=createBirthdayRoomDetails();room.add(birthdayDetails.root);const calendar=createBirthdayCalendar();room.add(calendar.root);
  const camera=new THREE.PerspectiveCamera(36,1,.1,50);const controls=new OrbitControls(camera,renderer.domElement);
  controls.enableDamping=true;controls.enablePan=false;controls.minDistance=7;controls.maxDistance=13;controls.minPolarAngle=.95;controls.maxPolarAngle=1.56;controls.minAzimuthAngle=-Math.PI/2;controls.maxAzimuthAngle=.35;
  const reset=()=>{camera.position.set(-3.4,5.35,9.4);controls.target.set(0,1.10,0);controls.update();};reset();
  const hemi=new THREE.HemisphereLight('#edf1ed','#b4a694',1.15);scene.add(hemi);
  const sun=new THREE.DirectionalLight('#fff8ec',1.85);sun.position.set(6,6,1);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-4;sun.shadow.camera.right=4;sun.shadow.camera.top=4;sun.shadow.camera.bottom=-4;sun.shadow.normalBias=.018;sun.shadow.radius=5;sun.shadow.blurSamples=10;scene.add(sun);
  const fill=new THREE.DirectionalLight('#e9efed',.55);fill.position.set(-4,3,6);scene.add(fill);
  const ambient=new THREE.AmbientLight('#e9ebec',.12);scene.add(ambient);
  const stage=host.closest('.door-scene');
  const night=createRoomNight({room,scene,dayLights:{hemi,sun,fill,ambient},stage});
  const atmosphere=createRoomAtmosphere({room,stage,dayLights:{hemi,sun,fill,ambient},night});
  const letter=createLetterModal(stage),cake=room.getObjectByName('双层奶油草莓生日蛋糕');
  const carouselModel=createTableCarousel(renderer,message=>{document.querySelector('#scene-status').textContent=message;});room.add(carouselModel.root);scene.add(carouselModel.lampLight);
  let carousel,memory,keepsake;
  const cakeJourney=createCakeJourney({host,scene,renderer,camera,controls,cake,night,canInteract:()=>!carousel?.active&&!memory?.active&&!keepsake?.active&&!letter.open,onCelebrated:()=>letter.show()});
  carousel=createCarouselInteraction({model:carouselModel,host,scene,renderer,camera,controls,canInteract:()=>cakeJourney.phase==='overview'&&!memory?.active&&!keepsake?.active&&!letter.open});
  memory=createRoomMemoryInteraction({host,scene,renderer,camera,controls,calendar,television:room.getObjectByName('朝向塑料椅的斜置电视'),canInteract:()=>cakeJourney.phase==='overview'&&!carousel.active&&!keepsake?.active&&!letter.open});
  keepsake=createKeepsakeInteraction({room,scene,host,renderer,camera,controls,night,canInteract:()=>cakeJourney.phase==='overview'&&!carousel.active&&!memory.active&&!letter.open});
  const sofaInteraction=createSofaInteraction({sofa:room.getObjectByName('半推入白桌的紫色木框沙发'),scene,camera,renderer,host,canInteract:()=>cakeJourney.phase==='overview'&&!carousel.active&&!memory?.active&&!keepsake?.active&&!letter.open});
  const resetButton=document.querySelector('#reset-view');resetButton.textContent='回到全景';
  const onReset=()=>{if(carousel.active)carousel.returnToRoom();else if(memory.active)memory.returnToRoom();else if(keepsake.active)keepsake.returnToRoom();else if(cakeJourney.phase!=='overview')cakeJourney.returnToRoom();else reset();};resetButton.addEventListener('click',onReset);
  let width=0,height=0,frame,disposed=false;
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const animateCake=room.getObjectByName('双层奶油草莓生日蛋糕').userData.animate;
  const updateCutWall=room.getObjectByName('左侧剖切墙展示组').userData.update;
  const resize=()=>{width=host.clientWidth;height=host.clientHeight;if(!width||!height)return;renderer.setSize(width,height);camera.aspect=width/height;camera.fov=width/height<1.25?42:36;camera.updateProjectionMatrix();};
  const observer=new ResizeObserver(resize);observer.observe(host);resize();
  let isolated=false,roomVisibility=null,originalBackground=scene.background;const islandColors=[new THREE.Color('#efe5d4'),new THREE.Color('#25383d')];const studioLights=new THREE.Group();studioLights.name='木马近景柔和补光';studioLights.add(new THREE.AmbientLight('#fff4e4',.70),new THREE.HemisphereLight('#fff7e9','#c4bbb0',.85));studioLights.visible=false;scene.add(studioLights);
  const isolateCarousel=()=>{if(carousel.active!==isolated){isolated=carousel.active;studioLights.visible=isolated;if(isolated){roomVisibility=new Map(room.children.map(o=>[o,o.visible]));for(const child of room.children)child.visible=child===carouselModel.root;stage.classList.add('is-carousel-isolated');}else{for(const [child,visible]of roomVisibility)child.visible=visible;roomVisibility=null;stage.classList.remove('is-carousel-isolated');scene.background=originalBackground;}}if(isolated)scene.background=islandColors[night.night||atmosphere.mode==='blue'?1:0];};
  const render=()=>{if(disposed)return;frame=requestAnimationFrame(render);if(document.hidden||!width||!height)return;const now=performance.now();night.update(now,reducedMotion.matches);atmosphere.update(now,reducedMotion.matches);const lampMoving=carousel.update(now,width,height,reducedMotion.matches,night.carouselAmount);const memoryMoving=memory.update(now,width,height,reducedMotion.matches);const keepsakeMoving=keepsake.update(now,width,height,reducedMotion.matches);const moving=cakeJourney.update(now,width,height,reducedMotion.matches)||lampMoving||memoryMoving||keepsakeMoving;isolateCarousel();if(!moving)controls.update();resetButton.disabled=moving;sofaInteraction.update(now,width,height);animateCake(now/1000,reducedMotion.matches);birthdayDetails.update(now/1000,reducedMotion.matches);room.getObjectByName('摇摆挂钟').userData.animate(now/1000,reducedMotion.matches);updateCutWall(controls.getPolarAngle(),controls.getAzimuthalAngle());renderer.render(scene,camera);};render();
  return {dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();sofaInteraction.dispose();cakeJourney.dispose();carousel.dispose();memory.dispose();keepsake.dispose();calendar.dispose();stage.classList.remove('is-carousel-isolated');atmosphere.dispose();night.dispose();letter.dispose();controls.dispose();resetButton.removeEventListener('click',onReset);resetButton.disabled=false;const geometries=new Set(),materials=new Set(),textures=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material){materials.add(o.material);if(o.material.map)textures.add(o.material.map);}});geometries.forEach(o=>o.dispose());materials.forEach(o=>o.dispose());textures.forEach(o=>o.dispose());renderer.dispose();renderer.domElement.remove();}};
}
