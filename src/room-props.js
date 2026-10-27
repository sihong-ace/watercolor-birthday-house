import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {createSampleMaterial} from './sample-textures.js';
import {createBlackTelephone,createStrawberryCake} from './reference-objects.js';

export function createRoomProps({deskOffsetX=0,cabinetOffsetX=0,cabinetOffsetZ=0}={}){
  const root=new THREE.Group();root.name='老房间生活物件';
  const mat=(color,roughness=.8)=>new THREE.MeshStandardMaterial({color,roughness});
  const wood=mat('#97714d'),cream=mat('#e9ddbd'),paper=mat('#f1e8d4'),green=mat('#768c60'),stem=mat('#67734c'),red=mat('#b36f57'),blue=mat('#788f9a'),brass=mat('#9f8961',.4);
  const add=(name,geometry,material,pos,parent=root)=>{const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.position.set(...pos);mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);return mesh;};
  const box=(name,size,pos,material,parent=root)=>add(name,new RoundedBoxGeometry(...size,2,Math.min(.012,Math.min(...size)*.3)),material,pos,parent);
  const cyl=(name,r,h,pos,material,parent=root,top=r)=>add(name,new THREE.CylinderGeometry(top,r,h,24),material,pos,parent);
  const ball=(name,r,pos,material,parent=root)=>add(name,new THREE.SphereGeometry(r,12,8),material,pos,parent);
  function canvasMaterial(draw){const c=document.createElement('canvas');c.width=c.height=512;draw(c.getContext('2d'));const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;return new THREE.MeshStandardMaterial({map:t,roughness:1});}
  const landscape=createSampleMaterial('countryside-watercolor.png',{folder:'decor-v1',roughness:1});landscape.map.wrapS=landscape.map.wrapT=THREE.ClampToEdgeWrapping;
  function frame(x,y,z,w,h,painting=landscape,parent=root){
    const g=new THREE.Group();g.position.set(x,y,z);parent.add(g);
    box('画框底板',[w,h,.027],[0,0,0],wood,g);
    box('米白装裱衬纸',[w-.025,h-.025,.005],[0,0,.017],paper,g);
    add('淡彩画面',new THREE.PlaneGeometry(w-.08,h-.08),painting,[0,0,.020],g);
    for(const dx of [-w/2,w/2])box('木画框竖边',[.03,h+.03,.045],[dx,0,.015],wood,g);
    for(const dy of [-h/2,h/2])box('木画框横边',[w,.03,.045],[0,dy,.015],wood,g);return g;
  }
  frame(-1.07,1.94,-2.073,.94,.57).name='墙上的回忆挂画';
  const clockface=canvasMaterial(ctx=>{ctx.fillStyle='#eee4cb';ctx.fillRect(0,0,512,512);ctx.fillStyle='#534f42';ctx.font='38px serif';ctx.textAlign='center';ctx.textBaseline='middle';for(let i=1;i<=12;i++){const a=i*Math.PI/6-Math.PI/2;ctx.fillText(String(i),256+Math.cos(a)*190,256+Math.sin(a)*190);}ctx.strokeStyle='#595247';ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(150,195);ctx.lineTo(256,256);ctx.lineTo(330,148);ctx.stroke();ctx.beginPath();ctx.arc(256,256,10,0,Math.PI*2);ctx.fill();});
  const clock=new THREE.Group();clock.name='摇摆挂钟';clock.position.set(-1.99,1.97,-2.02);root.add(clock);
  box('挂钟木机壳',[.37,.69,.08],[0,-.12,-.028],wood,clock);
  box('挂钟下部深色窗口',[.25,.32,.012],[0,-.28,.019],mat('#493c30'),clock);
  add('钟面',new THREE.CircleGeometry(.155,48),clockface,[0,.085,.020],clock).castShadow=false;
  add('挂钟圆木线脚',new THREE.TorusGeometry(.168,.014,8,48),wood,[0,.085,.020],clock);
  const pendulum=new THREE.Group();pendulum.name='挂钟摇摆钟摆';pendulum.position.set(0,-.065,.038);clock.add(pendulum);
  box('钟摆黄铜杆',[.012,.23,.010],[0,-.115,0],brass,pendulum);
  const bob=cyl('钟摆圆盘',.058,.017,[0,-.24,0],brass,pendulum);bob.rotation.x=Math.PI/2;
  clock.userData.animate=(seconds,reduced)=>{pendulum.rotation.z=reduced?0:Math.sin(seconds*2.8)*.14;};
  const calendar=canvasMaterial(ctx=>{ctx.fillStyle='#ede2c9';ctx.fillRect(0,0,512,512);ctx.strokeStyle='#75865f';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(256,265);ctx.lineTo(256,80);ctx.stroke();for(let i=0;i<5;i++){ctx.fillStyle=i%2?'#a7ac79':'#829366';ctx.beginPath();ctx.ellipse(256+(i%2?40:-40),100+i*30,45,17,i%2?-.4:.4,0,Math.PI*2);ctx.fill();}ctx.font='22px serif';ctx.fillStyle='#886f53';for(let y=0;y<4;y++)for(let x=0;x<7;x++)ctx.fillText(String(y*7+x+1),65+x*58,330+y*40);});
  frame(-2.01,1.17,-2.066,.29,.43,calendar);
  for(const y of [1.77,2.20]){
    box('墙上木置物架',[.95,.05,.23],[.30,y,-1.99],wood);
    for(const x of [-.03,.63])box('置物架托架',[.045,.12,.15],[x,y-.075,-2.02],wood);
  }
  function books(x,y,z,parent=root,standing=false){
    for(let i=0;i<3;i++){
      const g=new THREE.Group();g.position.set(x+(standing?i*.07:0),y+(standing?.14:i*.047+.025),z);if(!standing)g.position.x+=deskOffsetX;g.rotation.y=i*.04;parent.add(g);
      if(standing){g.name=['田野笔记','生活随笔','小猫故事'][i];g.userData.bookTitle=g.name;}
      const sizes=standing?[.06,.27,.14]:[.25,.043,.19];box('旧书纸页',sizes,[0,0,0],paper,g);
      if(!standing)for(const y of [-.010,0,.010])box('旧书纸页细线',[.237,.001,.002],[0,y,-.096],cream,g);
      const cover=[green,red,blue][i];if(standing){for(const dx of [-.033,.033])box('书封',[.006,.28,.15],[dx,0,0],cover,g);box('书脊',[.066,.28,.008],[0,0,.074],cover,g);}else{for(const dy of [-.022,.022])box('书封',[.26,.006,.20],[0,dy,0],cover,g);}
      if(standing){const cv=document.createElement('canvas');cv.width=256;cv.height=1024;const ctx=cv.getContext('2d');ctx.fillStyle=['#768c60','#b36f57','#788f9a'][i];ctx.fillRect(0,0,256,1024);ctx.fillStyle='#f4ead5';ctx.font='bold 78px SimSun,serif';ctx.textAlign='center';ctx.textBaseline='middle';[...g.name].forEach((letter,j)=>ctx.fillText(letter,128,160+j*105));ctx.fillRect(38,70,180,4);ctx.fillRect(38,944,180,4);const map=new THREE.CanvasTexture(cv);map.colorSpace=THREE.SRGBColorSpace;add('书脊标题',new THREE.PlaneGeometry(.060,.262),new THREE.MeshStandardMaterial({map,roughness:.9}),[0,0,.079],g);}
    }
  }
  books(.42,1.795,-1.96,root,true);books(-1.99,.835,.99);
  const porcelain=canvasMaterial(ctx=>{
    ctx.fillStyle='#eee5d0';ctx.fillRect(0,0,512,512);ctx.strokeStyle='#718498';ctx.lineWidth=4;
    for(let i=0;i<5;i++){const x=45+i*104;ctx.beginPath();ctx.moveTo(x,430);ctx.bezierCurveTo(x-45,300,x+55,170,x,80);ctx.stroke();for(let j=0;j<4;j++){ctx.fillStyle='#8596a3';ctx.beginPath();ctx.ellipse(x+(j%2?23:-23),130+j*75,22,9,j%2?.6:-.6,0,Math.PI*2);ctx.fill();}}
    for(const y of [22,490]){ctx.strokeStyle='#708094';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(512,y);ctx.stroke();}
  });porcelain.roughness=.45;
  const leafMaterials=[mat('#819665'),mat('#697e59'),mat('#a0af7d')];leafMaterials.forEach(m=>m.side=THREE.DoubleSide);
  const leafShape=new THREE.Shape();leafShape.moveTo(0,0);leafShape.bezierCurveTo(-.046,.020,-.055,.074,0,.125);leafShape.bezierCurveTo(.055,.074,.046,.020,0,0);
  const leafGeometry=new THREE.ShapeGeometry(leafShape,12),leafPos=leafGeometry.attributes.position;
  for(let i=0;i<leafPos.count;i++)leafPos.setZ(i,Math.sin(leafPos.getY(i)/.125*Math.PI)*.013-Math.abs(leafPos.getX(i))*.22);leafGeometry.computeVertexNormals();
  function leaf(parent,pos,angle,index,scale=1){
    const g=new THREE.Group();g.position.set(...pos);g.rotation.set(.45+(index%3)*.22,angle,-.5+(index%4)*.30);g.scale.setScalar(scale);parent.add(g);
    add('弧面植物叶片',leafGeometry,leafMaterials[index%3],[0,0,0],g);
    add('叶片中脉',new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,.001),new THREE.Vector3(0,.06,.016),new THREE.Vector3(0,.119,.003)]),8,.0018,4,false),stem,[0,0,0],g);
  }
  function plant(x,y,z,scale=1,parent=root){
    const g=new THREE.Group();g.position.set(x,y,z);g.scale.setScalar(scale);parent.add(g);
    add('青花陶瓷花盆',new THREE.LatheGeometry([new THREE.Vector2(.069,0),new THREE.Vector2(.086,.014),new THREE.Vector2(.112,.07),new THREE.Vector2(.114,.135),new THREE.Vector2(.107,.17)],32),porcelain,[0,0,0],g);
    const rim=add('陶瓷盆口',new THREE.TorusGeometry(.107,.009,8,32),porcelain,[0,.17,0],g);rim.rotation.x=Math.PI/2;
    cyl('盆口泥土',.098,.014,[0,.163,0],wood,g);
    for(let i=0;i<7;i++){
      const a=i*2.4,r=.07+i*.006,h=.26+(i%3)*.06,tip=new THREE.Vector3(Math.cos(a)*r,h,Math.sin(a)*r);
      const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,.17,0),new THREE.Vector3(tip.x*.5,h*.8,tip.z*.5),tip]);add('绿植枝干',new THREE.TubeGeometry(curve,6,.005,5,false),stem,[0,0,0],g);
      for(let j=0;j<3;j++)leaf(g,[tip.x*(.6+j*.2),tip.y-j*.048,tip.z*(.6+j*.2)],a+j*.8,i+j,.65+j*.10);
    }return g;
  }
  plant(-2.04+cabinetOffsetX,.698,-1.84+cabinetOffsetZ,.8);plant(.01,2.23,-1.96,.9);plant(2.04,.935,-1.77,.9);
  const floorPlant=plant(2.13,.025,2.01,.9);floorPlant.scale.y=1.8;
  // A draping vine belongs to the upper shelf.
  const vinePoints=[];for(let i=0;i<11;i++){const pos=[.02+Math.sin(i*.85)*.06,2.22-i*.043,-1.80];vinePoints.push(new THREE.Vector3(...pos));leaf(root,pos,i*.7,i,.48);}
  add('置物架垂藤细枝',new THREE.TubeGeometry(new THREE.CatmullRomCurve3(vinePoints),28,.003,5,false),stem,[0,0,0]);
  frame(.59,2.35,-1.87,.18,.24);frame(1.95,1.075,-1.09,.17,.24);
  box('木组织盒',[.19,.12,.14],[.99,.994,-1.61],wood);
  const tissue=box('纸巾',[.09,.10,.008],[.99,1.09,-1.61],paper);tissue.rotation.z=.25;
  box('纸巾盒顶槽',[.10,.004,.02],[.99,1.056,-1.61],wood);
  root.add(createStrawberryCake());
  const deskStart=root.children.length;
  // Desk lamp, pencil cup, notebook and mug on the long white table.
  const lampStart=root.children.length;
  cyl('台灯底座',.075,.024,[-1.98,.846,.37],green);
  const lampCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(-1.98,.86,.37),new THREE.Vector3(-1.98,1.13,.40),new THREE.Vector3(-1.98,1.16,.51)]);
  add('台灯弯杆',new THREE.TubeGeometry(lampCurve,16,.009,8,false),brass,[0,0,0]);
  green.side=THREE.DoubleSide;
  const shade=add('绿色台灯罩',new THREE.CylinderGeometry(.035,.09,.08,32,1,true),green,[-1.98,1.15,.53]);shade.rotation.x=-.55;
  const innerShade=add('台灯米白内衬',new THREE.CylinderGeometry(.033,.087,.077,32,1,true),paper,[-1.98,1.149,.53]);innerShade.rotation.x=-.55;paper.side=THREE.DoubleSide;
  const bulb=ball('台灯小灯泡',.017,[-1.98,1.12,.546],paper);bulb.castShadow=false;
  const lampParts=root.children.slice(lampStart),lampAnchor=new THREE.Vector3(-1.98,.834,.37);
  for(const part of lampParts){part.position.sub(lampAnchor).multiplyScalar(1.4).add(lampAnchor);part.scale.multiplyScalar(1.4);}
  const lampRim=add('台灯黄铜包边',new THREE.TorusGeometry(.125,.004,8,32),brass,[-1.98,1.24,.60]);lampRim.rotation.x=Math.PI/2-.55;
  cyl('青花笔筒',.033,.08,[-1.94,.877,.71],porcelain);
  for(let i=0;i<4;i++){const pencil=cyl('铅笔',.004,.14,[-1.955+i*.009,.927,.71],i%2?wood:green);pencil.rotation.z=(i-1.5)*.08;}
  box('打开的记事本',[.26,.012,.17],[-1.95,.843,1.48],paper);
  box('记事本中缝',[.002,.003,.165],[-1.95,.851,1.48],wood);
  const ink=mat('#ada791');for(let i=0;i<5;i++)for(const dx of [-.065,.065])box('记事本细横线',[.095,.001,.001],[-1.95+dx,.850,1.43+i*.023],ink);
  cyl('瓷杯',.034,.066,[-1.95,.869,1.76],cream);cyl('杯内茶水',.026,.004,[-1.95,.904,1.76],wood);
  const handle=add('瓷杯把手',new THREE.TorusGeometry(.023,.006,8,16),cream,[-1.906,.87,1.76]);handle.rotation.y=Math.PI/2;
  for(const item of root.children.slice(deskStart)){
    item.position.x+=deskOffsetX;
    // Keep the centre of the white table clear for the carousel lamp.
    if(/笔筒|铅笔/.test(item.name))item.position.z-=.09;
    if(/记事本/.test(item.name))item.position.z-=.25;
    if(/瓷杯|杯内茶水/.test(item.name))item.position.z-=.94;
  }
  const phone=createBlackTelephone();phone.position.x+=cabinetOffsetX;phone.position.z+=cabinetOffsetZ;root.add(phone);
  const textile=canvasMaterial(ctx=>{ctx.fillStyle='#e3d6ba';ctx.fillRect(0,0,512,512);for(let i=0;i<512;i+=64){ctx.fillStyle='rgba(118,143,120,.26)';ctx.fillRect(i,0,22,512);ctx.fillRect(0,i,512,22);}});
  const floralPillow=createSampleMaterial('03-vintage-floral-fabric.png',{repeat:[.45,.45],roughness:1});
  const redFloral=canvasMaterial(ctx=>{ctx.fillStyle='#b87966';ctx.fillRect(0,0,512,512);ctx.fillStyle='#e4c9ad';for(let y=30;y<512;y+=95)for(let x=35;x<512;x+=110){for(let i=0;i<5;i++){const a=i/5*Math.PI*2;ctx.beginPath();ctx.ellipse(x+Math.cos(a)*9,y+Math.sin(a)*9,8,4,a,0,Math.PI*2);ctx.fill();}ctx.beginPath();ctx.ellipse(x+20,y+20,10,4,-.5,0,Math.PI*2);ctx.fill();}});
  // Pillows face the room; the throw hangs over the bench's front edge.
  for(const [z,color] of [[-.32,textile],[.42,floralPillow],[1.24,redFloral]]){
    const pillow=add('木长椅靠枕',new RoundedBoxGeometry(.14,.37,.40,6,.055),color,[2.09,.795,z]);pillow.rotation.z=-.13;
  }
  box('长椅搭毯',[.58,.018,.47],[2.02,.582,1.27],textile);
  box('垂下的毯角',[.018,.33,.47],[1.735,.415,1.27],textile);
  for(let i=0;i<18;i++){const strand=cyl('搭毯流苏',.002,.058,[1.735,.222,1.05+i*.025],paper);strand.rotation.z=.08*Math.sin(i);}
  // Pleated curtains flank the window without covering it completely.
  const curtain=createSampleMaterial('03-vintage-floral-fabric.png',{repeat:[.50,1.8],roughness:1,mirrored:true});curtain.side=THREE.DoubleSide;
  const rod=cyl('窗帘木杆',.017,2.15,[2.34,2.28,-.30],wood);rod.rotation.x=Math.PI/2;
  for(const z of [-1.395,.795])ball('木窗帘杆端头',.03,[2.34,2.28,z],wood);
  for(const z of [-1.15,.55]){
    const geometry=new THREE.PlaneGeometry(.29,1.07,24,12),pos=geometry.attributes.position;
    for(let i=0;i<pos.count;i++)pos.setZ(i,Math.sin(pos.getX(i)/.29*Math.PI*8)*(.013+.008*(.535-pos.getY(i))/1.07));
    geometry.computeVertexNormals();
    const panel=add('碎花褶皱窗帘',geometry,curtain,[2.392,1.69,z]);panel.rotation.y=-Math.PI/2;
    for(const dz of [-.10,0,.10]){const ring=add('窗帘挂环',new THREE.TorusGeometry(.024,.005,6,12),brass,[2.34,2.25,z+dz]);ring.rotation.y=Math.PI/2;}
  }
  // Ivory crochet runner: real alpha cutouts avoid painting a dark lace pattern.
  const laceCanvas=document.createElement('canvas');laceCanvas.width=512;laceCanvas.height=256;const laceCtx=laceCanvas.getContext('2d');
  laceCtx.clearRect(0,0,512,256);laceCtx.strokeStyle='#eadfc8';laceCtx.lineWidth=2.2;
  for(let y=0;y<256;y+=32)for(let x=0;x<512;x+=32){laceCtx.beginPath();laceCtx.moveTo(x+16,y);laceCtx.lineTo(x+32,y+16);laceCtx.lineTo(x+16,y+32);laceCtx.lineTo(x,y+16);laceCtx.closePath();laceCtx.stroke();laceCtx.beginPath();laceCtx.arc(x+16,y+16,7,0,Math.PI*2);laceCtx.stroke();}
  const laceTexture=new THREE.CanvasTexture(laceCanvas);laceTexture.colorSpace=THREE.SRGBColorSpace;laceTexture.anisotropy=8;
  const lace=new THREE.MeshStandardMaterial({map:laceTexture,transparent:true,alphaTest:.25,side:THREE.DoubleSide,roughness:1});
  const runner=add('电视柜米白钩花垫',new THREE.PlaneGeometry(1.78,.47),lace,[-1.30,.697,-1.77]);runner.rotation.x=-Math.PI/2;runner.castShadow=false;
  const laceFront=add('电视柜垂下的钩花边',new THREE.PlaneGeometry(1.77,.06),lace,[-1.30,.66,-1.484]);laceFront.castShadow=false;
  for(const item of [runner,laceFront]){item.position.x+=cabinetOffsetX;item.position.z+=cabinetOffsetZ;}
  return root;
}
