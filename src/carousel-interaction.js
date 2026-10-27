import * as THREE from 'three';
import {createCarouselPhotos,loadImage,readPhoto,drawCrop} from './carousel-photos.js';

export function createCarouselInteraction({model,host,scene,renderer,camera,controls,canInteract}){
  const stage=host.closest('.door-scene'),canvas=renderer.domElement,status=document.querySelector('#scene-status');
  let phase='overview',motion=null,down=null,store=null,busy=false,disposed=false,selected=-1,spinning=true,editorImage=null,draft=null;
  let saved=null,lampView=null;
  const listeners=new AbortController(),signal=listeners.signal;
  const listen=(target,event,fn)=>target.addEventListener(event,fn,{signal});
  let messageUntil=0,hintUntil=0;
  const say=text=>{status.textContent=text;messageUntil=text?performance.now()+5000:0;};
  const make=(tag,text,className)=>{const el=document.createElement(tag);if(text)el.textContent=text;if(className)el.className=className;return el;};
  const button=(text,fn)=>{const el=make('button',text);el.type='button';listen(el,'click',fn);return el;};
  const hit=button('',()=>focus());hit.className='carousel-hit-target';hit.setAttribute('aria-label','靠近白桌上的相片灯');hit.title='看看相片灯';host.append(hit);
  const panel=make('section',null,'carousel-panel');panel.hidden=true;panel.setAttribute('aria-label','相片灯操作');
  const heading=make('h3','桌上的回忆'),hint=make('p','拖动木马可以旋转，点击照片可以拉近查看。');
  const tools=make('div',null,'carousel-tools');
  const batchInput=make('input');batchInput.type='file';batchInput.accept='image/jpeg,image/png,image/webp,image/avif';batchInput.multiple=true;batchInput.hidden=true;
  const batch=button('批量挂照片',()=>batchInput.click());
  const rotate=button('暂停旋转',()=>{if(phase==='photo')returnToLamp();spinning=!spinning;model.rotate(spinning);rotate.textContent=spinning?'暂停旋转':'继续旋转';rotate.setAttribute('aria-pressed',String(spinning));});rotate.setAttribute('aria-pressed','true');
  const wind=button('起风',()=>model.wind(performance.now()));
  const restore=button('恢复预置照片',()=>run(async()=>{await store.restore();say('已恢复随小屋附带的预置照片。');}));
  const back=button('回到房间',()=>returnToRoom());tools.append(batch,rotate,wind,back);
  const grid=make('div',null,'carousel-grid'),slotButtons=[];
  for(let i=0;i<16;i++){const b=button('',()=>viewPhoto(i));b.dataset.slot=String(i);slotButtons.push(b);grid.append(b);}
  const credit=make('small');credit.append(document.createTextNode('相片灯改编自 '));const link=make('a','咕噜蛋Daria · Carousel Lamp');link.href='https://github.com/Daria1216/carousel-lamp';link.target='_blank';link.rel='noopener';credit.append(link,document.createTextNode('（非商业使用）'));
  const editSelected=button('挂入 / 编辑选中照片',()=>openEditor(selected));const deleteSelected=button('删除选中照片',()=>run(async()=>{await store.commit({[selected]:null});say(`相框 ${selected+1} 的照片已删除。`);}));const lampBack=button('返回整个木马',()=>returnToLamp());const photoTools=make('div',null,'carousel-tools');photoTools.append(editSelected,deleteSelected,lampBack);panel.append(heading,hint,tools,photoTools,grid,restore,credit,batchInput);stage.append(panel);
  const dialog=make('dialog',null,'carousel-editor');dialog.setAttribute('aria-labelledby','carousel-editor-title');
  const title=make('h2');title.id='carousel-editor-title';const preview=make('canvas');preview.width=440;preview.height=520;preview.setAttribute('role','img');preview.setAttribute('aria-label','当前照片的裁剪预览');
  const description=make('p'),form=make('div',null,'carousel-crop-controls'),sliders={};
  for(const [key,text,min,max,step,value] of [['zoom','放大',1,3,.01,1],['x','左右位置',-1,1,.01,0],['y','上下位置',-1,1,.01,0]]){const label=make('label',text),input=make('input');input.type='range';Object.assign(input,{min,max,step,value});sliders[key]=input;label.append(input);form.append(label);listen(input,'input',()=>{if(!draft)return;draft.crop=Object.fromEntries(Object.entries(sliders).map(([k,v])=>[k,Number(v.value)]));drawCrop(preview,editorImage,draft.crop);});}
  const single=make('input');single.type='file';single.accept=batchInput.accept;single.hidden=true;
  const replace=button('挂入 / 更换照片',()=>single.click());
  const save=button('保存裁剪',()=>run(async()=>{if(!draft)return;await store.commit({[selected]:draft});dialog.close();say('照片挂好了，重新打开小屋也会保留。');}));
  const remove=button('取下照片',()=>run(async()=>{await store.commit({[selected]:null});dialog.close();say('照片已取下。');}));
  const swapLabel=make('label','交换到 '),swapSelect=make('select');for(let i=0;i<16;i++){const option=make('option',`相框 ${i+1}`);option.value=i;swapSelect.append(option);}swapLabel.append(swapSelect);
  const swap=button('交换位置',()=>run(async()=>{const to=Number(swapSelect.value);if(to===selected)return;await store.commit({[to]:store.slots[selected],[selected]:store.slots[to]});dialog.close();say('两张挂片的位置已交换。');}));
  const close=button('收好照片',()=>dialog.close()),actions=make('div',null,'carousel-tools');actions.append(replace,save,remove,close);
  const editorMessage=make('p',null,'carousel-editor-message');editorMessage.setAttribute('role','status');dialog.append(title,preview,description,form,actions,swapLabel,swap,editorMessage,single);document.body.append(dialog);
  const sync=()=>{if(!store)return;if(selected>=0){hint.hidden=false;hintUntil=performance.now()+5000;}if(selected>=0)hint.textContent=`已选相框 ${selected+1} · ${store.slots[selected]?.title||'空相框'}`;slotButtons.forEach((b,i)=>{b.replaceChildren();const record=store.slots[i];if(record){const img=make('img');img.src=record.src;img.alt=record.alt||record.title||`照片 ${i+1}`;b.append(img);}b.append(make('span',`${String(i+1).padStart(2,'0')} · ${record?record.title:'挂照片'}`));b.setAttribute('aria-label',`相框 ${i+1}：${record?record.title:'空相框，挂照片'}`);});};
  const setBusy=value=>{busy=value;for(const el of [...panel.querySelectorAll('button,input'),...dialog.querySelectorAll('button,input,select')])el.disabled=value;editSelected.disabled=value||selected<0;deleteSelected.disabled=value||selected<0;save.disabled=value||!draft;for(const input of Object.values(sliders))input.disabled=value||!draft;};
  const run=async action=>{if(busy||!store||disposed)return;setBusy(true);editorMessage.textContent='';try{await action();if(!disposed)sync();}catch(error){if(!disposed){say(error.message||'照片未能保存，请重试。');editorMessage.textContent=error.message||'照片未能保存，请重试。';}}finally{if(!disposed)setBusy(false);}};
  async function openEditor(index){if(index<0||index>=16)return;if(busy||!store||!['focused','photo'].includes(phase)||dialog.open||disposed)return;selected=index;model.select(index);title.textContent=`相框 ${index+1}`;draft=store.slots[index]?structuredClone(store.slots[index]):null;editorImage=null;editorMessage.textContent='';description.textContent=draft?draft.title:'这个相框还空着，可以挂入一张照片。';setBusy(true);
    try{if(draft)editorImage=await loadImage(draft.src);if(disposed)return;for(const [key,input] of Object.entries(sliders))input.value=draft?.crop?.[key]??(key==='zoom'?1:0);drawCrop(preview,editorImage,draft?.crop);dialog.showModal();close.focus();}catch(e){say(e.message);}finally{if(!disposed)setBusy(false);}
  }
  listen(dialog,'close',()=>{model.select(-1);draft=null;editorImage=null;single.value='';slotButtons[selected]?.focus();});
  listen(dialog,'cancel',event=>{if(busy)event.preventDefault();});
  listen(single,'change',()=>run(async()=>{const file=single.files[0];if(!file)return;const next=await readPhoto(file),image=await loadImage(next.src);if(disposed)return;draft=next;editorImage=image;description.textContent=next.title;for(const [key,input]of Object.entries(sliders))input.value=key==='zoom'?1:0;drawCrop(preview,image,next.crop);single.value='';}));
  listen(batchInput,'change',()=>run(async()=>{try{const files=Array.from(batchInput.files),empty=store.slots.flatMap((p,i)=>p?[]:[i]);if(!files.length)return;if(files.length>empty.length)throw Error(`还剩 ${empty.length} 个空相框，请减少选择的照片数量。`);const records=await Promise.all(files.map(readPhoto));await store.commit(Object.fromEntries(records.map((record,i)=>[empty[i],record])));say(`已挂好 ${records.length} 张照片。`);}finally{batchInput.value='';}}));
  setBusy(true);createCarouselPhotos(model,say).then(value=>{if(disposed){value.dispose();return;}store=value;sync();setBusy(false);}).catch(()=>{if(!disposed)say('照片暂时无法准备，请刷新后重试。');});
  const limitKeys=['minDistance','maxDistance','minPolarAngle','maxPolarAngle','minAzimuthAngle','maxAzimuthAngle','enableRotate','enableZoom'];
  const tween=(position,target,next)=>{motion={start:performance.now(),from:camera.position.clone(),targetFrom:controls.target.clone(),position,target,next};controls.enabled=false;};
  function focus(){if(phase!=='overview'||!canInteract()||disposed)return;saved={position:camera.position.clone(),target:controls.target.clone(),limits:Object.fromEntries(limitKeys.map(k=>[k,controls[k]]))};controls.minDistance=.1;controls.maxDistance=30;controls.minPolarAngle=0;controls.maxPolarAngle=Math.PI;controls.minAzimuthAngle=-Infinity;controls.maxAzimuthAngle=Infinity;phase='focusing';spinning=false;model.rotate(false);rotate.textContent='继续旋转';rotate.setAttribute('aria-pressed','false');stage.classList.add('is-carousel-focus');say('走近桌上的相片灯。');const narrow=host.clientWidth<800;tween(narrow?new THREE.Vector3(-1.00,1.84,3.55):new THREE.Vector3(-1.26,1.58,3.05),new THREE.Vector3(-2.13,narrow?.99:1.12,1.76),'focused');}
  function returnToRoom(){if(!['focused','photo'].includes(phase)||busy||dialog.open)return;panel.hidden=true;phase='returning';tween(saved.position,saved.target,'overview');}
  function viewPhoto(index){
    if(busy||!store||!['focused','photo'].includes(phase)||dialog.open||motion)return;
    selected=index;setBusy(false);spinning=false;model.rotate(false);rotate.textContent='继续旋转';rotate.setAttribute('aria-pressed','false');model.select(index);
    const face=model.faces[index];face.updateWorldMatrix(true,false);const target=new THREE.Vector3();face.getWorldPosition(target);
    const normal=new THREE.Vector3(0,0,1).transformDirection(face.matrixWorld);
    const position=target.clone().addScaledVector(normal,.34);position.y+=.015;if(host.clientWidth<800)target.y-=.04;
    hint.hidden=false;hintUntil=performance.now()+5000;hint.textContent=`已选相框 ${index+1} · ${store.slots[index]?.title||'空相框'}`;
    phase='photo-focusing';tween(position,target,'photo');
  }
  function returnToLamp(){if(phase!=='photo'||busy||dialog.open||motion)return;phase='focusing';model.select(-1);tween(lampView.position.clone(),lampView.target.clone(),'focused');}
  const ray=new THREE.Raycaster(),pointer=new THREE.Vector2(),point=new THREE.Vector3();
  const nearest=e=>{const rect=canvas.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);ray.setFromCamera(pointer,camera);return ray.intersectObjects(scene.children,true).find(hit=>{if(hit.object.userData.ignoreInteraction)return false;for(let object=hit.object;object;object=object.parent)if(!object.visible)return false;return true;})?.object;};
  const belongs=object=>{while(object){if(object===model.root)return true;object=object.parent;}return false;};
  listen(canvas,'pointerdown',e=>{if(e.button===0)down={id:e.pointerId,x:e.clientX,y:e.clientY,object:nearest(e),lastX:e.clientX,dragged:false};});
  listen(canvas,'pointermove',e=>{if(!down||down.id!==e.pointerId||phase!=='focused'||motion||busy||dialog.open)return;if(Math.hypot(e.clientX-down.x,e.clientY-down.y)>5)down.dragged=true;if(down.dragged){spinning=false;model.rotate(false);rotate.textContent='继续旋转';rotate.setAttribute('aria-pressed','false');model.turn((e.clientX-down.lastX)*.009);e.preventDefault();}down.lastX=e.clientX;});
  listen(canvas,'pointerup',e=>{if(down&&!down.dragged&&down.id===e.pointerId&&Math.hypot(e.clientX-down.x,e.clientY-down.y)<5){const object=nearest(e);if(belongs(down.object)&&belongs(object)){if(phase==='overview')focus();else if(['focused','photo'].includes(phase)&&Number.isInteger(object.userData.photo))viewPhoto(object.userData.photo);}}down=null;});
  listen(canvas,'pointercancel',()=>{down=null;});
  listen(document,'keydown',e=>{if(e.key==='Escape'&&!dialog.open&&!e.defaultPrevented){if(phase==='photo')returnToLamp();else returnToRoom();}});
  return {get active(){return phase!=='overview';},get locked(){return !!motion;},returnToRoom,
    update(now,w,h,reduced,nightAmount){
      if(motion){const t=reduced?1:Math.min(1,(now-motion.start)/950),ease=t*t*(3-2*t);camera.position.lerpVectors(motion.from,motion.position,ease);controls.target.lerpVectors(motion.targetFrom,motion.target,ease);camera.lookAt(controls.target);if(t===1){phase=motion.next;motion=null;controls.enabled=true;if(phase==='photo'){controls.minDistance=.18;controls.maxDistance=.55;controls.enableRotate=false;say('照片仍挂在木马上，可以直接近看。');}else if(phase==='focused'){lampView={position:camera.position.clone(),target:controls.target.clone()};controls.minDistance=.85;controls.maxDistance=2.2;controls.enableRotate=false;panel.hidden=false;hint.hidden=false;hint.textContent='拖动木马可以旋转，点击照片可以拉近查看。';hintUntil=now+5000;say('拖动木马可以旋转，点击照片拉近查看。');back.focus();}else{Object.assign(controls,saved.limits);stage.classList.remove('is-carousel-focus');say('');hit.focus();}}}
      if(messageUntil&&now>=messageUntil){status.textContent='';messageUntil=0;}if(hintUntil&&now>=hintUntil){hint.hidden=true;hintUntil=0;}
      model.update(now,reduced,nightAmount,dialog.open||busy||!!motion||phase==='photo');model.root.updateWorldMatrix(true,false);point.set(0,3.3,0);model.root.localToWorld(point);point.project(camera);hit.style.left=`${(point.x*.5+.5)*w}px`;hit.style.top=`${(-point.y*.5+.5)*h}px`;hit.hidden=phase!=='overview'||!canInteract()||point.z>1||point.z< -1;
      return !!motion;
    },dispose(){disposed=true;listeners.abort();store?.dispose();dialog.close();dialog.remove();panel.remove();hit.remove();stage.classList.remove('is-carousel-focus');model.dispose();}
  };
}
