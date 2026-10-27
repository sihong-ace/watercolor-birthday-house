import * as THREE from 'three';

export function createSofaInteraction({sofa,scene,camera,renderer,host,canInteract=()=>true}){
  const canvas=renderer.domElement,raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
  const homeX=sofa.position.x,travel=.26;let pulled=false,motion=null,down=null;
  const status=document.querySelector('#scene-status');
  const button=document.createElement('button');button.className='sofa-hit-target';button.type='button';
  const label=()=>{const text=pulled?'推回沙发':'拉出沙发';button.setAttribute('aria-label',text);button.setAttribute('aria-pressed',String(pulled));button.title=text;};label();host.appendChild(button);
  const toggle=()=>{if(motion||!canInteract())return;pulled=!pulled;motion={start:performance.now(),from:sofa.position.x,to:homeX+(pulled?travel:0)};button.disabled=true;};
  const hit=(event)=>{const rect=canvas.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);const nearest=raycaster.intersectObjects(scene.children,true)[0];let object=nearest?.object;while(object){if(object===sofa)return true;object=object.parent;}return false;};
  const onDown=event=>{if(event.button!==0)return;down={x:event.clientX,y:event.clientY,id:event.pointerId,onSofa:hit(event)};};
  const onUp=event=>{if(down&&down.id===event.pointerId&&down.onSofa&&Math.hypot(event.clientX-down.x,event.clientY-down.y)<5&&hit(event))toggle();down=null;};
  const cancel=()=>{down=null;};
  button.addEventListener('click',toggle);canvas.addEventListener('pointerdown',onDown);canvas.addEventListener('pointerup',onUp);canvas.addEventListener('pointercancel',cancel);
  const point=new THREE.Vector3();
  return {update(now,width,height){
    if(motion){const t=matchMedia('(prefers-reduced-motion: reduce)').matches?1:Math.min(1,(now-motion.start)/750),ease=t*t*(3-2*t);sofa.position.x=motion.from+(motion.to-motion.from)*ease;
      if(t===1){motion=null;button.disabled=false;label();if(status)status.textContent=pulled?'又要开始学习了吗':'沙发推回桌下了。';}}
    sofa.updateWorldMatrix(true,false);point.set(0,.84,.24);sofa.localToWorld(point);point.project(camera);button.style.left=`${(point.x*.5+.5)*width}px`;button.style.top=`${(-point.y*.5+.5)*height}px`;button.hidden=!canInteract()||point.z>1||point.z< -1;
  },dispose(){button.removeEventListener('click',toggle);button.remove();canvas.removeEventListener('pointerdown',onDown);canvas.removeEventListener('pointerup',onUp);canvas.removeEventListener('pointercancel',cancel);}};
}
