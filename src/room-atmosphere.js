import * as THREE from 'three';
import {paintWindowLandscape} from './window-landscape.js';

const PRESETS={
  sunny:{label:'晴天',sky:['#d9e7e1','#eeeade'],hills:['#bdcbb7','#a7bba4','#91a889'],colors:['#edf1ed','#fff8ec','#e9efed','#e9ebec'],intensity:[1.15,1.85,.55,.12],sun:[6,6,1],target:[0,0,0],lamps:0,rain:0},
  blue:{label:'蓝调时刻',sky:['#355b88','#a7baca'],hills:['#647f8b','#526d7d','#425d68'],colors:['#98bce1','#bfd1eb','#89b5d2','#c8d9e8'],intensity:[.55,.12,.32,.12],sun:[6,4,-1],target:[0,0,0],lamps:.62,rain:0},
  sunset:{label:'夕阳时刻',sky:['#dd986d','#f3d8a2'],hills:['#b5a780','#9a9b74','#828963'],colors:['#ead0b4','#ffba70','#e9c9ae','#efdac0'],intensity:[.82,1.6,.38,.15],sun:[6,2.7,-.72],target:[0,.8,0],lamps:.12,rain:0},
  overcast:{label:'阴天',sky:['#9eabb1','#d4d8d1'],hills:['#a5b3a7','#8d9f94','#798d80'],colors:['#c7d2d7','#d7dce0','#cbd8da','#e1e5df'],intensity:[.90,.30,.48,.20],sun:[6,6,1],target:[0,0,0],lamps:.08,rain:0},
  night:{label:'夜晚',sky:['#182f49','#738893'],hills:['#536f79','#46646b','#35554f'],colors:['#edf1ed','#fff8ec','#e9efed','#e9ebec'],intensity:[1.15,1.85,.55,.12],sun:[6,6,1],target:[0,0,0],lamps:1,rain:0},
  rain:{label:'雨天',sky:['#758a97','#adb9bb'],hills:['#8eaaa0','#768f86','#5e7c72'],colors:['#a3bac8','#bdcbd1','#b2cbd2','#d1dcdb'],intensity:[.65,.12,.38,.18],sun:[6,6,1],target:[0,0,0],lamps:.35,rain:1}
};

export function createRoomAtmosphere({room,stage,dayLights,night}){
  const window=room.getObjectByName('长椅上方的窗景'),material=window.material;
  const originalMap=material.map,originalColor=material.color.clone();
  const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=512;const ctx=canvas.getContext('2d');
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;material.map=texture;material.color.set('#ffffff');material.needsUpdate=true;
  const weatherRoot=new THREE.Group();weatherRoot.name='窗外天气效果';room.add(weatherRoot);
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(new Float32Array(96*6),3));
  const rainMaterial=new THREE.LineBasicMaterial({color:'#e4eef0',transparent:true,opacity:0,depthWrite:false});
  const rain=new THREE.LineSegments(geometry,rainMaterial);rain.name='仅在窗外下落的雨丝';rain.userData.ignoreInteraction=true;rain.frustumCulled=false;weatherRoot.add(rain);
  const label=document.createElement('div');label.className='atmosphere-control';
  const toggle=document.querySelector('#night-toggle');toggle.hidden=true;
  const paths={sunny:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5',blue:'M19 15a7 7 0 0 1-10-10 7 7 0 1 0 10 10M17 3v4m-2-2h4',sunset:'M3 16h18M5 20h14M7 13a5 5 0 0 1 10 0M12 2v3M4 6l2 2m12 0 2-2',overcast:'M7 18h11a4 4 0 0 0 0-8h-1a6 6 0 0 0-11-2 5 5 0 0 0 1 10',rain:'M6 14h12a4 4 0 0 0 0-8h-1a6 6 0 0 0-11-1 5 5 0 0 0 0 9M8 17l-1 3m6-3-1 3m6-3-1 3',night:'M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10M18 3v4m-2-2h4'};
  const notes={sunny:'晴空 · 田野微光',blue:'暮色 · 灯火初上',sunset:'晚霞 · 金色山野',overcast:'薄云 · 柔和天光',rain:'细雨 · 山间雾气',night:'月色 · 万家灯火'};
  const icon=value=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[value]}"/></svg>`;
  const trigger=document.createElement('button');trigger.type='button';trigger.className='atmosphere-trigger';trigger.setAttribute('aria-haspopup','listbox');trigger.setAttribute('aria-expanded','false');trigger.setAttribute('aria-controls','room-atmosphere-options');
  const panel=document.createElement('div');panel.className='atmosphere-panel';panel.hidden=true;
  const heading=document.createElement('p');heading.className='atmosphere-panel-title';heading.textContent='换一段窗外时光';
  const list=document.createElement('div');list.className='atmosphere-options';list.id='room-atmosphere-options';list.setAttribute('role','listbox');list.setAttribute('aria-label','窗外时光与天气');
  const optionButtons=new Map();for(const value of ['sunny','blue','sunset','overcast','rain','night']){const button=document.createElement('button');button.type='button';button.className='atmosphere-option';button.dataset.mode=value;button.setAttribute('role','option');button.setAttribute('aria-label',PRESETS[value].label);button.innerHTML=icon(value)+`<span><strong>${PRESETS[value].label}</strong><small>${notes[value]}</small></span><span class="atmosphere-check" aria-hidden="true">✓</span>`;button.addEventListener('click',()=>choose(value));optionButtons.set(value,button);list.append(button);}
  panel.append(heading,list);label.append(trigger,panel);stage.append(label);
  const events=new AbortController(),listen=(el,type,fn)=>el.addEventListener(type,fn,{signal:events.signal});
  let selected='sunny';
  const setOpen=(open,focus=false)=>{panel.hidden=!open;trigger.setAttribute('aria-expanded',String(open));if(open&&focus)optionButtons.get(selected).focus();};
  const syncUI=value=>{selected=value;trigger.innerHTML=icon(value)+`<span><small>窗外时光</small><strong>${PRESETS[value].label}</strong></span><svg class="atmosphere-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 10 4 4 4-4"/></svg>`;trigger.setAttribute('aria-label',`窗外时光：${PRESETS[value].label}`);for(const [key,button]of optionButtons){button.setAttribute('aria-selected',String(key===value));button.tabIndex=key===value?0:-1;}};syncUI('sunny');
  listen(trigger,'click',()=>setOpen(panel.hidden));listen(document,'pointerdown',event=>{if(!label.contains(event.target))setOpen(false);});
  listen(label,'focusout',event=>{if(!label.contains(event.relatedTarget))setOpen(false);});
  listen(label,'keydown',event=>{if(event.key==='Escape'){event.preventDefault();event.stopPropagation();setOpen(false);trigger.focus();}else if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();const buttons=[...optionButtons.values()];if(panel.hidden){setOpen(true,true);return;}let index=buttons.indexOf(document.activeElement);index=event.key==='Home'?0:event.key==='End'?buttons.length-1:(index+(event.key==='ArrowUp'?-1:1)+buttons.length)%buttons.length;buttons[index].focus();}});
  const keys=['hemi','sun','fill','ambient'],lights=keys.map(key=>dayLights[key]);
  const base=PRESETS.sunny,baseColors=base.colors.map(c=>new THREE.Color(c));
  const asState=preset=>({sky:preset.sky.map(c=>new THREE.Color(c)),hills:preset.hills.map(c=>new THREE.Color(c)),colors:preset.colors.map(c=>new THREE.Color(c)),intensity:preset.intensity.slice(),sun:new THREE.Vector3(...preset.sun),target:new THREE.Vector3(...preset.target),lamps:preset.lamps,rain:preset.rain});
  const cloneState=p=>({sky:p.sky.map(c=>c.clone()),hills:p.hills.map(c=>c.clone()),colors:p.colors.map(c=>c.clone()),intensity:p.intensity.slice(),sun:p.sun.clone(),target:p.target.clone(),lamps:p.lamps,rain:p.rain});
  let current=asState(base),mode='sunny',transition=null,lastDraw=-Infinity,disposed=false;
  const draw=state=>{paintWindowLandscape(ctx,state,mode);texture.needsUpdate=true;};
  const nightMaterial=room.getObjectByName('窗外夜景').material,originalNightMap=nightMaterial.map;
  const nightCanvas=document.createElement('canvas');nightCanvas.width=1024;nightCanvas.height=512;paintWindowLandscape(nightCanvas.getContext('2d'),asState(PRESETS.night),'night');
  const nightTexture=new THREE.CanvasTexture(nightCanvas);nightTexture.colorSpace=THREE.SRGBColorSpace;nightTexture.anisotropy=4;nightMaterial.map=nightTexture;nightMaterial.needsUpdate=true;
  function choose(value){if(night.busy)return;mode=value;transition={start:performance.now(),from:cloneState(current),to:asState(PRESETS[value])};night.setNight(value==='night');stage.dataset.atmosphere=value;lastDraw=-Infinity;syncUI(value);setOpen(false);trigger.focus();}
  stage.dataset.atmosphere=mode;draw(current);
  return {get mode(){return night.night?'night':mode;},update(now,reduced){
    if(disposed)return;trigger.disabled=night.busy;if(night.busy)setOpen(false);const shown=night.night?'night':mode;if(selected!==shown)syncUI(shown);
    if(transition){const t=reduced?1:Math.min(1,(now-transition.start)/1300),ease=t*t*(3-2*t),from=transition.from,to=transition.to;
      for(const group of ['sky','hills','colors'])for(let i=0;i<current[group].length;i++)current[group][i].copy(from[group][i]).lerp(to[group][i],ease);
      current.intensity=current.intensity.map((_,i)=>THREE.MathUtils.lerp(from.intensity[i],to.intensity[i],ease));current.sun.lerpVectors(from.sun,to.sun,ease);current.target.lerpVectors(from.target,to.target,ease);current.lamps=THREE.MathUtils.lerp(from.lamps,to.lamps,ease);current.rain=THREE.MathUtils.lerp(from.rain,to.rain,ease);
      if(now-lastDraw>80||t===1){draw(current);lastDraw=now;}if(t===1)transition=null;
    }
    const nightAmount=night.amount,dayAmount=1-nightAmount;night.setAtmosphereLighting(current.lamps);
    lights.forEach((light,i)=>{light.intensity+=(current.intensity[i]-base.intensity[i])*dayAmount;light.color.copy(current.colors[i]).lerp(baseColors[i],nightAmount);});
    dayLights.sun.position.copy(current.sun).lerp(new THREE.Vector3(...base.sun),nightAmount);dayLights.sun.target.position.copy(current.target).multiplyScalar(dayAmount);dayLights.sun.target.updateMatrixWorld();
    rain.visible=current.rain>.005;rainMaterial.opacity=current.rain*(.68-nightAmount*.20);const positions=geometry.attributes.position;
    for(let i=0;i<96;i++){const t=reduced?(i%17)/17:((now*.00055+i*.173)%1),y=2.10-t*.94,z=-1.21+((i*37)%96)/96*1.80;positions.setXYZ(i*2,2.450,y,z);positions.setXYZ(i*2+1,2.450,Math.min(2.11,y+.070),z+.009);}positions.needsUpdate=true;
  },dispose(){disposed=true;events.abort();label.remove();nightMaterial.map=originalNightMap;nightMaterial.needsUpdate=true;nightTexture.dispose();delete stage.dataset.atmosphere;material.map=originalMap;material.color.copy(originalColor);material.needsUpdate=true;texture.dispose();night.setAtmosphereLighting(0);}};
}
