import * as THREE from 'three';

export function createCakeJourney({host,scene,renderer,camera,controls,cake,night,onCelebrated,canInteract=()=>true}){
  const canvas=renderer.domElement,stage=host.closest('.door-scene'),status=document.querySelector('#scene-status');
  const overviewPosition=new THREE.Vector3(-3.4,5.35,9.4),overviewTarget=new THREE.Vector3(0,1.1,0);
  const limits={minDistance:controls.minDistance,maxDistance:controls.maxDistance,minPolarAngle:controls.minPolarAngle,maxPolarAngle:controls.maxPolarAngle,minAzimuthAngle:controls.minAzimuthAngle,maxAzimuthAngle:controls.maxAzimuthAngle};
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),point=new THREE.Vector3();let phase='overview',motion=null,down=null,celebrationStart=0;
  const blackout=document.createElement('div');blackout.className='birthday-blackout';blackout.setAttribute('aria-hidden','true');stage.append(blackout);
  const cakeButton=document.createElement('button');cakeButton.type='button';cakeButton.className='cake-hit-target';cakeButton.setAttribute('aria-label','靠近生日蛋糕');cakeButton.title='看看蛋糕';host.appendChild(cakeButton);
  const candleButton=document.createElement('button');candleButton.type='button';candleButton.className='candle-hit-target';candleButton.setAttribute('aria-label','吹熄蜡烛');candleButton.title='吹熄蜡烛';candleButton.hidden=true;host.appendChild(candleButton);
  const prepare=()=>{controls.enabled=false;controls.minDistance=.1;controls.maxDistance=30;controls.minPolarAngle=0;controls.maxPolarAngle=Math.PI;controls.minAzimuthAngle=-Infinity;controls.maxAzimuthAngle=Infinity;};
  const tween=(to,target,next,celebrate=false)=>{prepare();motion={start:performance.now(),from:camera.position.clone(),targetFrom:controls.target.clone(),to,target,next,celebrate};};
  const focus=()=>{if(phase!=='overview'||!canInteract())return;phase='focusing';if(!cake.userData.candleOut)night.prepareBirthday();else night.setNight(true);stage.classList.add('is-cake-focus');status.textContent=cake.userData.candleOut?'再看看生日蛋糕。':'再点一下蜡烛。';tween(new THREE.Vector3(1.49,1.86,.20),new THREE.Vector3(1.49,1.24,-1.35),'focused');};
  const returnToRoom=()=>{if(motion||phase==='overview'||phase==='celebrating'||phase==='lighting')return;if(!cake.userData.candleOut)night.setNight(true);phase='returning';tween(overviewPosition.clone(),overviewTarget.clone(),'overview');};
  const extinguish=()=>{if(phase!=='focused'||cake.userData.candleOut)return;cake.userData.extinguish();celebrationStart=performance.now();night.beginCelebration(celebrationStart);status.textContent='烛火熄灭了，等家里的灯慢慢亮起。';phase='celebrating';tween(new THREE.Vector3(-2.7,4.1,7.6),new THREE.Vector3(0,1.10,0),'lighting',true);};
  const nearest=event=>{const rect=canvas.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);return raycaster.intersectObjects(scene.children,true)[0]?.object;};
  const belongs=object=>{while(object){if(object===cake)return true;object=object.parent;}return false;};
  const onDown=e=>{if(e.button===0)down={id:e.pointerId,x:e.clientX,y:e.clientY,object:nearest(e)};};
  const onUp=e=>{if(down&&down.id===e.pointerId&&Math.hypot(e.clientX-down.x,e.clientY-down.y)<5){const object=nearest(e);if(phase==='overview'&&belongs(down.object)&&belongs(object))focus();else if(phase==='focused'&&belongs(object)&&/蜡烛|烛焰/.test(object.name))extinguish();}down=null;};
  const cancel=()=>{down=null;};const onKey=e=>{if(e.key==='Escape'&&phase==='focused')returnToRoom();};
  cakeButton.addEventListener('click',focus);candleButton.addEventListener('click',extinguish);canvas.addEventListener('pointerdown',onDown);canvas.addEventListener('pointerup',onUp);canvas.addEventListener('pointercancel',cancel);document.addEventListener('keydown',onKey);
  const project=(button,local,w,h)=>{point.copy(local);cake.localToWorld(point);point.project(camera);button.style.left=`${(point.x*.5+.5)*w}px`;button.style.top=`${(-point.y*.5+.5)*h}px`;return point.z>1||point.z< -1;};
  return {get phase(){return phase;},get locked(){return !!motion||phase==='lighting';},returnToRoom,update(now,w,h,reduced){
    if(motion){const duration=motion.celebrate?1600:950,delay=motion.celebrate?150:0,t=reduced?1:THREE.MathUtils.clamp((now-motion.start-delay)/duration,0,1),ease=t*t*(3-2*t);camera.position.lerpVectors(motion.from,motion.to,ease);controls.target.lerpVectors(motion.targetFrom,motion.target,ease);camera.lookAt(controls.target);
      if(t===1){const completed=motion;motion=null;phase=completed.next;controls.enabled=phase!=='lighting';if(phase==='focused'){controls.enableRotate=false;controls.minDistance=1.0;controls.maxDistance=2.5;}else if(phase!=='lighting'){Object.assign(controls,limits);controls.enableRotate=true;stage.classList.remove('is-cake-focus');if(!completed.celebrate)status.textContent='';}}}
    if(phase==='celebrating'||phase==='lighting'){const elapsed=now-celebrationStart;blackout.style.opacity=reduced?'0':String(elapsed<350?elapsed/350:elapsed<850?1:Math.max(0,1-(elapsed-850)/850));if(phase==='lighting'&&!night.celebrating){phase='overview';Object.assign(controls,limits);controls.enableRotate=true;camera.position.copy(overviewPosition);controls.target.copy(overviewTarget);controls.enabled=true;controls.update();stage.classList.remove('is-cake-focus');blackout.style.opacity='0';status.textContent='家里的灯都亮了，看看这张生日照片。';onCelebrated();}}
    cake.updateWorldMatrix(true,false);cakeButton.hidden=phase!=='overview'||!canInteract()||project(cakeButton,new THREE.Vector3(0,.2,0),w,h);
    candleButton.hidden=phase!=='focused'||cake.userData.candleOut||project(candleButton,new THREE.Vector3(0,.50,0),w,h);
    candleButton.disabled=!!motion;return !!motion||phase==='lighting';
  },dispose(){blackout.remove();cakeButton.remove();candleButton.remove();canvas.removeEventListener('pointerdown',onDown);canvas.removeEventListener('pointerup',onUp);canvas.removeEventListener('pointercancel',cancel);document.removeEventListener('keydown',onKey);stage.classList.remove('is-cake-focus');}};
}
