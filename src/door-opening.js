import * as THREE from 'three';

export function createDoorOpening({host,scene,camera,controls,model,journey,status}) {
  // Pure white portal: there is no room attached behind the exterior scene.
  const portal=new THREE.Mesh(new THREE.PlaneGeometry(1.08,1.97),new THREE.MeshBasicMaterial({color:'#ffffff',toneMapped:false,side:THREE.DoubleSide}));
  portal.position.set(0,1.315,-.925);portal.visible=false;scene.add(portal);
  const veil=document.createElement('div');veil.className='scene-transition-glow';veil.setAttribute('aria-hidden','true');document.body.appendChild(veil);
  const button=document.createElement('button');button.type='button';button.className='door-hit-target';button.setAttribute('aria-label','打开正面的双扇木门');button.title='打开家门';host.appendChild(button);
  let acquired=false,opened=false,motion=null;
  const target=new THREE.Vector3(0,1.25,-.70),screen=new THREE.Vector3();
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const onKey=()=>{acquired=true;button.title='用钥匙打开家门';};host.addEventListener('birthday:key-acquired',onKey);
  function open(){
    if(motion||opened||journey.focused)return;
    if(!acquired){status.textContent='先去老地方找找钥匙。';return;}
    motion={start:performance.now(),from:camera.position.clone(),targetFrom:controls.target.clone()};
    controls.enabled=false;controls.minDistance=.1;controls.maxDistance=30;controls.minAzimuthAngle=-Infinity;controls.maxAzimuthAngle=Infinity;controls.minPolarAngle=0;controls.maxPolarAngle=Math.PI;
    button.hidden=true;portal.visible=true;host.parentElement.classList.add('is-door-opening');status.textContent='';
  }
  button.addEventListener('click',open);
  function update(now,width,height){
    if(!motion){button.hidden=opened||journey.focused;screen.copy(target).project(camera);button.style.left=`${(screen.x+1)*width/2}px`;button.style.top=`${(1-screen.y)*height/2}px`;return false;}
    const elapsed=reduced.matches?2400:now-motion.start;
    const move=THREE.MathUtils.clamp(elapsed/1000,0,1),ease=move*move*(3-2*move);
    camera.position.lerpVectors(motion.from,new THREE.Vector3(0,1.65,2.60),ease);
    controls.target.lerpVectors(motion.targetFrom,new THREE.Vector3(0,1.35,-1.90),ease);camera.lookAt(controls.target);
    const progress=THREE.MathUtils.clamp((elapsed-450)/1300,0,1),s=progress*progress*(3-2*progress);
    model.leaves[0].rotation.y=s*1.48;model.leaves[1].rotation.y=-s*1.48;
    veil.style.opacity=String(THREE.MathUtils.clamp((elapsed-1150)/1000,0,1));
    if(elapsed>=2400){opened=true;motion=null;veil.style.opacity='1';host.dispatchEvent(new CustomEvent('birthday:door-opened',{bubbles:true}));}
    return true;
  }
  return {update,get locked(){return !!motion||opened;},dispose(){button.remove();host.removeEventListener('birthday:key-acquired',onKey);if(!opened)veil.remove();}};
}
