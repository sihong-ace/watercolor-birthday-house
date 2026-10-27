import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

function mesh(parent,name,geometry,material,position){const o=new THREE.Mesh(geometry,material);o.name=name;o.position.set(...position);o.castShadow=o.receiveShadow=true;parent.add(o);return o;}
function box(parent,name,size,pos,material,r=.012){return mesh(parent,name,new RoundedBoxGeometry(...size,4,Math.min(r,Math.min(...size)*.4)),material,pos);}
function ball(parent,name,r,pos,material){return mesh(parent,name,new THREE.SphereGeometry(r,16,12),material,pos);}
function cylinder(parent,name,r,h,pos,material){return mesh(parent,name,new THREE.CylinderGeometry(r,r,h,48),material,pos);}
const mat=(color,roughness=.75)=>new THREE.MeshStandardMaterial({color,roughness});
function canvasMaterial(draw){const canvas=document.createElement('canvas');canvas.width=canvas.height=512;draw(canvas.getContext('2d'));const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=8;return new THREE.MeshStandardMaterial({map,roughness:.7});}

export function createBlackTelephone(){
  const phone=new THREE.Group();phone.name='电视柜转角的老式座机';phone.position.set(-1.99,.698,-.55);phone.rotation.y=-Math.PI/2;
  const black=mat('#303738',.55),key=mat('#242b2c',.48),rim=mat('#414949',.6),orange=mat('#bc8054',.6);
  box(phone,'黑色电话下壳',[.31,.040,.36],[0,.020,0],black,.018);
  // Local XY face is tilted as one unit; all buttons sit on the same slope.
  const face=new THREE.Group();face.rotation.x=-Math.PI/2+.18;face.position.set(0,.060,-.010);phone.add(face);
  box(face,'圆角斜面机身',[.31,.36,.038],[0,0,0],black,.019);
  const receiver=box(face,'左侧长听筒',[.080,.335,.057],[-.108,.001,.039],black,.025);
  for(const y of [-.126,.126])box(face,'听筒圆润两端',[.083,.072,.062],[-.108,y,.048],black,.025);
  box(face,'液晶屏外框',[.163,.071,.014],[.055,.113,.027],rim,.007);
  box(face,'绿色液晶显示屏',[.139,.047,.007],[.055,.113,.038],mat('#82946d',.75),.003);
  const lcd=canvasMaterial(ctx=>{ctx.fillStyle='#82946d';ctx.fillRect(0,0,512,512);ctx.fillStyle='rgba(61,74,50,.34)';ctx.font='90px monospace';ctx.textAlign='center';ctx.fillText('10:08',256,325);});
  mesh(face,'液晶屏淡色数字',new THREE.PlaneGeometry(.132,.039),lcd,[.055,.113,.043]).castShadow=false;
  const disk=cylinder(face,'圆形方向键',.027,.007,[.055,.047,.031],key);disk.rotation.x=Math.PI/2;
  const ok=canvasMaterial(ctx=>{ctx.fillStyle='#242b2c';ctx.fillRect(0,0,512,512);ctx.fillStyle='#b6bfb9';ctx.font='110px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('OK',256,256);for(let i=0;i<4;i++){ctx.save();ctx.translate(256,256);ctx.rotate(i*Math.PI/2);ctx.beginPath();ctx.moveTo(-26,-165);ctx.lineTo(26,-165);ctx.lineTo(0,-202);ctx.fill();ctx.restore();}});
  mesh(face,'方向键图标',new THREE.CircleGeometry(.025,32),ok,[.055,.047,.036]).castShadow=false;
  for(const x of [.002,.11])box(face,'屏幕下功能键',[.030,.012,.009],[x,.047,.026],key,.004);
  const labels=canvasMaterial(ctx=>{ctx.fillStyle='#242b2c';ctx.fillRect(0,0,512,512);ctx.fillStyle='#d6dcd6';ctx.font='68px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';const text=['1','2','3','4','5','6','7','8','9','*','0','#'];for(let row=0;row<4;row++)for(let col=0;col<3;col++)ctx.fillText(text[row*3+col],(col+.5)*512/3,(row+.5)*128);});
  for(let row=0;row<4;row++)for(let col=0;col<3;col++){
    const x=-.006+col*.045,y=-.006-row*.038;
    const keyBody=box(face,'黑色椭圆数字按键',[.036,.026,.012],[x,y,.028],key,.010);
    const geometry=new THREE.PlaneGeometry(.025,.020),uv=geometry.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,(uv.getX(i)+col)/3,(uv.getY(i)+3-row)/4);
    keyBody.userData.digit=['1','2','3','4','5','6','7','8','9','*','0','#'][row*3+col];
    const number=mesh(face,'按键数字',geometry,labels,[x,y,.035]);number.castShadow=false;number.userData.digit=keyBody.userData.digit;
  }
  for(const y of [-.010,-.045,-.080,-.115])box(face,'侧边记忆功能键',[.014,.019,.009],[.132,y,.026],key,.006);
  box(face,'橙色免提按钮',[.041,.025,.010],[.123,-.148,.028],orange,.009);
  const cord=[];for(let i=0;i<=128;i++){const t=i/128;cord.push(new THREE.Vector3(-.166+Math.sin(t*Math.PI*24)*.008,.037-t*.020,-.135+t*.245));}
  mesh(phone,'卷曲黑色电话线',new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cord),128,.0028,5,false),black,[0,0,0]);
  return phone;
}

export function createStrawberryCake(){
  const cake=new THREE.Group();cake.name='双层奶油草莓生日蛋糕';cake.position.set(1.49,.958,-1.35);
  const cream=mat('#eee8d9',.87),icing=mat('#fbf3e1',.88),red=mat('#b6473d',.75),green=mat('#63816a',.8),seed=mat('#d9bc8d');
  cylinder(cake,'蛋糕白瓷盘',.30,.022,[0,-.011,0],cream);
  for(const [radius,bottom,height] of [[.25,0,.20],[.18,.20,.17]]){
    cylinder(cake,'白奶油蛋糕层',radius,height,[0,bottom+height/2,0],cream);
    cylinder(cake,'柔和奶油顶面',radius+.003,.012,[0,bottom+height,0],icing);
    for(let i=0;i<42;i++){const a=i/42*Math.PI*2;
      const piped=ball(cake,'顶部波浪奶油',.012,[Math.cos(a)*(radius-.006),bottom+height+.008,Math.sin(a)*(radius-.006)],icing);piped.scale.set(.85,1.45,.85);
      ball(cake,'底缘奶油裱花',.010,[Math.cos(a)*radius,bottom+.014,Math.sin(a)*radius],icing);
    }
    for(let i=0;i<6;i++){
      const points=[];for(let j=0;j<=18;j++){const t=j/18,a=(i+t)/6*Math.PI*2;points.push(new THREE.Vector3(Math.cos(a)*(radius+.004),bottom+.087-Math.sin(t*Math.PI)*.046,Math.sin(a)*(radius+.004)));}
      mesh(cake,'红色弧形裱花带',new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),24,.006,8,false),red,[0,0,0]);
      for(let j=0;j<=18;j++){const p=points[j];const frill=ball(cake,'奶油扇形花边',.010,[p.x,bottom+.100-Math.sin(j/18*Math.PI)*.046,p.z],icing);frill.scale.y=1.8;}
      const a=i/6*Math.PI*2;for(const da of [-.022,.022])ball(cake,'侧面红色小果饰',.010,[Math.cos(a+da)*(radius+.009),bottom+.13,Math.sin(a+da)*(radius+.009)],red);
      const leaf=ball(cake,'侧面果饰小叶',.012,[Math.cos(a)*(radius+.01),bottom+.149,Math.sin(a)*(radius+.01)],green);leaf.scale.set(1,.30,.6);
    }
  }
  for(let i=0;i<8;i++){
    const a=i/8*Math.PI*2,x=Math.cos(a)*.110,z=Math.sin(a)*.110;
    const berry=ball(cake,'顶部草莓',.029,[x,.405,z],red);berry.scale.set(.85,1.30,.85);
    for(let j=0;j<7;j++){const angle=j/7*Math.PI*2;const s=ball(cake,'草莓细籽',.0018,[x+Math.cos(angle)*.024,.407,z+Math.sin(angle)*.024],seed);s.scale.y=1.5;}
    const calyx=ball(cake,'草莓绿叶冠',.015,[x,.438,z],green);calyx.scale.y=.22;
  }
  const flames=[];
  const colors=['#d6a16f','#8da397','#c89b8c','#87a4b0','#e3c77e','#c58e7c'];
  for(let i=0;i<6;i++){
    const a=i/6*Math.PI*2,x=Math.cos(a)*.055,z=Math.sin(a)*.055,h=.11+(i%3)*.015;
    cylinder(cake,'生日蜡烛',.0065,h,[x,.379+h/2,z],mat(colors[i]));
    for(let j=0;j<5;j++){const band=cylinder(cake,'蜡烛细条纹',.0068,.004,[x,.385+j*h/5,z],icing);}
    cylinder(cake,'蜡烛灯芯',.001,.008,[x,.383+h,z],mat('#665344'));
    const flame=new THREE.Group();flame.name='燃着的烛焰';flame.position.set(x,.389+h,z);cake.add(flame);flames.push(flame);
    const shape=[new THREE.Vector2(0,0),new THREE.Vector2(.005,.006),new THREE.Vector2(.008,.016),new THREE.Vector2(.004,.031),new THREE.Vector2(0,.044)];
    mesh(flame,'烛焰外层',new THREE.LatheGeometry(shape,16),new THREE.MeshBasicMaterial({color:'#ffb858',toneMapped:false}),[0,0,0]).castShadow=false;
    const core=mesh(flame,'烛焰亮芯',new THREE.LatheGeometry(shape,12),new THREE.MeshBasicMaterial({color:'#fff5d6',toneMapped:false}),[0,.001,.003]);core.scale.set(.45,.65,.45);core.castShadow=false;
  }
  const candleLight=new THREE.PointLight('#ffc178',.32,2.4,2);candleLight.position.set(0,.55,0);cake.add(candleLight);
  const candleBounce=new THREE.PointLight('#ffd09a',.09,1.5,2);candleBounce.position.set(0,.32,.55);cake.add(candleBounce);
  cake.userData.candleOut=false;
  cake.userData.extinguish=()=>{cake.userData.candleOut=true;flames.forEach(f=>f.visible=false);candleLight.intensity=0;candleBounce.intensity=0;};
  cake.userData.animate=(seconds,reduced)=>{if(cake.userData.candleOut)return;flames.forEach((flame,i)=>{flame.rotation.z=reduced?0:Math.sin(seconds*3.4+i)*.055;flame.scale.y=reduced?1:1+Math.sin(seconds*5+i)*.06;});candleLight.intensity=reduced?.32:.32+Math.sin(seconds*4)*.025;};
  return cake;
}
