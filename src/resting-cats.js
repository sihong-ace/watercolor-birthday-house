import * as THREE from 'three';

export function createRestingCat(white=false){
  const root=new THREE.Group();root.name=white?'木长椅上的白猫':'火盆前趴卧的狸花猫';
  const cv=document.createElement('canvas');cv.width=1024;cv.height=512;const c=cv.getContext('2d');
  c.fillStyle=white?'#e9e4d8':'#ac9980';c.fillRect(0,0,1024,512);
  // Continuous markings belong to the coat, rather than raised bands around the body.
  if(!white){for(let i=0;i<20;i++){c.strokeStyle=i%3?'#695c4c':'#80715b';c.lineWidth=9+i%4*2;c.beginPath();for(let j=0;j<=16;j++){const x=i*54+Math.sin(j*.65+i)*10,y=j*32;if(j)c.lineTo(x,y);else c.moveTo(x,y);}c.stroke();}}
  for(let i=0;i<6500;i++){const x=(i*193)%1024,y=(i*67+i%13*17)%512;c.fillStyle=i%2?'#ffffff12':'#463e3310';c.fillRect(x,y,1,4);}
  const map=new THREE.CanvasTexture(cv);map.colorSpace=THREE.SRGBColorSpace;
  const coat=new THREE.MeshStandardMaterial({map,roughness:1}),soft=new THREE.MeshStandardMaterial({color:white?'#f6f0e4':'#d0c2a9',roughness:1});
  const dark=new THREE.MeshStandardMaterial({color:'#4f483e',roughness:1}),pink=new THREE.MeshStandardMaterial({color:'#c39790',roughness:1});
  const add=(parent,name,geo,material,pos)=>{const m=new THREE.Mesh(geo,material);m.name=name;m.position.set(...pos);m.castShadow=m.receiveShadow=true;parent.add(m);return m;};
  const ball=(parent,name,size,material,pos)=>{const m=add(parent,name,new THREE.SphereGeometry(1,32,24),material,pos);m.scale.set(...size);return m;};
  const line=(parent,name,points,r,material)=>add(parent,name,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),24,r,6,false),material,[0,0,0]);
  const ears=[];let twitchStart=-Infinity;
  root.userData.twitch=now=>{twitchStart=now;};
  const body=ball(root,'自然趴卧的柔软猫身',[.145,.115,.245],coat,[0,.125,-.035]);
  ball(root,'猫肩胸部',[.13,.105,.125],coat,[0,.127,.13]);
  for(const side of [-1,1]){
    ball(root,'折起的后腿',[.089,.066,.105],coat,[side*.105,.075,-.19]);
    ball(root,'并拢的前爪',[.048,.032,.090],soft,[side*.067,.035,.245]);
    for(let j=0;j<2;j++)line(root,'猫爪趾缝',[[side*.067-.012+j*.018,.052,.309],[side*.067-.012+j*.018,.051,.282]],.001,white?soft:dark);
  }
  const head=new THREE.Group();head.position.set(0,.174,.19);head.rotation.x=-.13;root.add(head);
  ball(head,'猫头与面颊',[.113,.088,.095],coat,[0,0,0]);
  for(const side of [-1,1]){
    ball(head,'圆润的猫脸颊',[.053,.049,.045],soft,[side*.053,-.020,.061]);
    const earShape=new THREE.Shape();earShape.moveTo(-.037,0);earShape.quadraticCurveTo(-.025,.065,0,.079);earShape.quadraticCurveTo(.033,.04,.037,0);earShape.closePath();
    const ear=add(head,'柔和三角猫耳',new THREE.ExtrudeGeometry(earShape,{depth:.015,bevelEnabled:true,bevelThickness:.008,bevelSize:.006,bevelSegments:3,steps:1}),coat,[side*.074,.046,-.003]);ear.rotation.z=-side*.22;
    const inner=ball(head,'猫耳淡粉内侧',[.018,.025,.004],pink,[side*.078,.078,.022]);inner.rotation.z=-side*.22;ears.push({outer:ear,inner,base:-side*.22,side});
    line(head,'闭着的杏仁猫眼',[[side*.030,.016,.083],[side*.047,.006,.091],[side*.066,.014,.080]],.0028,dark);
    for(let j=0;j<3;j++)line(head,'轻细猫胡须',[[side*.033,-.021+j*.007,.110],[side*.094,-.011+j*.014,.114],[side*.144,-.014+j*.02,.103]],.00065,soft);
  }
  const noseShape=new THREE.Shape();noseShape.moveTo(-.014,0);noseShape.lineTo(.014,0);noseShape.quadraticCurveTo(.009,-.013,0,-.014);noseShape.quadraticCurveTo(-.009,-.013,-.014,0);
  add(head,'猫的粉鼻子',new THREE.ShapeGeometry(noseShape),pink,[0,-.020,.115]);
  line(head,'猫嘴',[[0,-.034,.112],[0,-.041,.109],[-.011,-.044,.105]],.0014,dark);
  line(head,'猫嘴',[[0,-.041,.109],[.011,-.044,.105]],.0014,dark);
  if(!white){for(const x of [-.041,0,.041])line(head,'额头的M形虎斑',[[x,.06,.064],[x*.62,.037,.087],[x,.023,.091]],.005,dark);}
  const tail=new THREE.Group();tail.name='贴着身体蜷起的尾巴';root.add(tail);
  line(tail,'柔软的猫尾',[[-.04,.060,-.245],[-.165,.047,-.295],[-.24,.044,-.19],[-.215,.043,.025],[-.18,.046,.13]],.024,coat);
  return {root,update(seconds,reduced){const elapsed=seconds*1000-twitchStart;for(const ear of ears){const t=elapsed/1300,wave=!reduced&&t>=0&&t<1?Math.sin(t*Math.PI*4)*Math.sin(t*Math.PI)*.20:0;ear.outer.rotation.z=ear.base+wave*ear.side;ear.inner.rotation.z=ear.base+wave*ear.side;}body.scale.y=.115*(reduced?1:1+Math.sin(seconds*1.6)*.026);head.rotation.z=reduced?0:Math.sin(seconds*.45)*.008;tail.rotation.y=reduced?0:Math.sin(seconds*.7)*.015;}};
}
