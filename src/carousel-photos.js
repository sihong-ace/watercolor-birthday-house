const COUNT=16, DB='public-doodle-house-photos-v1';
export function loadImage(src){return new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>reject(new Error('这张照片无法读取，请换一张 JPG、PNG 或 WebP。'));image.src=src;});}
export function drawCrop(canvas,image,crop={zoom:1,x:0,y:0}){
  const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
  ctx.clearRect(0,0,w,h);if(!image)return;
  const scale=Math.max(w/image.width,h/image.height)*crop.zoom,iw=image.width*scale,ih=image.height*scale;
  ctx.drawImage(image,(w-iw)/2+crop.x*(iw-w)/2,(h-ih)/2+crop.y*(ih-h)/2,iw,ih);
}
export async function readPhoto(file){
  if(!/^image\/(jpeg|png|webp|avif)$/.test(file.type)||file.size>50*1024*1024)throw new Error('请选择 50 MB 以内的 JPG、PNG、WebP 或 AVIF 照片。');
  const url=URL.createObjectURL(file);
  try{const image=await loadImage(url),canvas=document.createElement('canvas'),scale=Math.min(1,2560/Math.max(image.width,image.height));canvas.width=Math.round(image.width*scale);canvas.height=Math.round(image.height*scale);canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);return {src:canvas.toDataURL('image/jpeg',.9),title:file.name.replace(/\.[^.]+$/,''),alt:file.name,crop:{zoom:1,x:0,y:0}};}finally{URL.revokeObjectURL(url);}
}
export async function createCarouselPhotos(model,onMessage){
  let db=null,disposed=false,overrides={},presets=Array(COUNT).fill(null),slots=Array(COUNT).fill(null);
  try{db=await new Promise((resolve,reject)=>{const request=indexedDB.open(DB,1);request.onupgradeneeded=()=>request.result.createObjectStore('photos');request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);request.onblocked=()=>reject(new Error('storage blocked'));});
    overrides=await new Promise((resolve,reject)=>{const request=db.transaction('photos').objectStore('photos').get('overrides');request.onsuccess=()=>resolve(request.result||{});request.onerror=()=>reject(request.error);});
  }catch{db?.close();db=null;onMessage('浏览器无法保存照片；预置挂片仍可查看。');}
  const abort=new AbortController();
  try{const response=await fetch(new URL('assets/carousel-photos.json',document.baseURI),{signal:abort.signal});if(!response.ok)throw Error();const data=await response.json();
    for(const photo of data.photos||[]){if(Number.isInteger(photo.slot)&&photo.slot>=0&&photo.slot<COUNT&&typeof photo.src==='string'){
      const url=new URL(photo.src,document.baseURI);if(url.origin!==location.origin)continue;
      const bounded=(value,min,max,fallback)=>Number.isFinite(value)?Math.max(min,Math.min(max,value)):fallback;
      presets[photo.slot]={src:url.href,title:photo.title||`照片 ${photo.slot+1}`,alt:photo.alt||photo.title||'预置照片',crop:{zoom:bounded(photo.crop?.zoom,1,3,1),x:bounded(photo.crop?.x,-1,1,0),y:bounded(photo.crop?.y,-1,1,0)}};
    }}
  }catch{onMessage('预置照片配置未能加载，仍可自行挂照片。');}
  const renderRecord=async record=>{if(!record)return null;const image=await loadImage(record.src),canvas=document.createElement('canvas');canvas.width=440;canvas.height=520;drawCrop(canvas,image,record.crop);return canvas;};
  const merged=()=>presets.map((preset,i)=>Object.hasOwn(overrides,i)?overrides[i]:preset);
  const initial=merged();
  for(let i=0;i<initial.length;i++){if(disposed)break;const record=initial[i];try{const image=await renderRecord(record);slots[i]=record;model.setPhoto(i,image);}catch{slots[i]=null;onMessage(`第 ${i+1} 张挂片无法读取，请检查照片路径。`);}}
  const commit=async changes=>{
    if(disposed)throw Error('相片灯已关闭');if(!db)throw Error('浏览器无法保存照片，请允许网站存储后重试。');
    const nextOverrides={...overrides,...changes},next=presets.map((p,i)=>Object.hasOwn(nextOverrides,i)?nextOverrides[i]:p);
    const images=await Promise.all(next.map(renderRecord));
    if(disposed)return;
    await new Promise((resolve,reject)=>{const tx=db.transaction('photos','readwrite');tx.objectStore('photos').put(nextOverrides,'overrides');tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});
    if(disposed)return;overrides=nextOverrides;slots=next;images.forEach((image,i)=>model.setPhoto(i,image));
  };
  return {get slots(){return slots;},commit,
    async restore(){if(!db)throw Error('浏览器无法保存照片。');const images=await Promise.all(presets.map(renderRecord));await new Promise((resolve,reject)=>{const tx=db.transaction('photos','readwrite');tx.objectStore('photos').delete('overrides');tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});if(disposed)return;overrides={};slots=presets.slice();images.forEach((image,i)=>model.setPhoto(i,image));},
    dispose(){disposed=true;abort.abort();db?.close();}
  };
}
