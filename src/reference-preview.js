import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createBlackTelephone,createStrawberryCake} from './reference-objects.js';

// Separate close-up artifact; no extra controls are added to the birthday flow.
export function mountReferencePreview(host,kind){
  const scene=new THREE.Scene(),model=kind==='phone'?createBlackTelephone():createStrawberryCake();model.position.set(0,0,0);model.rotation.y=0;scene.add(model);
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;renderer.domElement.setAttribute('role','img');renderer.domElement.setAttribute('aria-label',kind==='phone'?'黑色液晶屏老式座机近景':'双层奶油草莓蛋糕与一支燃着的蜡烛近景');host.appendChild(renderer.domElement);
  const camera=new THREE.PerspectiveCamera(35,1,.01,10),controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.enablePan=false;controls.minDistance=kind==='phone'?.45:.75;controls.maxDistance=2;
  if(kind==='phone'){camera.position.set(.03,.60,.43);controls.target.set(0,.06,0);}else{camera.position.set(.65,.68,1.0);controls.target.set(0,.24,0);}controls.update();
  scene.add(new THREE.HemisphereLight('#f2f4ec','#c0b8a7',1.7));const sun=new THREE.DirectionalLight('#fff9ee',2);sun.position.set(-2,4,3);scene.add(sun);const fill=new THREE.DirectionalLight('#e8edf0',.6);fill.position.set(3,2,-2);scene.add(fill);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame,disposed=false;
  const resize=()=>{if(!host.clientWidth||!host.clientHeight)return;renderer.setSize(host.clientWidth,host.clientHeight);camera.aspect=host.clientWidth/host.clientHeight;camera.updateProjectionMatrix();};const observer=new ResizeObserver(resize);observer.observe(host);resize();
  const render=()=>{if(disposed)return;frame=requestAnimationFrame(render);controls.update();model.userData.animate?.(performance.now()/1000,reduced.matches);renderer.render(scene,camera);};render();
  return {dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();controls.dispose();const geometries=new Set(),materials=new Set(),textures=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material){materials.add(o.material);if(o.material.map)textures.add(o.material.map);}});geometries.forEach(o=>o.dispose());materials.forEach(o=>o.dispose());textures.forEach(o=>o.dispose());renderer.dispose();renderer.domElement.remove();}};
}
