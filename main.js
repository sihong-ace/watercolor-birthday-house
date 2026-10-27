const field = document.querySelector('.field');
const invitation = document.querySelector('.invitation');
const welcome = document.querySelector('#welcome');
const door = document.querySelector('#door-scene');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let idleStart = null;
let entered = false;
let movingUntil = 0;
let frame = null;
field.querySelector('.field-image').draggable=false;
const wheat = field.querySelector('.rice-foreground');
const ns = 'http://www.w3.org/2000/svg';
for (let i=0;i<38;i++) {
  const group=document.createElementNS(ns,'g');group.classList.add('rice-stalk');
  const x=i*38-10,height=115+(i*37)%95;
  group.style.transformOrigin=`${x}px 250px`;group.style.setProperty('--stalk-angle',`${(i%5-2)*1.8}deg`);
  const stem=document.createElementNS(ns,'path');stem.setAttribute('d',`M${x} 260 Q${x-12} ${250-height*.5} ${x+8} ${250-height}`);stem.setAttribute('fill','none');stem.setAttribute('stroke',i%2?'#7a9457':'#99a260');stem.setAttribute('stroke-width','2');group.append(stem);
  for(let j=0;j<10;j++){const grain=document.createElementNS(ns,'ellipse'),y=250-height+j*4.2,gx=x+8+(j%2?-1:1)*(6+j*.55);grain.setAttribute('cx',gx);grain.setAttribute('cy',y);grain.setAttribute('rx','4');grain.setAttribute('ry','7');grain.setAttribute('fill',i%3?'#b7bd77':'#d0c48a');grain.setAttribute('transform',`rotate(${j%2?-35:35} ${gx} ${y})`);group.append(grain);}
  wheat.append(group);
}
field.addEventListener('pointermove',event=>{if(reducedMotion.matches||event.pointerType==='touch')return;const bounds=field.getBoundingClientRect();const wind=(event.clientX-bounds.left)/bounds.width*2-1;field.style.setProperty('--rice-wind',`${wind*10}deg`);});
field.addEventListener('pointerleave',()=>field.style.setProperty('--rice-wind','0deg'));
const updateWash=()=>{if(entered)return;const progress=Math.min(1,Math.max(0,scrollY/innerHeight));invitation.style.setProperty('--wash-progress',String(progress));};
addEventListener('scroll',updateWash,{passive:true});updateWash();
function fullyAtInvitation() {
  const bounds = invitation.getBoundingClientRect();
  const visible = Math.max(0, Math.min(innerHeight, bounds.bottom) - Math.max(0, bounds.top));
  return visible / Math.min(bounds.height, innerHeight) >= .9;
}
function resetIdle() { idleStart = null; movingUntil = performance.now() + 200; }
// Five seconds of stillness; scrolling back or hiding the tab cancels the timer.
addEventListener('scroll', resetIdle, { passive: true });
addEventListener('wheel', resetIdle, { passive: true });
addEventListener('touchmove', resetIdle, { passive: true });
addEventListener('resize', resetIdle);
document.addEventListener('visibilitychange', resetIdle);
const observer = new IntersectionObserver(([entry]) => {
  invitation.classList.toggle('is-visible', entry.intersectionRatio >= .5);
  if (entry.intersectionRatio < .9) idleStart = null;
}, { threshold: [.5, .9, 1] });
observer.observe(invitation);
function enterDoor() {
  entered = true;
  observer.disconnect();
  document.body.classList.add('is-transitioning');
  setTimeout(() => {
    welcome.hidden = true;
    door.hidden = false;
    document.documentElement.classList.add('at-door');
    document.body.classList.add('at-door');
    window.scrollTo({ top: 0, behavior: 'instant' });
    door.focus({ preventScroll: true });
    // Mount the real 3D porch after its container becomes visible.
    document.dispatchEvent(new CustomEvent('birthday:enter-door'));
    requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove('is-transitioning')));
  }, reducedMotion.matches ? 0 : 1000);
}
function tick(now) {
  if (entered) return;
  if (document.hidden || now < movingUntil || !fullyAtInvitation()) idleStart = null;
  else {
    idleStart ??= now;
    if (now - idleStart >= 5000) { enterDoor(); return; }
  }
  frame = requestAnimationFrame(tick);
}
frame = requestAnimationFrame(tick);
addEventListener('pagehide', () => cancelAnimationFrame(frame));
addEventListener('pageshow', (event) => {
  if (event.persisted && !entered) { resetIdle(); frame = requestAnimationFrame(tick); }
});
