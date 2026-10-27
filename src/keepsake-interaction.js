import * as THREE from 'three';

const PHONE_LINES=["嘟...嘟...嘟...", "喂，欢迎拨通小屋的演示电话！", "今天也要记得休息哦。", "愿每一次相聚，都有新的故事。", "祝你平安喜乐！"];
const CLOCK_LINES=["滴答滴答....", "时间慢一点吧。", "把今天的美好，留在这一刻。"];
const WHITE_CAT_LINES=["这是我最喜欢的午睡位置。", "边看电视边打瞌睡~", "睡得可香了~"];
const CAT_LINES=['呼噜...呼噜...这里好暖啊','人怎么还没有上楼来看电视？...'];

export function createKeepsakeInteraction({room,scene,host,renderer,camera,controls,night,canInteract}){
  const canvas=renderer.domElement,stage=host.closest('.door-scene'),events=new AbortController();
  const listen=(el,event,fn)=>el.addEventListener(event,fn,{signal:events.signal});
  const whiteCat=room.getObjectByName('木长椅上的白猫');
  const cat=room.getObjectByName('火盆前趴卧的狸花猫'),phone=room.getObjectByName('电视柜转角的老式座机'),clock=room.getObjectByName('摇摆挂钟'),painting=room.getObjectByName('墙上的回忆挂画'),fire=room.getObjectByName('长椅前的火盆');
  let mode=null,motion=null,saved=null,down=null,disposed=false,digits='',script=null,lastLine=-1;
  const makeButton=(text,fn,className)=>{const b=document.createElement('button');b.type='button';b.textContent=text;if(className)b.className=className;listen(b,'click',fn);return b;};
  const targets=[['cat',cat,'靠近烤火的小狸花猫'],['white-cat',whiteCat,'靠近木长椅上的白猫'],['phone',phone,'靠近复古座机'],['clock',clock,'看看墙上的挂钟'],['painting',painting,'查看挂画里的涂鸦照片'],['fire',fire,'让火盆烧得更旺']].map(([id,root,label])=>{const b=makeButton('',()=>activate(id),'keepsake-hit-target');b.setAttribute('aria-label',label);host.append(b);return {id,root,b};});
  const subtitle=document.createElement('section');subtitle.className='keepsake-subtitles';subtitle.hidden=true;subtitle.setAttribute('aria-label','回忆字幕');
  const log=document.createElement('div');log.className='keepsake-caption-log';log.setAttribute('role','log');log.setAttribute('aria-live','polite');
  const back=makeButton('回到房间',()=>returnToRoom());subtitle.append(log,back);stage.append(subtitle);
  const dial=document.createElement('section');dial.className='phone-dial';dial.hidden=true;dial.setAttribute('aria-label','演示电话数字按键');
  const hint=document.createElement('p');hint.textContent='依次按下演示号码：1234567';const display=document.createElement('output');display.setAttribute('aria-label','已经按下的号码');display.textContent='演示号码：1234567';
  const keys=document.createElement('div');keys.className='phone-number-grid';for(const digit of ['1','2','3','4','5','6','7','8','9','0']){const b=makeButton(digit,()=>dialDigit(digit));b.setAttribute('aria-label',`电话数字 ${digit}`);keys.append(b);}
  const clear=makeButton('重新按',()=>{digits='';display.textContent='演示号码：1234567';hint.textContent='依次按下演示号码：1234567';});const phoneBack=makeButton('回到房间',()=>returnToRoom());dial.append(hint,display,keys,clear,phoneBack);stage.append(dial);
  const gallery=document.createElement('section');gallery.className='painting-controls';gallery.hidden=true;gallery.setAttribute('aria-label','挂画照片切换');
  const galleryTitle=document.createElement('p'),galleryCount=document.createElement('span');
  const family=[{"src": "assets/doodles/countryside.png", "title": "田野来信"}, {"src": "assets/doodles/picnic.png", "title": "动物野餐"}, {"src": "assets/doodles/memories.png", "title": "午后小猫"}, {"src": "assets/doodles/birthday.png", "title": "生日派对"}];let photoIndex=0,photoRevision=0;
  const picture=painting.getObjectByName('淡彩画面');const originalPictureMaterial=picture.material;
  const photoCanvas=document.createElement('canvas');photoCanvas.width=1280;photoCanvas.height=730;
  const photoMap=new THREE.CanvasTexture(photoCanvas);photoMap.colorSpace=THREE.SRGBColorSpace;photoMap.anisotropy=4;
  const photoMaterial=new THREE.MeshBasicMaterial({map:photoMap,toneMapped:false});
  const showPhoto=async()=>{const revision=++photoRevision,photo=family[photoIndex];galleryTitle.textContent=photo.title;galleryCount.textContent=`${photoIndex+1} / ${family.length}`;const ctx=photoCanvas.getContext('2d');ctx.fillStyle='#e9dfca';ctx.fillRect(0,0,1280,730);photoMap.needsUpdate=true;picture.material=photoMaterial;
    const image=new Image();image.src=new URL(photo.src,document.baseURI).href;try{await image.decode();if(disposed||revision!==photoRevision)return;const scale=Math.min(1280/image.width,730/image.height);ctx.drawImage(image,(1280-image.width*scale)/2,(730-image.height*scale)/2,image.width*scale,image.height*scale);photoMap.needsUpdate=true;}catch{if(!disposed)galleryTitle.textContent='照片未能加载，请检查本地文件。';}
  };
  const nextPhoto=makeButton('下一张',()=>{if(motion)return;photoIndex=(photoIndex+1)%family.length;showPhoto();});const closePhoto=makeButton('回到房间',()=>returnToRoom());gallery.append(galleryTitle,galleryCount,nextPhoto,closePhoto);stage.append(gallery);
  const limitKeys=['minDistance','maxDistance','minPolarAngle','maxPolarAngle','minAzimuthAngle','maxAzimuthAngle','enableRotate'];
  const tween=(position,target,nextMode)=>{controls.enabled=false;motion={start:performance.now(),from:camera.position.clone(),lookFrom:controls.target.clone(),position,target,nextMode};};
  const startScript=(lines)=>{script={lines,start:performance.now()};lastLine=-1;log.replaceChildren();subtitle.hidden=false;dial.hidden=true;};
  function dialDigit(digit){if(mode!=='phone'||motion||script)return;digits+=digit;display.textContent=digits;if(!'1234567'.startsWith(digits)){hint.textContent='这个号码好像不对，再试一次吧。';digits='';display.textContent='演示号码：1234567';return;}hint.textContent='依次按下演示号码：1234567';if(digits==='1234567')startScript(PHONE_LINES);}
  function activate(id){if(disposed||motion)return;if(id==='fire'){if((!mode&&canInteract())||mode==='cat'){night.stoke(performance.now());}return;}if(mode||!canInteract())return;
    saved={position:camera.position.clone(),target:controls.target.clone(),limits:Object.fromEntries(limitKeys.map(k=>[k,controls[k]]))};mode=id;digits='';script=null;dial.hidden=true;subtitle.hidden=true;gallery.hidden=true;controls.minDistance=.1;controls.maxDistance=30;controls.minPolarAngle=0;controls.maxPolarAngle=Math.PI;controls.minAzimuthAngle=-Infinity;controls.maxAzimuthAngle=Infinity;stage.classList.add('is-keepsake-focus');
    if(id==='cat')tween(new THREE.Vector3(.25,1.08,3.1),new THREE.Vector3(1.24,.24,1.30),'cat');
    else if(id==='white-cat')tween(new THREE.Vector3(.45,1.25,1.55),new THREE.Vector3(1.91,.77,.12),'white-cat');
    else if(id==='painting'){photoIndex=0;showPhoto();const distance=Math.max(1.75,1.20/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.aspect));tween(new THREE.Vector3(-1.07,2.00,-2.05+distance),new THREE.Vector3(-1.07,1.94,-2.05),'painting');}
    else if(id==='phone')tween(new THREE.Vector3(-2.48,1.45,.04),new THREE.Vector3(-2.175,.765,-.605),'phone');
    else tween(new THREE.Vector3(-1.99,2.03,-.55),new THREE.Vector3(-1.99,1.87,-2.02),'clock');
  }
  function returnToRoom(){if(!mode||motion)return;script=null;photoRevision++;subtitle.hidden=true;dial.hidden=true;gallery.hidden=true;tween(saved.position,saved.target,null);}
  const ray=new THREE.Raycaster(),pointer=new THREE.Vector2(),point=new THREE.Vector3();
  const visible=object=>{for(let o=object;o;o=o.parent)if(!o.visible)return false;return true;};
  const belongs=(object,root)=>{for(let o=object;o;o=o.parent)if(o===root)return true;return false;};
  const nearest=e=>{const rect=canvas.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);ray.setFromCamera(pointer,camera);return ray.intersectObjects(scene.children,true).find(hit=>visible(hit.object)&&!hit.object.userData.ignoreInteraction)?.object;};
  listen(canvas,'pointerdown',e=>{if(e.button===0)down={id:e.pointerId,x:e.clientX,y:e.clientY,object:nearest(e)};});
  listen(canvas,'pointerup',e=>{if(down&&e.pointerId===down.id&&Math.hypot(e.clientX-down.x,e.clientY-down.y)<5){const object=nearest(e);if(mode==='phone'&&object?.userData.digit&&down.object?.userData.digit===object.userData.digit)dialDigit(object.userData.digit);else for(const target of targets){if(belongs(object,target.root)&&belongs(down.object,target.root)){activate(target.id);break;}}}down=null;});
  listen(canvas,'pointercancel',()=>{down=null;});listen(document,'keydown',e=>{if(e.key==='Escape'){returnToRoom();return;}if(mode==='phone'&&!motion&&!script){if(/^\d$/.test(e.key)){e.preventDefault();dialDigit(e.key);}else if(e.key==='Backspace'){e.preventDefault();digits=digits.slice(0,-1);display.textContent=digits||'演示号码：1234567';}}});
  return {get active(){return !!mode;},get locked(){return !!motion;},returnToRoom,update(now,w,h,reduced){
    if(motion){const t=reduced?1:Math.min(1,(now-motion.start)/950),ease=t*t*(3-2*t);camera.position.lerpVectors(motion.from,motion.position,ease);controls.target.lerpVectors(motion.lookFrom,motion.target,ease);camera.lookAt(controls.target);if(t===1){mode=motion.nextMode;motion=null;controls.enabled=true;if(mode){controls.enableRotate=false;controls.minDistance=mode==='phone'?.55:.9;controls.maxDistance=mode==='phone'?1.3:2.6;if(mode==='cat'){cat.userData.twitch(now);startScript(CAT_LINES);back.focus();}else if(mode==='white-cat'){startScript(WHITE_CAT_LINES);back.focus();}else if(mode==='painting'){gallery.hidden=false;nextPhoto.focus();}else if(mode==='clock'){startScript(CLOCK_LINES);back.focus();}else{dial.hidden=false;hint.textContent='依次按下演示号码：1234567';display.textContent='演示号码：1234567';keys.querySelector('button').focus();}}else{picture.material=originalPictureMaterial;Object.assign(controls,saved.limits);stage.classList.remove('is-keepsake-focus');}}}
    for(const target of targets){const allowed=target.id==='fire'?((!mode&&canInteract())||mode==='cat'):!mode&&canInteract();target.root.updateWorldMatrix(true,false);const local=(target.id==='cat'||target.id==='white-cat')?new THREE.Vector3(0,.14,0):target.id==='phone'?new THREE.Vector3(0,.08,0):target.id==='clock'?new THREE.Vector3(0,-.08,0):target.id==='fire'?new THREE.Vector3(0,.2,0):new THREE.Vector3();point.copy(local);target.root.localToWorld(point);point.project(camera);target.b.style.left=`${(point.x*.5+.5)*w}px`;target.b.style.top=`${(-point.y*.5+.5)*h}px`;target.b.hidden=!allowed||!!motion||point.z>1||point.z< -1;}
    if(script){let elapsed=now-script.start,index=0,duration=0;for(;index<script.lines.length;index++){duration=script.lines[index].length*65+2600;if(elapsed<duration)break;elapsed-=duration;}if(index>=script.lines.length){index=script.lines.length-1;elapsed=script.lines[index].length*65;duration=Infinity;}
      if(index!==lastLine){lastLine=index;const previous=mode==='cat'?[]:script.lines.slice(Math.max(0,index-1),index);log.replaceChildren(...previous.map(text=>{const p=document.createElement('p');p.className='past-caption';p.textContent=text;return p;}));const p=document.createElement('p');p.className='current-caption';log.append(p);}
      const current=log.querySelector('.current-caption'),line=script.lines[index],count=reduced?line.length:Math.min(line.length,Math.floor(elapsed/65)+1);const text=line.slice(0,count);if(current.textContent!==text)current.textContent=text;current.style.opacity=duration-elapsed<500?String(Math.max(0,(duration-elapsed)/500)):'1';log.scrollTop=log.scrollHeight;
    }
    return !!motion;
  },dispose(){disposed=true;events.abort();targets.forEach(({b})=>b.remove());subtitle.remove();dial.remove();picture.material=originalPictureMaterial;photoRevision++;photoMap.dispose();photoMaterial.dispose();gallery.remove();stage.classList.remove('is-keepsake-focus');}};
}
