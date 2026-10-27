import * as THREE from 'three';
import {createRestingCat} from './resting-cats.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

export function createBirthdayRoomDetails(){
  const root=new THREE.Group();root.name='生日桌布置与烤火狸花猫';
  const material=color=>new THREE.MeshStandardMaterial({color,roughness:.85});
  const paper=material('#e9d7b3'),green=material('#7e906f'),red=material('#a45f4e'),blue=material('#7e969b'),gold=material('#a18b59'),cream=material('#eee5d2');
  const add=(parent,name,geo,mat,pos)=>{const mesh=new THREE.Mesh(geo,mat);mesh.name=name;mesh.position.set(...pos);mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);return mesh;};
  const box=(parent,name,size,mat,pos)=>add(parent,name,new RoundedBoxGeometry(...size,3,.008),mat,pos);
  const sphere=(parent,name,size,mat,pos)=>{const o=add(parent,name,new THREE.SphereGeometry(1,24,16),mat,pos);o.scale.set(...size);return o;};
  const curve=(parent,name,points,r,mat)=>add(parent,name,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),24,r,6,false),mat,[0,0,0]);
  const wrapCanvas=document.createElement('canvas');wrapCanvas.width=wrapCanvas.height=512;const wrap=wrapCanvas.getContext('2d');wrap.fillStyle='#e6d3ac';wrap.fillRect(0,0,512,512);
  for(let y=24;y<512;y+=72)for(let x=24;x<512;x+=72){wrap.strokeStyle='#798469';wrap.lineWidth=2;wrap.beginPath();wrap.moveTo(x,y+15);wrap.lineTo(x+8,y-15);wrap.stroke();wrap.fillStyle='#7f906c';for(let side of [-1,1]){wrap.beginPath();wrap.ellipse(x+side*7,y,9,3,side*.5,0,Math.PI*2);wrap.fill();}wrap.fillStyle='#ae7960';for(let i=0;i<5;i++){const a=i*Math.PI*2/5;wrap.beginPath();wrap.ellipse(x+8+Math.cos(a)*5,y-17+Math.sin(a)*5,4,2,a,0,Math.PI*2);wrap.fill();}}
  const wrapMap=new THREE.CanvasTexture(wrapCanvas);wrapMap.colorSpace=THREE.SRGBColorSpace;const wrapping=new THREE.MeshStandardMaterial({map:wrapMap,roughness:.9});
  const ribbon=(parent,points,width,color)=>{const path=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),vertices=[],indices=[];for(let i=0;i<=32;i++){const p=path.getPoint(i/32);vertices.push(p.x,p.y,p.z-width/2,p.x,p.y,p.z+width/2);if(i<32){const k=i*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}}const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();const satin=color.clone();satin.side=THREE.DoubleSide;satin.roughness=.48;return add(parent,'柔软缎带蝴蝶结',geometry,satin,[0,0,0]);};
  for(const [x,z,size,color] of [[.91,-1.31,.23,red],[1.05,-1.03,.16,green]]){
    const gift=new THREE.Group();gift.name='生日礼物盒';gift.position.set(x,.938+size/2,z);root.add(gift);
    box(gift,'复古碎花礼盒',[size,size,size],wrapping,[0,0,0]);box(gift,'独立礼盒盖',[size+.012,.027,size+.012],wrapping,[0,size/2-.008,0]);
    box(gift,'礼盒缎带',[size+.002,.028,size+.003],color,[0,.02,0]);box(gift,'礼盒十字缎带',[.025,size+.003,size+.003],color,[0,0,0]);
    for(const side of [-1,1])ribbon(gift,[[0,size/2+.021,0],[side*size*.20,size/2+.075,-.01],[side*size*.35,size/2+.039,0],[side*size*.19,size/2+.02,.012],[0,size/2+.025,0]],.025,color);
    sphere(gift,'缎带中心结',[.020,.012,.018],color,[0,size/2+.025,0]);
    ribbon(gift,[[0,size/2+.020,0],[size*.18,size/2+.003,0],[size*.41,size/2+.003,-.014],[size*.51,size/2-.036,-.018]],.028,color);
  }
  const porcelain=new THREE.MeshPhysicalMaterial({color:'#eee6d5',roughness:.27,clearcoat:.5});
  const metal=new THREE.MeshStandardMaterial({color:'#b79b60',metalness:.82,roughness:.28});
  for(const [x,z]of [[1.97,-1.30],[1.74,-.97]]){
    const dish=new THREE.Group();dish.name='青花瓷碟与精细甜点叉';dish.position.set(x,.939,z);root.add(dish);
    add(dish,'有凹面的瓷碟',new THREE.LatheGeometry([new THREE.Vector2(0,.004),new THREE.Vector2(.048,.004),new THREE.Vector2(.06,.008),new THREE.Vector2(.078,.018),new THREE.Vector2(.089,.020),new THREE.Vector2(.09,.017),new THREE.Vector2(.073,.007),new THREE.Vector2(.041,0)],48),porcelain,[0,0,0]);
    for(let i=0;i<15;i++){const a=i*Math.PI*2/15;for(let j=0;j<4;j++){const p=a+j*Math.PI/2;const petal=sphere(dish,'瓷碟釉上青花',[.0032,.0008,.0016],blue,[Math.cos(a)*.076+Math.cos(p)*.003,.021,Math.sin(a)*.076+Math.sin(p)*.003]);petal.rotation.y=-p;}}
    const fork=new THREE.Group();fork.name='一体黄铜甜点叉';fork.position.set(.025,.025,.012);fork.rotation.y=.45;dish.add(fork);
    const shape=new THREE.Shape();shape.moveTo(-.005,-.075);shape.quadraticCurveTo(-.009,-.087,.005,-.081);shape.lineTo(.007,.016);shape.quadraticCurveTo(.020,.033,.018,.048);shape.lineTo(.018,.075);
    for(let j=0;j<4;j++){const right=.018-j*.009;shape.lineTo(right-.003,.075);shape.lineTo(right-.003,.046);if(j<3){shape.lineTo(right-.009,.046);shape.lineTo(right-.009,.075);}}
    shape.lineTo(-.017,.034);shape.quadraticCurveTo(-.012,.021,-.006,.016);shape.lineTo(-.005,-.075);
    const utensil=add(fork,'四齿与圆润叉柄',new THREE.ExtrudeGeometry(shape,{depth:.002,bevelEnabled:true,bevelSize:.001,bevelThickness:.001,bevelSegments:2,steps:1}),metal,[0,0,0]);utensil.rotation.x=-Math.PI/2;
  }
  for(const [x,z]of [[2.16,-1.35],[2.03,-.99]]){
    add(root,'桌上青花茶杯',new THREE.CylinderGeometry(.046,.036,.068,32),cream,[x,.975,z]);
    add(root,'茶杯里的茶',new THREE.CylinderGeometry(.041,.041,.003,24),material('#69513c'),[x,1.011,z]);
    add(root,'茶杯把手',new THREE.TorusGeometry(.025,.006,8,24),cream,[x+.049,.983,z]).rotation.y=Math.PI/2;
    for(let i=0;i<3;i++)sphere(root,'茶杯小花',[.006,.006,.002],blue,[x-.018+i*.018,.977,z+.041]);
  }
  const card=box(root,'生日贺卡',[.15,.14,.006],paper,[1.00,1.008,-.85]);card.rotation.x=-.15;
  const cv=document.createElement('canvas');cv.width=512;cv.height=384;const ctx=cv.getContext('2d');ctx.fillStyle='#eadbbd';ctx.fillRect(0,0,512,384);ctx.fillStyle='#925d4b';ctx.textAlign='center';ctx.font='italic 64px serif';ctx.fillText('Happy',256,130);ctx.fillText('Birthday!',256,205);ctx.fillStyle='#80916d';for(let i=0;i<6;i++){ctx.beginPath();ctx.ellipse(170+i*30,280,12,5,i*.3,0,Math.PI*2);ctx.fill();}
  const map=new THREE.CanvasTexture(cv);map.colorSpace=THREE.SRGBColorSpace;
  const face=add(root,'贺卡祝福',new THREE.PlaneGeometry(.144,.132),new THREE.MeshStandardMaterial({map,roughness:1}),[1,1.008,-.846]);face.rotation.x=-.15;
  for(let i=0;i<27;i++){const x=.85+(i*47%135)/100,z=-1.92+(i*31%102)/100;if(Math.hypot(x-1.49,z+1.35)<.34)continue;const confetti=add(root,'散落的生日彩纸',new THREE.CircleGeometry(.009,12),[red,green,gold][i%3],[x,.939,z]);confetti.rotation.x=-Math.PI/2;}
  curve(root,'生日桌红缎带',[[.80,.941,-1.86],[.96,.946,-1.70],[.87,.941,-1.55],[1.05,.944,-1.45]],.010,red);
  const tabby=createRestingCat(false);tabby.root.position.set(1.24,.031,1.63);tabby.root.rotation.y=-1.8;root.add(tabby.root);
  const whiteCat=createRestingCat(true);whiteCat.root.position.set(1.91,.595,.04);root.add(whiteCat.root);
  return {root,update(seconds,reduced){tabby.update(seconds,reduced);whiteCat.update(seconds+.7,reduced);}};
}
