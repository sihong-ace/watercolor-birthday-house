import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {createSampleMaterial} from './sample-textures.js';

export function createRoomNight({room,scene,dayLights,stage}){
  const group=new THREE.Group();group.name='夜间灯具与火盆';room.add(group);
  const bronze=new THREE.MeshStandardMaterial({color:'#786652',roughness:.65,metalness:.45});
  const shade=new THREE.MeshStandardMaterial({color:'#d7dacb',roughness:.8});
  const lit=()=>new THREE.MeshStandardMaterial({color:'#f1f0dc',roughness:.65,emissive:'#f5f5e9',emissiveIntensity:0});
  const bulbs=[];
  const add=(name,geometry,material,pos,parent=group)=>{const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.position.set(...pos);mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);return mesh;};
  add('挂画射灯壁座',new RoundedBoxGeometry(.09,.045,.065,2,.008),bronze,[-1.07,2.43,-2.035]);
  const head=new THREE.Group();head.position.set(-1.07,2.36,-1.85);const galleryTarget=new THREE.Vector3(-1.07,1.94,-2.044),headAxis=head.position.clone().sub(galleryTarget).normalize();head.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),headAxis);group.add(head);
  const pivot=head.position.clone().addScaledVector(headAxis,.058);
  const armPoints=[new THREE.Vector3(-1.07,2.43,-2.002),new THREE.Vector3(-1.07,2.435,-1.93),new THREE.Vector3(-1.07,2.435,pivot.z),pivot];
  add('画灯连续弯曲支臂',new THREE.TubeGeometry(new THREE.CatmullRomCurve3(armPoints),24,.009,10,false),bronze,[0,0,0]);
  add('画灯转轴连接球',new THREE.SphereGeometry(.017,16,12),bronze,pivot.toArray());
  const joint=add('画灯横向转轴',new THREE.CylinderGeometry(.015,.015,.057,16),bronze,pivot.toArray());joint.rotation.z=Math.PI/2;
  for(const dx of [-.031,.031]){const screw=add('画灯转轴螺帽',new THREE.CylinderGeometry(.008,.008,.006,12),bronze,[pivot.x+dx,pivot.y,pivot.z]);screw.rotation.z=Math.PI/2;}
  add('白色圆筒画灯',new THREE.CylinderGeometry(.034,.034,.105,24),shade,[0,0,0],head);
  const galleryBulb=lit();bulbs.push(galleryBulb);add('画灯发光面',new THREE.CircleGeometry(.027,24),galleryBulb,[0,-.054,0],head).rotation.x=Math.PI/2;
  const spot=new THREE.SpotLight('#f5f6ef',0,3,.68,.72,2);spot.position.copy(head.position).addScaledVector(headAxis,-.061);spot.target.position.copy(galleryTarget);spot.castShadow=true;spot.shadow.mapSize.set(512,512);spot.shadow.bias=-.0003;scene.add(spot,spot.target);
  add('置物架小灯底座',new THREE.CylinderGeometry(.057,.065,.02,24),bronze,[.08,1.80,-1.94]);
  const shelfBulb=lit();bulbs.push(shelfBulb);add('置物架乳白小灯',new THREE.CapsuleGeometry(.039,.055,4,16),shelfBulb,[.08,1.865,-1.94]);
  const shelf=new THREE.PointLight('#f1f3e7',0,3,2);shelf.position.set(.08,1.91,-1.82);scene.add(shelf);
  const tableBulb=room.getObjectByName('台灯小灯泡');tableBulb.material=tableBulb.material.clone();tableBulb.material.emissive.set('#f4f6ed');tableBulb.material.emissiveIntensity=0;bulbs.push(tableBulb.material);
  const desk=new THREE.PointLight('#f6f7f0',0,3,2);desk.position.set(-2.16,1.25,.62);scene.add(desk);
  const ceiling=new THREE.PointLight('#eff3f2',0,7,2);ceiling.position.set(0,2.46,.1);scene.add(ceiling);
  add('窗上灯管白色灯架',new RoundedBoxGeometry(.075,.09,1.88,2,.014),shade,[2.388,2.39,-.30]);
  const tubeMaterial=lit();const tube=add('窗上乳白长灯管',new THREE.CylinderGeometry(.025,.025,1.74,32),tubeMaterial,[2.333,2.385,-.30]);tube.rotation.x=Math.PI/2;tube.castShadow=false;
  for(const z of [-1.19,.59]){const cap=add('灯管两端接头',new THREE.CylinderGeometry(.029,.029,.055,16),bronze,[2.333,2.385,z]);cap.rotation.x=Math.PI/2;}
  const windowLights=[];for(const z of [-.80,.20]){const light=new THREE.PointLight('#f4f1dc',0,3.5,2);light.position.set(2.15,2.32,z);scene.add(light);windowLights.push(light);}
  // A shallow bronze charcoal basin, with a woven round pad and three short feet.
  const fire=new THREE.Group();fire.name='长椅前的火盆';fire.position.set(1.25,.027,.94);group.add(fire);
  const pad=new THREE.MeshStandardMaterial({color:'#9b8566',roughness:1});
  add('火盆隔热圆垫',new THREE.CylinderGeometry(.355,.355,.018,48),pad,[0,.009,0],fire);
  for(let i=0;i<6;i++){const ring=add('圆垫编织纹',new THREE.TorusGeometry(.12+i*.036,.0035,5,48),bronze,[0,.020,0],fire);ring.rotation.x=Math.PI/2;}
  for(let i=0;i<3;i++){const a=i*Math.PI*2/3;add('火盆短脚',new THREE.CylinderGeometry(.017,.022,.10,12),bronze,[Math.cos(a)*.18,.067,Math.sin(a)*.18],fire);}
  add('铜色炭盆',new THREE.LatheGeometry([new THREE.Vector2(.14,.11),new THREE.Vector2(.19,.10),new THREE.Vector2(.24,.14),new THREE.Vector2(.27,.23),new THREE.Vector2(.26,.245),new THREE.Vector2(.235,.18),new THREE.Vector2(.13,.13)],48),bronze,[0,0,0],fire);
  const lip=add('炭盆卷边',new THREE.TorusGeometry(.265,.014,8,48),bronze,[0,.236,0],fire);lip.rotation.x=Math.PI/2;
  const coals=[];for(let i=0;i<11;i++){const a=i*2.4,r=i<3?.07:.16;const coal=new THREE.MeshStandardMaterial({color:'#3d3832',roughness:.98,emissive:'#ba542c',emissiveIntensity:0});coals.push(coal);const c=add('火盆里的炭块',new THREE.IcosahedronGeometry(.050,1),coal,[Math.cos(a)*r,.208,Math.sin(a)*r],fire);c.scale.set(1.1,.75,1);c.rotation.set(i*.4,i*.8,i*.1);}
  const flames=new THREE.Group();flames.name='火盆轻焰';flames.position.y=.22;fire.add(flames);const flameMat=new THREE.MeshBasicMaterial({color:'#e7a252',transparent:true,opacity:.80,depthWrite:false});
  for(let i=0;i<5;i++){const a=i*2.4;const profile=[new THREE.Vector2(0,0),new THREE.Vector2(.020,.015),new THREE.Vector2(.014,.06),new THREE.Vector2(0,.11)];add('炭火小火苗',new THREE.LatheGeometry(profile,12),flameMat,[Math.cos(a)*.12,0,Math.sin(a)*.12],flames);}
  const fireLight=new THREE.PointLight('#efb17a',0,3.5,2);fireLight.position.set(1.25,.36,.94);scene.add(fireLight);
  const emberCanvas=document.createElement('canvas');emberCanvas.width=emberCanvas.height=64;const emberContext=emberCanvas.getContext('2d'),gradient=emberContext.createRadialGradient(32,32,0,32,32,32);gradient.addColorStop(0,'#fff8d4');gradient.addColorStop(.22,'#ffc76b');gradient.addColorStop(1,'#ff8a3500');emberContext.fillStyle=gradient;emberContext.fillRect(0,0,64,64);
  const emberMap=new THREE.CanvasTexture(emberCanvas);emberMap.colorSpace=THREE.SRGBColorSpace;const emberGeometry=new THREE.BufferGeometry();emberGeometry.setAttribute('position',new THREE.Float32BufferAttribute(new Float32Array(72*3),3));const emberMaterial=new THREE.PointsMaterial({map:emberMap,color:'#ffb657',size:.028,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false});
  const embers=new THREE.Points(emberGeometry,emberMaterial);embers.name='火盆上升的火星';embers.userData.ignoreInteraction=true;embers.frustumCulled=false;fire.add(embers);let stokeStart=-Infinity;
  const source=createSampleMaterial('night-window-watercolor.png',{folder:'decor-v1'});source.map.wrapS=source.map.wrapT=THREE.ClampToEdgeWrapping;
  const nightView=new THREE.MeshBasicMaterial({map:source.map,transparent:true,opacity:0,depthWrite:false});source.dispose();
  const view=add('窗外夜景',new THREE.PlaneGeometry(1.9,.98),nightView,[2.458,1.64,-.30]);view.rotation.y=-Math.PI/2;view.castShadow=false;
  let night=false,blend=0,transition=null,mode='normal',sequenceStart=0,levels=Array(7).fill(1),atmosphereLamp=0;
  const toggle=document.querySelector('#night-toggle');toggle.hidden=false;
  const sync=()=>{toggle.textContent=night?'看白天':'看夜晚';toggle.setAttribute('aria-pressed',String(night));stage.classList.toggle('is-night',night);};sync();
  const setNight=value=>{mode='normal';toggle.disabled=false;night=value;transition={start:performance.now(),from:blend,to:night?1:0};sync();};
  const onToggle=()=>setNight(!night);toggle.addEventListener('click',onToggle);
  return {setNight,setAtmosphereLighting(value){atmosphereLamp=THREE.MathUtils.clamp(value,0,1);},get busy(){return mode!=='normal';},stoke(now){stokeStart=now;},prepareBirthday(){setNight(true);mode='candles';levels.fill(0);toggle.disabled=true;},beginCelebration(now){night=true;blend=1;transition=null;mode='sequence';sequenceStart=now;levels.fill(0);toggle.disabled=true;sync();},get celebrating(){return mode==='sequence';},get carouselAmount(){return Math.max(blend,atmosphereLamp*(1-blend))*levels[3];},get night(){return night;},get amount(){return blend;},update(now,reduced){
    if(transition){const t=reduced?1:Math.min(1,(now-transition.start)/1400),ease=t*t*(3-2*t);blend=THREE.MathUtils.lerp(transition.from,transition.to,ease);if(t===1)transition=null;}
    if(mode==='normal')levels.fill(1);else if(mode==='candles')levels.fill(0);else{levels=levels.map((_,i)=>{const t=reduced?1:THREE.MathUtils.clamp((now-sequenceStart-1300-i*800)/650,0,1);return t*t*(3-2*t);});if(levels[6]===1){mode='normal';toggle.disabled=false;}}
    const roomGlow=mode==='normal'?1:mode==='candles'?.45:levels[6];
    dayLights.hemi.intensity=THREE.MathUtils.lerp(1.15,.015+.225*roomGlow,blend);dayLights.sun.intensity=THREE.MathUtils.lerp(1.85,.002+.053*roomGlow,blend);dayLights.fill.intensity=THREE.MathUtils.lerp(.55,.005+.115*roomGlow,blend);dayLights.ambient.intensity=THREE.MathUtils.lerp(.12,.003+.117*roomGlow,blend);
    const lampBlend=Math.max(blend,atmosphereLamp*(1-blend));
    spot.intensity=lampBlend*levels[4]*2.5;shelf.intensity=lampBlend*levels[2]*.9;desk.intensity=lampBlend*levels[1]*1.0;ceiling.intensity=lampBlend*levels[6]*3.0;
    tubeMaterial.emissiveIntensity=lampBlend*levels[5]*2.5;for(const light of windowLights)light.intensity=lampBlend*levels[5]*.75;
    galleryBulb.emissiveIntensity=lampBlend*levels[4]*1.7;shelfBulb.emissiveIntensity=lampBlend*levels[2]*1.7;tableBulb.material.emissiveIntensity=lampBlend*levels[1]*1.7;
    const fireElapsed=now-stokeStart,boost=THREE.MathUtils.clamp(fireElapsed/250,0,1)*THREE.MathUtils.clamp(1-(fireElapsed-4000)/1800,0,1),fireAmount=Math.max(blend*levels[0],boost);
    nightView.opacity=blend;for(const coal of coals)coal.emissiveIntensity=fireAmount*(1.2+boost*.9);
    flames.visible=fireAmount>.01;flameMat.opacity=Math.min(1,fireAmount*.80+boost*.20);flames.rotation.y=reduced?0:Math.sin(now*.0014)*.04;flames.scale.y=(1+boost*1.4)*(reduced?1:1+Math.sin(now*.003)*.07);
    fireLight.intensity=fireAmount*(1+boost*.35)*(reduced?1.0:1.0+Math.sin(now*.003)*.08);
    emberMaterial.opacity=boost;embers.visible=boost>.001;const positions=emberGeometry.attributes.position,sparkTime=Number.isFinite(fireElapsed)?fireElapsed:0;for(let i=0;i<72;i++){const t=reduced?(i%12)/12:((sparkTime/1600+i*.071)%1+1)%1,a=i*2.399;positions.setXYZ(i,Math.cos(a)*(.04+t*.07),.24+t*.70,Math.sin(a)*(.04+t*.07));}positions.needsUpdate=true;
  },dispose(){toggle.removeEventListener('click',onToggle);toggle.hidden=true;toggle.disabled=false;}};
}
