import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {createSampleMaterial} from './sample-textures.js';

function roundedPath(x,y,w,h,r,Path=THREE.Shape){
  const p=new Path();p.moveTo(x+r,y);p.lineTo(x+w-r,y);p.quadraticCurveTo(x+w,y,x+w,y+r);p.lineTo(x+w,y+h-r);p.quadraticCurveTo(x+w,y+h,x+w-r,y+h);p.lineTo(x+r,y+h);p.quadraticCurveTo(x,y+h,x,y+h-r);p.lineTo(x,y+r);p.quadraticCurveTo(x,y,x+r,y);return p;
}
function addMesh(group,name,geometry,material,position=[0,0,0]){const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.position.set(...position);mesh.castShadow=mesh.receiveShadow=true;group.add(mesh);return mesh;}
function softBox(group,name,size,position,material,r=.02){
  const geometry=new RoundedBoxGeometry(...size,4,Math.min(r,Math.min(...size)*.4));
  if(material.userData.worldSpan){const p=geometry.attributes.position,n=geometry.attributes.normal,uv=geometry.attributes.uv,span=material.userData.worldSpan;for(let i=0;i<p.count;i++){const x=p.getX(i)+position[0],y=p.getY(i)+position[1],z=p.getZ(i)+position[2];uv.setXY(i,(Math.abs(n.getX(i))>.5?z:x)/span,(Math.abs(n.getY(i))>.5?z:y)/span);}}
  return addMesh(group,name,geometry,material,position);
}
function extruded(shape,depth=.025){return new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelThickness:.003,bevelSize:.003,bevelSegments:3,curveSegments:20});}

export function createPurpleSofa(){
  const sofa=new THREE.Group();sofa.name='半推入白桌的紫色木框沙发';sofa.position.set(-1.68,0,1.08);sofa.rotation.y=Math.PI/2;
  const wood=new THREE.MeshStandardMaterial({color:'#b6976b',roughness:.7});
  const cloth=createSampleMaterial('02-lavender-fabric.png',{color:'#d2bedb',roughness:1,worldSpan:.45,mirrored:true});
  const seam=new THREE.MeshStandardMaterial({color:'#796987',roughness:1});
  softBox(sofa,'沙发木底座',[1.64,.09,.60],[0,.345,0],wood);
  softBox(sofa,'紫色长坐垫',[1.51,.13,.57],[0,.445,-.015],cloth,.045);
  const back=softBox(sofa,'紫色布艺靠背',[1.52,.51,.12],[0,.745,.255],cloth,.045);back.rotation.x=-.08;
  for(const x of [-.71,.71])for(const z of [-.235,.235]){
    const leg=softBox(sofa,'外撇浅木沙发腿',[.065,.36,.065],[x,.18,z],wood);leg.rotation.z=-Math.sign(x)*.09;
  }
  for(const x of [-.80,.80]){
    softBox(sofa,'沙发平木扶手',[.09,.055,.68],[x,.59,.005],wood);
    softBox(sofa,'扶手前支柱',[.055,.24,.055],[x,.47,-.24],wood);
    const brace=softBox(sofa,'扶手斜撑',[.045,.30,.045],[x,.46,.12],wood);brace.rotation.x=-.35;
  }
  for(const x of [-.38,.38]){
    const pillow=softBox(sofa,'紫色小靠枕',[.40,.34,.095],[x,.685,.163],cloth,.043);pillow.rotation.x=-.16;pillow.rotation.z=x*.10;
  }
  softBox(sofa,'坐垫前沿缝线',[1.43,.008,.008],[0,.424,-.301],seam,.002);
  return sofa;
}

export function createPlasticChair(x,z,color){
  const chair=new THREE.Group();chair.name=color==='青色'?'青色注塑扶手椅':'蓝色注塑扶手椅';chair.position.set(x,0,z);chair.rotation.y=.4;
  const mat=new THREE.MeshStandardMaterial({color:color==='青色'?'#5d968a':'#648da8',roughness:.34});
  const back=new THREE.Shape();back.moveTo(-.205,.46);back.bezierCurveTo(-.215,.64,-.247,.73,-.245,.87);back.quadraticCurveTo(-.24,1.025,-.135,1.025);back.lineTo(.135,1.025);back.quadraticCurveTo(.24,1.025,.245,.87);back.bezierCurveTo(.247,.73,.215,.64,.205,.46);back.closePath();
  for(const row of [0,1,2])for(const col of [-1.5,-.5,.5,1.5])back.holes.push(roundedPath(col*.071-.010,.625+row*.103,.020,.075,.010,THREE.Path));
  const backGeometry=extruded(back,.028),p=backGeometry.attributes.position;
  for(let i=0;i<p.count;i++)p.setZ(i,p.getZ(i)+.185+(p.getY(i)-.46)*.15+p.getX(i)**2*.35);
  backGeometry.computeVertexNormals();addMesh(chair,'弧面圆角靠背与十二个竖向孔',backGeometry,mat);
  const seat=roundedPath(-.24,-.245,.48,.48,.045);
  for(const row of [-.12,-.02,.08])for(const col of [-.135,-.045,.045,.135])seat.holes.push(roundedPath(col-.013,row,.026,.052,.011,THREE.Path));
  const seatMesh=addMesh(chair,'带真实排水孔的圆角坐面',extruded(seat,.038),mat,[0,.495,0]);seatMesh.rotation.x=Math.PI/2;
  for(const side of [-1,1]){
    const outline=new THREE.Shape();outline.moveTo(-.245,.43);outline.lineTo(-.245,.61);outline.quadraticCurveTo(-.24,.66,-.17,.67);outline.bezierCurveTo(-.02,.67,.12,.69,.205,.77);outline.lineTo(.23,.46);outline.quadraticCurveTo(0,.41,-.245,.43);
    const opening=new THREE.Path();opening.absellipse(-.012,.56,.149,.065,0,Math.PI*2,true);outline.holes.push(opening);
    const small=new THREE.Path();small.absellipse(-.207,.506,.014,.047,0,Math.PI*2,true);outline.holes.push(small);
    const sideMesh=addMesh(chair,'扶手侧面大镂空与前端小孔',extruded(outline,.028),mat,[side*.242+.014,0,0]);sideMesh.rotation.y=-Math.PI/2;
  }
  for(const dx of [-.193,.193])for(const dz of [-.178,.178]){
    const geometry=new THREE.BoxGeometry(.065,.445,.065,1,4,1),pos=geometry.attributes.position;
    for(let i=0;i<pos.count;i++){const y=pos.getY(i),t=(.2225-y)/.445;pos.setX(i,pos.getX(i)*(1-.18*t)+Math.sign(dx)*.035*t);pos.setZ(i,pos.getZ(i)*(1-.18*t)+Math.sign(dz)*.035*t);}
    geometry.computeVertexNormals();addMesh(chair,'向外张开的注塑椅腿',geometry,mat,[dx,.238,dz]);
  }
  const relief=new THREE.MeshStandardMaterial({color:color==='青色'?'#558b80':'#5b819a',roughness:.38});
  for(const y of [.935,.959,.983]){
    const pts=[];for(let i=0;i<=12;i++){const x=-.066+i*.011;pts.push(new THREE.Vector3(x,y-Math.sin(i/12*Math.PI)*.008,.177+(y-.46)*.15+x*x*.35));}
    addMesh(chair,'靠背顶部浅浮雕',new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),12,.0035,6,false),relief);
  }
  return chair;
}
