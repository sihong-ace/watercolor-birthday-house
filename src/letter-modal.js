export function createLetterModal(stage){
  const dialog=document.createElement('dialog');dialog.className='birthday-letter';dialog.setAttribute('aria-labelledby','birthday-letter-title');
  const photoPage=document.createElement('div');photoPage.className='birthday-photo-page';const photo=document.createElement('img');photo.src=new URL('assets/doodles/birthday.png',document.baseURI).href;photo.alt='温馨复古生日蛋糕静物，燃着的蜡烛、礼物、贺卡与茶杯';const scrollHint=document.createElement('p');scrollHint.textContent='往下看看，信在照片下面。';photoPage.append(photo,scrollHint);
  const title=document.createElement('h2');title.id='birthday-letter-title';title.textContent='写给来到小屋的你';
  const content=document.createElement('p');content.className='birthday-letter-content';content.textContent='这封信还在准备中。';
  const close=document.createElement('button');close.type='button';close.textContent='收好信，继续看看';close.addEventListener('click',()=>dialog.close());const letterPage=document.createElement('article');letterPage.className='birthday-letter-page';letterPage.append(title,content);dialog.append(close,photoPage,letterPage);document.body.appendChild(dialog);
  const reopen=document.createElement('button');reopen.type='button';reopen.className='letter-reopen';reopen.textContent='读信';reopen.hidden=true;stage.appendChild(reopen);
  let disposed=false;const abort=new AbortController();
  fetch(new URL('assets/birthday-letter.json',document.baseURI),{signal:abort.signal}).then(r=>{if(!r.ok)throw new Error('Letter unavailable');return r.json();}).then(data=>{
    if(disposed)return;if(typeof data.title==='string'&&data.title.trim())title.textContent=data.title;
    if(typeof data.content==='string'&&data.content.trim())content.textContent=data.content;
  }).catch(()=>{});
  const show=()=>{if(disposed||dialog.open)return;reopen.hidden=false;dialog.showModal();dialog.scrollTop=0;close.focus({preventScroll:true});};reopen.addEventListener('click',show);
  return {show,get open(){return dialog.open;},dispose(){disposed=true;abort.abort();dialog.close();dialog.remove();reopen.removeEventListener('click',show);reopen.remove();}};
}
