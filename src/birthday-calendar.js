import * as THREE from 'three';

export function createBirthdayCalendar(){
  const root=new THREE.Group();root.name='2026年6月生日挂历';root.position.set(1.50,1.99,-2.055);
  const red=new THREE.MeshStandardMaterial({color:'#bb2b25',roughness:.85});
  const backing=new THREE.Mesh(new THREE.BoxGeometry(.55,.79,.025),red);backing.castShadow=true;root.add(backing);
  const hanger=new THREE.Mesh(new THREE.TorusGeometry(.021,.004,6,24),new THREE.MeshStandardMaterial({color:'#b99a56',metalness:.5,roughness:.5}));hanger.position.set(0,.417,0);root.add(hanger);
  let alive=true;
  const loader=new THREE.TextureLoader();const art=loader.load(new URL('assets/doodles/birthday.png',document.baseURI).href,texture=>{if(!alive){texture.dispose();return;}upper.material.map=texture;upper.material.needsUpdate=true;});art.colorSpace=THREE.SRGBColorSpace;
  const geometry=new THREE.PlaneGeometry(.525,.40),uv=geometry.attributes.uv;
  // Use the complete public doodle artwork.
  const upper=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({roughness:.9}));upper.position.set(0,.17,.014);root.add(upper);
  const cv=document.createElement('canvas');cv.width=1024;cv.height=640;const c=cv.getContext('2d');c.fillStyle='#fff9eb';c.fillRect(0,0,1024,640);
  c.fillStyle='#b62726';c.font='bold 68px SimSun, serif';c.textAlign='center';c.fillText('2026年 6月',512,95);
  const labels=['一','二','三','四','五','六','日'];c.font='30px sans-serif';labels.forEach((label,col)=>{c.fillStyle=col>4?'#b62726':'#817462';c.fillText(label,(col+.5)*1024/7,175);});
  const offset=(new Date(Date.UTC(2026,5,1)).getUTCDay()+6)%7;
  const dayPositions={};
  for(let day=1;day<=30;day++){
    const slot=offset+day-1,col=slot%7,row=Math.floor(slot/7),x=(col+.5)*1024/7,y=240+row*80;
    c.fillStyle=col>4?'#bd352c':'#423e36';c.font='bold 51px Arial';c.fillText(String(day),x,y+17);
    if(day===8||day===18){c.strokeStyle='#c4342d';c.lineWidth=7;c.beginPath();c.ellipse(x,y,50,35,-.12,0,Math.PI*2);c.stroke();dayPositions[day]=new THREE.Vector3((x/1024-.5)*.525,-.213+.328/2-y/640*.328,.017);}
  }
  const map=new THREE.CanvasTexture(cv);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=4;
  const page=new THREE.Mesh(new THREE.PlaneGeometry(.525,.328),new THREE.MeshStandardMaterial({map,roughness:.95}));page.position.set(0,-.213,.016);root.add(page);
  for(let i=0;i<17;i++){const wire=new THREE.Mesh(new THREE.TorusGeometry(.007,.0018,5,10),new THREE.MeshStandardMaterial({color:'#806347',roughness:.7}));wire.position.set(-.24+i*.03,-.035,.022);root.add(wire);}
  return {root,page,dayPositions,dispose(){alive=false;art.dispose();},dayFromUV(uv){if(!uv)return null;const x=uv.x*1024,y=(1-uv.y)*640;if(y<200)return null;const col=Math.floor(x/(1024/7)),row=Math.floor((y-200)/80),day=row*7+col-offset+1;return day===8||day===18?day:null;}};
}
