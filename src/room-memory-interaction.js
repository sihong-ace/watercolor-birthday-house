import * as THREE from 'three';

export function createRoomMemoryInteraction({host,scene,renderer,camera,controls,calendar,television,canInteract}){
  const stage=host.closest('.door-scene'),canvas=renderer.domElement,status=document.querySelector('#scene-status'),events=new AbortController();
  const listen=(el,type,fn)=>el.addEventListener(type,fn,{signal:events.signal});
  let mode=null,motion=null,saved=null,down=null,disposed=false,playing=true,index=0,lastSlide=performance.now(),version=0;
  let images=[{src:'assets/doodles/picnic.png',title:'动物野餐'}],interval=4000;
  const textures=new Map(),abort=new AbortController();
  const screen=television.getObjectByName('电视屏幕');screen.material.dispose();screen.material=new THREE.MeshBasicMaterial({color:'#253034',toneMapped:false});
  const makeButton=(text,fn,className)=>{const b=document.createElement('button');b.type='button';b.textContent=text;if(className)b.className=className;listen(b,'click',fn);return b;};
  const tvHit=makeButton('',()=>focus('tv'),'memory-hit-target');tvHit.setAttribute('aria-label','靠近电视看照片');host.append(tvHit);
  const calendarHit=makeButton('',()=>focus('calendar'),'memory-hit-target');calendarHit.setAttribute('aria-label','查看2026年6月生日挂历');host.append(calendarHit);
  const panel=document.createElement('section');panel.className='tv-controls';panel.hidden=true;panel.setAttribute('aria-label','电视照片播放');
  const caption=document.createElement('p');caption.setAttribute('role','status');
  const previous=makeButton('上一张',()=>change(-1));const autoplay=makeButton('自动播放',()=>{playing=!playing;autoplay.textContent=playing?'暂停播放':'自动播放';autoplay.setAttribute('aria-pressed',String(playing));lastSlide=performance.now();});autoplay.setAttribute('aria-pressed','true');autoplay.textContent='暂停播放';
  const next=makeButton('下一张',()=>change(1)),back=makeButton('回到房间',()=>returnToRoom());panel.append(caption,previous,autoplay,next,back);stage.append(panel);
  const calendarBack=makeButton('回到房间',()=>returnToRoom(),'calendar-back');calendarBack.hidden=true;stage.append(calendarBack);
  const wish=document.createElement('dialog');wish.className='calendar-wish';wish.setAttribute('aria-labelledby','calendar-wish-title');
  const fireworks=document.createElement('canvas');fireworks.className='birthday-fireworks';fireworks.setAttribute('aria-hidden','true');
  const card=document.createElement('div');card.className='calendar-wish-card';const wishTitle=document.createElement('h2');wishTitle.id='calendar-wish-title';
  const wishDate=document.createElement('p');const closeWish=makeButton('收好祝福',()=>wish.close());card.append(wishDate,wishTitle,closeWish);wish.append(fireworks,card);document.body.append(wish);
  let particles=[],wishStart=0,burstCount=0;
  const celebrate=day=>{if(mode!=='calendar'||motion||wish.open)return;wishDate.textContent=`2026年6月${day}日`;wishTitle.textContent=day===8?'生日快乐！愿每天都有小惊喜！':'生日快乐！愿一路平安喜乐！';particles=[];burstCount=0;wishStart=performance.now();wish.showModal();closeWish.focus();};
  const dayButtons=[8,18].map(day=>{const b=makeButton('',()=>celebrate(day),'calendar-date-target');b.setAttribute('aria-label',`6月${day}日生日祝福`);b.hidden=true;host.append(b);return {day,b};});
  const ray=new THREE.Raycaster(),pointer=new THREE.Vector2(),point=new THREE.Vector3();
  const visible=object=>{for(let o=object;o;o=o.parent)if(!o.visible)return false;return true;};
  const belongs=(object,root)=>{for(let o=object;o;o=o.parent)if(o===root)return true;return false;};
  const nearest=e=>{const rect=canvas.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);ray.setFromCamera(pointer,camera);return ray.intersectObjects(scene.children,true).find(hit=>visible(hit.object)&&!hit.object.userData.ignoreInteraction);};
  const limitKeys=['minDistance','maxDistance','minPolarAngle','maxPolarAngle','minAzimuthAngle','maxAzimuthAngle','enableRotate'];
  const tween=(position,target,nextMode)=>{controls.enabled=false;motion={start:performance.now(),from:camera.position.clone(),lookFrom:controls.target.clone(),position,target,nextMode};};
  function focus(nextMode){if(mode||!canInteract()||disposed)return;saved={position:camera.position.clone(),target:controls.target.clone(),limits:Object.fromEntries(limitKeys.map(k=>[k,controls[k]]))};mode=nextMode;controls.minDistance=.1;controls.maxDistance=30;controls.minPolarAngle=0;controls.maxPolarAngle=Math.PI;controls.minAzimuthAngle=-Infinity;controls.maxAzimuthAngle=Infinity;
    const root=nextMode==='tv'?television:calendar.root,target=new THREE.Vector3(nextMode==='tv'?0:0,nextMode==='tv'?1.10:0,.05);root.updateWorldMatrix(true,false);root.localToWorld(target);const normal=new THREE.Vector3(0,0,1).transformDirection(root.matrixWorld),position=target.clone().addScaledVector(normal,nextMode==='tv'?2.2:1.48);position.y+=nextMode==='tv'?.15:.06;tween(position,target,nextMode);stage.classList.add('is-memory-focus');status.textContent=nextMode==='tv'?'一起看看电视里的照片。':'6月的两个生日，都记在这里。';
  }
  function returnToRoom(){if(!mode||motion||wish.open)return;panel.hidden=true;calendarBack.hidden=true;playing=true;autoplay.textContent='暂停播放';autoplay.setAttribute('aria-pressed','true');lastSlide=performance.now();tween(saved.position,saved.target,null);}
  async function showSlide(){const revision=++version,item=images[index];caption.textContent=`${index+1} / ${images.length} · ${item.title||'照片'}`;
    try{const url=new URL(item.src,document.baseURI);if(url.origin!==location.origin)throw Error('电视图片需使用随作品附带的本地文件。');let texture=textures.get(url.href);if(!texture){texture=await new THREE.TextureLoader().loadAsync(url.href);texture.colorSpace=THREE.SRGBColorSpace;if(disposed){texture.dispose();return;}textures.set(url.href,texture);}if(disposed||revision!==version)return;
      texture.wrapS=texture.wrapT=THREE.ClampToEdgeWrapping;const image=texture.image,aspect=image.width/image.height,target=1.17/.65;texture.repeat.set(aspect>target?target/aspect:1,aspect<target?aspect/target:1);texture.offset.set((1-texture.repeat.x)/2,(1-texture.repeat.y)/2);screen.material.color.set('#ffffff');screen.material.map=texture;screen.material.needsUpdate=true;
    }catch{if(!disposed&&revision===version)caption.textContent='这张照片未能加载，请检查本地图片配置。';}
  }
  function change(delta){index=(index+delta+images.length)%images.length;lastSlide=performance.now();showSlide();}
  fetch(new URL('assets/tv-slides.json',document.baseURI),{signal:abort.signal}).then(r=>{if(!r.ok)throw Error();return r.json();}).then(data=>{if(disposed)return;const valid=(data.images||[]).filter(p=>typeof p.src==='string');if(valid.length)images=valid;interval=Math.max(1500,Number(data.intervalMs)||4000);index=0;lastSlide=performance.now();showSlide();}).catch(()=>{if(!disposed)showSlide();});
  listen(canvas,'pointerdown',e=>{if(e.button===0)down={id:e.pointerId,x:e.clientX,y:e.clientY,hit:nearest(e)};});
  listen(canvas,'pointerup',e=>{if(down&&e.pointerId===down.id&&Math.hypot(e.clientX-down.x,e.clientY-down.y)<5){const hit=nearest(e);if(hit&&down.hit){if(!mode&&belongs(hit.object,television)&&belongs(down.hit.object,television))focus('tv');else if(!mode&&belongs(hit.object,calendar.root)&&belongs(down.hit.object,calendar.root))focus('calendar');else if(mode==='calendar'&&hit.object===calendar.page){const day=calendar.dayFromUV(hit.uv);if(day)celebrate(day);}}}down=null;});
  listen(canvas,'pointercancel',()=>{down=null;});listen(document,'keydown',e=>{if(e.key==='Escape'&&!wish.open)returnToRoom();});
  const project=(button,root,local,w,h)=>{point.copy(local);root.localToWorld(point);point.project(camera);button.style.left=`${(point.x*.5+.5)*w}px`;button.style.top=`${(-point.y*.5+.5)*h}px`;return Math.abs(point.x)>1||Math.abs(point.y)>1||point.z>1||point.z< -1;};
  const burst=(w,h,reduced)=>{const colors=['#ffd17c','#ed9885','#c7dbc0','#f3d8ae','#c0d9e9'],x=w*(.16+Math.random()*.68),y=h*(.13+Math.random()*.52);for(let i=0;i<65;i++){const angle=i/65*Math.PI*2,speed=45+Math.random()*95;particles.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,color:colors[burstCount%colors.length],start:performance.now(),staticX:Math.cos(angle)*speed*.65,staticY:Math.sin(angle)*speed*.65});}burstCount++;};
  return {get active(){return !!mode;},get locked(){return !!motion;},returnToRoom,update(now,w,h,reduced){
    if(motion){const t=reduced?1:Math.min(1,(now-motion.start)/950),ease=t*t*(3-2*t);camera.position.lerpVectors(motion.from,motion.position,ease);controls.target.lerpVectors(motion.lookFrom,motion.target,ease);camera.lookAt(controls.target);if(t===1){mode=motion.nextMode;motion=null;controls.enabled=true;if(mode){controls.enableRotate=false;controls.minDistance=mode==='tv'?1.4:.85;controls.maxDistance=mode==='tv'?3:1.85;panel.hidden=mode!=='tv';calendarBack.hidden=mode!=='calendar';if(mode==='tv')next.focus();else dayButtons[0].b.focus();}else{Object.assign(controls,saved.limits);stage.classList.remove('is-memory-focus');status.textContent='';}}}
    tvHit.hidden=!!mode||!canInteract()||project(tvHit,television,new THREE.Vector3(0,1.1,.05),w,h);calendarHit.hidden=!!mode||!canInteract()||project(calendarHit,calendar.root,new THREE.Vector3(),w,h);
    for(const {day,b}of dayButtons)b.hidden=mode!=='calendar'||!!motion||project(b,calendar.root,calendar.dayPositions[day],w,h);
    if(playing&&!motion&&(mode==='tv'||(!mode&&canInteract()))&&now-lastSlide>=interval)change(1);
    if(wish.open){const fw=innerWidth,fh=innerHeight;if(fireworks.width!==fw||fireworks.height!==fh){fireworks.width=fw;fireworks.height=fh;}const ctx=fireworks.getContext('2d');ctx.clearRect(0,0,fw,fh);if(now-wishStart<3500&&burstCount<(reduced?2:7)&&now-wishStart>burstCount*480)burst(fw,fh,reduced);
      particles=particles.filter(p=>now-p.start<2200);for(const p of particles){const age=(now-p.start)/1000,x=p.x+(reduced?p.staticX:p.vx*age),y=p.y+(reduced?p.staticY:p.vy*age+30*age*age);ctx.globalAlpha=Math.max(0,1-age/2.2);ctx.fillStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=reduced?0:7;ctx.beginPath();ctx.arc(x,y,reduced?2:1.8,0,Math.PI*2);ctx.fill();if(!reduced){ctx.strokeStyle=p.color;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-p.vx*.06,y-(p.vy+60*age)*.06);ctx.stroke();}}ctx.globalAlpha=1;ctx.shadowBlur=0;
    }
    return !!motion;
  },dispose(){disposed=true;version++;events.abort();abort.abort();textures.forEach(t=>t.dispose());panel.remove();tvHit.remove();calendarHit.remove();calendarBack.remove();dayButtons.forEach(({b})=>b.remove());wish.close();wish.remove();stage.classList.remove('is-memory-focus');}};
}
