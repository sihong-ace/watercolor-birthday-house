import * as THREE from 'three';
import {createSilverKey} from './silver-key.js';

export function createWindowJourney({host, camera, controls, model, status}) {
  const cornerPosition = new THREE.Vector3(-.995, 1.19, -.64);
  const key = createSilverKey(); key.name = '窗缝里的银色钥匙'; key.position.set(-1.01, 1.26, -.69); key.rotation.z = -.15;
  key.visible=false; model.group.add(key);
  const cornerButton = document.createElement('button'); cornerButton.className='window-hit-target'; cornerButton.type='button'; cornerButton.setAttribute('aria-label','查看左窗右下角'); cornerButton.title='看看窗缝'; host.appendChild(cornerButton);
  const keyButton = document.createElement('button'); keyButton.className='key-hit-target'; keyButton.type='button'; keyButton.setAttribute('aria-label','拾取窗缝中的钥匙'); keyButton.title='拿起钥匙'; keyButton.hidden=true; host.appendChild(keyButton);
  const back = document.createElement('button'); back.className='window-back'; back.type='button'; back.textContent='返回全景'; back.hidden=true; host.parentElement.appendChild(back);
  const inventory=document.createElement('div'); inventory.className='key-inventory'; inventory.setAttribute('role','status'); inventory.hidden=true; inventory.textContent='钥匙已拿到'; host.parentElement.appendChild(inventory);
  const sash=model.windows[0].children.find(object=>object.name==='窗扇1');
  const originalSashX=sash.position.x;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let phase='overview', acquired=false, motion=null, saved=null, disposed=false;
  const initialLimits={minDistance:controls.minDistance,maxDistance:controls.maxDistance,minAzimuthAngle:controls.minAzimuthAngle,maxAzimuthAngle:controls.maxAzimuthAngle,minPolarAngle:controls.minPolarAngle,maxPolarAngle:controls.maxPolarAngle};
  const screen=new THREE.Vector3();
  function startMotion(toPosition,toTarget,direction) {
    motion={start:performance.now(),from:camera.position.clone(),targetFrom:controls.target.clone(),to:toPosition,targetTo:toTarget,direction,fromSash:sash.position.x};
    controls.enabled=false; controls.minDistance=.1; controls.maxDistance=30;
    controls.minAzimuthAngle=-Infinity;controls.maxAzimuthAngle=Infinity; controls.minPolarAngle=0;controls.maxPolarAngle=Math.PI;
    cornerButton.hidden=true;keyButton.hidden=true;back.disabled=true;
  }
  function focus() {
    if(phase!=='overview'||motion)return;
    saved={position:camera.position.clone(),target:controls.target.clone()};
    phase='focusing'; status.textContent='';back.hidden=false;
    host.parentElement.classList.add('is-window-focus');
    startMotion(new THREE.Vector3(-.98,1.46,.60),new THREE.Vector3(-1.04,1.24,-.70),'in');
  }
  function returnToRoom() {
    if(motion||phase==='overview')return;
    phase='returning'; status.textContent='';
    startMotion(saved.position,saved.target,'out');
  }
  function pickup() {
    if(phase!=='focused'||acquired||motion)return;
    acquired=true;key.visible=false;keyButton.hidden=true;inventory.hidden=false;
    status.textContent='钥匙已拿到：返回全景，再点击大门。';
    host.dispatchEvent(new CustomEvent('birthday:key-acquired',{bubbles:true}));
  }
  const escape=event=>{if(event.key==='Escape')returnToRoom();};
  cornerButton.addEventListener('click',focus);keyButton.addEventListener('click',pickup);back.addEventListener('click',returnToRoom);addEventListener('keydown',escape);
  function place(button,point,width,height){screen.copy(point).project(camera);button.style.left=`${(screen.x+1)*width/2}px`;button.style.top=`${(1-screen.y)*height/2}px`;}
  function update(now,width,height) {
    if(disposed)return false;
    const wasAnimating=!!motion;
    if(motion){
      const elapsed=reduced.matches?1400:now-motion.start;
      const cameraProgress=THREE.MathUtils.clamp(elapsed/900,0,1);
      const ease=cameraProgress*cameraProgress*(3-2*cameraProgress);
      camera.position.lerpVectors(motion.from,motion.to,ease);controls.target.lerpVectors(motion.targetFrom,motion.targetTo,ease);camera.lookAt(controls.target);
      const slide=THREE.MathUtils.clamp((elapsed-600)/600,0,1);const slideEase=slide*slide*(3-2*slide);
      const destination=motion.direction==='in'||acquired?originalSashX-.18:originalSashX;
      sash.position.x=THREE.MathUtils.lerp(motion.fromSash,destination,slideEase);
      key.visible=!acquired&&motion.direction==='in'&&slide>.7;
      if(elapsed>=1400){
        const inward=motion.direction==='in';motion=null;
        controls.enabled=true;controls.enableRotate=!inward;
        if(inward){
          phase='focused';controls.minDistance=.9;controls.maxDistance=2.2;
          key.visible=!acquired;keyButton.hidden=acquired;
          status.textContent=acquired?'钥匙已经拿到了。':'点击左窗缝中的银色钥匙。';
        } else {
          phase='overview';Object.assign(controls,initialLimits);key.visible=false;back.hidden=true;cornerButton.hidden=false;host.parentElement.classList.remove('is-window-focus');
        }
        controls.update();back.disabled=false;
      }
    }
    place(cornerButton,cornerPosition,width,height);place(keyButton,key.position,width,height);
    return wasAnimating;
  }
  return {update,returnToRoom,get focused(){return phase!=='overview';},dispose(){disposed=true;cornerButton.remove();keyButton.remove();back.remove();inventory.remove();removeEventListener('keydown',escape);}};
}
