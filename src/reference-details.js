import * as THREE from 'three';
// Generic calligraphy decorations; no private house reference image.
export function createReferenceDetails(){
 const patch=(text,w,h,vertical)=>{const cv=document.createElement('canvas');cv.width=vertical?256:768;cv.height=vertical?1536:256;const c=cv.getContext('2d');c.fillStyle='#a94332';c.fillRect(0,0,cv.width,cv.height);c.strokeStyle='#c5a364';c.lineWidth=10;c.strokeRect(15,15,cv.width-30,cv.height-30);c.fillStyle='#e8d5a0';c.textAlign='center';c.textBaseline='middle';c.font='110px SimSun,serif';if(vertical){[...text].forEach((v,i)=>c.fillText(v,128,(i+.5)*1536/text.length));}else c.fillText(text,384,128);const map=new THREE.CanvasTexture(cv);map.colorSpace=THREE.SRGBColorSpace;return new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshStandardMaterial({map,roughness:1,side:THREE.DoubleSide}));};
 return {left:patch('春风送暖入小院',.245,1.89,true),right:patch('喜乐常伴满人间',.245,1.89,true),lintel:patch('平安喜乐',.60,.215,false)};
}
