import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

export function createPorchHarvest(){
  const root=new THREE.Group();root.name='夜晚门外的豇豆收获';root.visible=false;
  // Place the whole arrangement on the tiled landing, in front of the right window.
  root.position.set(0,.336,-2.55);
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;const ctx=canvas.getContext('2d');ctx.fillStyle='#93714a';ctx.fillRect(0,0,256,256);
  for(let row=0;row<16;row++)for(let col=0;col<16;col++){const x=col*16,y=row*16;ctx.fillStyle=(row+col)%2?'#ba996a':'#a18050';ctx.fillRect(x+1,y+1,14,14);ctx.fillStyle='#d1b38380';ctx.fillRect(x+2,y+2,(row+col)%2?3:12,(row+col)%2?12:3);ctx.fillStyle='#624c303b';ctx.fillRect(x,y+14,16,2);}
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(5,2);
  const wicker=new THREE.MeshStandardMaterial({map:texture,color:'#d4b786',roughness:.96});
  const cane=new THREE.MeshStandardMaterial({color:'#b89867',roughness:.9});const dark=new THREE.MeshStandardMaterial({color:'#685039',roughness:.95});
  const mesh=(name,geometry,material,parent=root)=>{const object=new THREE.Mesh(geometry,material);object.name=name;object.castShadow=true;object.receiveShadow=true;parent.add(object);return object;};
  const basket=new THREE.Group();basket.name='装满豇豆的编织背篓';basket.position.set(1.52,.012,2.29);root.add(basket);
  const profile=[new THREE.Vector2(.235,0),new THREE.Vector2(.25,.06),new THREE.Vector2(.29,.35),new THREE.Vector2(.355,.70),new THREE.Vector2(.349,.724),new THREE.Vector2(.335,.713),new THREE.Vector2(.273,.34),new THREE.Vector2(.232,.03)];mesh('交错竹编篓身',new THREE.LatheGeometry(profile,64),wicker,basket);
  for(let i=0;i<19;i++){const y=.025+i*.038,r=.246+y*.152;const ring=mesh('连续横向竹篾',new THREE.TorusGeometry(r,.0045,4,64),cane,basket);ring.rotation.x=Math.PI/2;ring.position.y=y;}
  for(let i=0;i<28;i++){const angle=i*Math.PI*2/28;const points=[0,.18,.39,.58,.72].map(y=>new THREE.Vector3(Math.cos(angle)*(.248+y*.15),y,Math.sin(angle)*(.248+y*.15)));mesh('竖向竹篾压边',new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),12,.0045,4,false),cane,basket);}
  for(const y of [.706,.723]){const rim=mesh('双层卷边篓口',new THREE.TorusGeometry(.35,.009,8,64),cane,basket);rim.rotation.x=Math.PI/2;rim.position.y=y;}
  for(const x of [-.14,.14]){const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(x,.63,.27),new THREE.Vector3(x,.40,.37),new THREE.Vector3(x,.06,.33),new THREE.Vector3(x,-.008,.21)]);mesh('旧背篓深色肩带',new THREE.TubeGeometry(curve,24,.014,6,false),dark,basket);}
  const greens=['#83a04c','#9eb45b','#6f9149','#afbd6c'].map(color=>new THREE.MeshStandardMaterial({color,roughness:.8}));
  const beanGeometry=new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(.022,.21,.014),new THREE.Vector3(-.018,.42,.025),new THREE.Vector3(.036,.62,0),new THREE.Vector3(.055,.72,-.018)]),24,.006,5,false);
  // Shared curved geometry keeps the many beans inexpensive to render.
  const matrix=new THREE.Matrix4(),position=new THREE.Vector3(),quaternion=new THREE.Quaternion(),scale=new THREE.Vector3(),euler=new THREE.Euler();
  for(let color=0;color<4;color++){const beans=new THREE.InstancedMesh(beanGeometry,greens[color],27);beans.name='篓内饱满的长豇豆';beans.castShadow=true;beans.receiveShadow=true;
    for(let i=0;i<27;i++){const n=i*4+color,a=n*2.399,r=.27*Math.sqrt((n%29)/29);position.set(Math.cos(a)*r,.45+(n%6)*.018,Math.sin(a)*r);euler.set(.40+Math.sin(n)*.6,a,.35+Math.cos(n)*.55);quaternion.setFromEuler(euler);scale.set(1,.6+(n%5)*.08,1);matrix.compose(position,quaternion,scale);beans.setMatrixAt(i,matrix);}basket.add(beans);}
  for(let b=0;b<3;b++){const bundle=new THREE.Group();bundle.name='扎好的整束豇豆';bundle.position.set(1.10+b*.24,.035,2.81-b*.08);bundle.rotation.y=.24-b*.15;root.add(bundle);
    const beans=new THREE.InstancedMesh(beanGeometry,greens[b],24);beans.castShadow=true;beans.receiveShadow=true;for(let i=0;i<24;i++){const a=i*2.399,r=.075*Math.sqrt(i/24);position.set(Math.cos(a)*r,Math.sin(a)*r+.065,(i%4)*.016);quaternion.setFromEuler(new THREE.Euler(Math.PI/2,0,(i%3-1)*.025));scale.set(1,.84+(i%5)*.04,1);matrix.compose(position,quaternion,scale);beans.setMatrixAt(i,matrix);}bundle.add(beans);
    for(const z of [.20,.46]){const tie=mesh('捆豆的细竹篾',new THREE.TorusGeometry(.085,.005,5,24),cane,bundle);tie.position.set(0,.063,z);}
  }
  const wood=new THREE.MeshStandardMaterial({color:'#826442',roughness:.88});const lightWood=new THREE.MeshStandardMaterial({color:'#a98c62',roughness:.9});
  for(const [x,z,yaw]of [[.96,2.94,-.22],[2.04,2.66,.18]]){const stool=new THREE.Group();stool.name='门外旧木板凳';stool.position.set(x,.006,z);stool.rotation.y=yaw;root.add(stool);const seat=mesh('圆润木凳面',new RoundedBoxGeometry(.48,.055,.26,3,.025),lightWood,stool);seat.position.y=.29;for(const dx of [-.17,.17])for(const dz of [-.08,.08]){const leg=mesh('外撇木凳脚',new RoundedBoxGeometry(.037,.28,.037,2,.005),wood,stool);leg.position.set(dx,.14,dz);leg.rotation.z=-Math.sign(dx)*.10;}const brace=mesh('木凳横撑',new RoundedBoxGeometry(.36,.026,.026,2,.005),wood,stool);brace.position.y=.12;}
  const light=new THREE.PointLight('#eed9ad',0,2.5,2);light.position.set(1.6,1.1,2.75);root.add(light);
  return {root,update(amount){root.visible=amount>.005;light.intensity=amount*.55;}};
}
