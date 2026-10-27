import * as THREE from 'three';
import {createPaintedMaterials} from './painted-materials.js';
import {createSampleMaterial} from './sample-textures.js';

// Separate room palette: the already approved porch materials stay independent.
export function createInteriorMaterials(){
  const m=createPaintedMaterials();let seed=831;
  const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  function texture(draw){const c=document.createElement('canvas');c.width=c.height=512;draw(c.getContext('2d'),512);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;return t;}
  const timber=(color,roughness=.70)=>createSampleMaterial('01-aged-wood.png',{color,roughness,mirrored:true,woodGrain:true});
  // Dispose replaced procedural materials immediately, including their maps.
  const replace=(key,value)=>{m[key].map?.dispose();m[key].dispose();m[key]=value;};
  replace('wood',timber('#d4c5b4'));replace('darkWood',timber('#8c7763'));replace('panel',timber('#ede5d8'));
  m.oldWood=timber('#c5bfad',.90);
  replace('floor',createSampleMaterial('05-pale-terracotta-tiles.png',{worldSpan:1.6,roughness:.94}));
  replace('cream',new THREE.MeshStandardMaterial({color:'#e8e8df',roughness:.60,metalness:.12}));
  replace('pipe',new THREE.MeshStandardMaterial({color:'#b69b64',roughness:.42,metalness:.65}));
  replace('concrete',new THREE.MeshStandardMaterial({color:'#d6cec0',roughness:.95}));
  m.wall=createSampleMaterial('04-ivory-plaster.png',{worldSpan:1.8,mirrored:true,roughness:1});
  m.wallLower=m.wall.clone();m.wallLower.color.set('#c5ccb8');m.wallLower.userData.worldSpan=1.8;
  m.view=new THREE.MeshBasicMaterial({map:texture((ctx,s)=>{
    const sky=ctx.createLinearGradient(0,0,0,s);sky.addColorStop(0,'#d9e7e1');sky.addColorStop(.55,'#eeeade');sky.addColorStop(1,'#abb798');ctx.fillStyle=sky;ctx.fillRect(0,0,s,s);
    for(let layer=0;layer<3;layer++){ctx.fillStyle=['#bdcbb7','#a7bba4','#91a889'][layer];ctx.beginPath();ctx.moveTo(0,s);for(let x=0;x<=s;x+=8)ctx.lineTo(x,275+layer*55+Math.sin(x/(75-layer*13)+layer)*22);ctx.lineTo(s,s);ctx.fill();}
    for(let i=0;i<1500;i++){ctx.fillStyle='rgba(242,236,208,.12)';ctx.fillRect(random()*s,random()*s,2,2);}
  }),color:'#e6ece6'});
  const used=new Set(['wood','darkWood','panel','oldWood','cream','pipe','concrete','metal','frame','floor','wall','wallLower','view']);
  for(const key of Object.keys(m))if(!used.has(key)){m[key].map?.dispose();m[key].dispose();delete m[key];}
  return m;
}
