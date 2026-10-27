import * as THREE from 'three';

// Each scene owns its textures; scene disposal can safely release every map.
export function createSampleMaterial(file,{color='#ffffff',roughness=.85,repeat=[1,1],mirrored=false,worldSpan,woodGrain=false,folder='samples-v1'}={}){
  const material=new THREE.MeshStandardMaterial({color,roughness});
  const map=new THREE.TextureLoader().load(new URL(`assets/textures/${folder}/${file}`,document.baseURI).href,undefined,undefined,()=>{
    // Leave the room usable if a local texture cannot be loaded.
    if(material.map===map){material.map=null;material.needsUpdate=true;}map.dispose();
  });
  map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=mirrored?THREE.MirroredRepeatWrapping:THREE.RepeatWrapping;
  map.repeat.set(...repeat);map.anisotropy=8;material.map=map;
  if(worldSpan)material.userData.worldSpan=worldSpan;
  if(woodGrain)material.userData.woodGrain=true;
  return material;
}
