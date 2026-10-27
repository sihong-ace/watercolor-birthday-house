let porchScene = null;
function startPorch() {
  if (porchScene) return;
  const status = document.querySelector('#scene-status');
  try {
    if (typeof BirthdayDoor === 'undefined') throw new Error('3D bundle unavailable');
    porchScene = BirthdayDoor.mountDoorScene(document.querySelector('#door-canvas'));
    status.textContent = '';
  } catch (error) {
    console.error('Porch initialization failed:', error);
    status.textContent = '暂时无法显示小屋，请在支持 WebGL 的浏览器中重新打开。';
    document.querySelector('#reset-view').hidden = true;
  }
}
document.addEventListener('birthday:enter-door', startPorch);
let changingScene=false;
document.addEventListener('birthday:door-opened',()=>{
  if(changingScene)return;changingScene=true;
  // Run after the exterior's current render finishes, while the veil is fully white.
  setTimeout(()=>{
    const host=document.querySelector('#door-canvas'),stage=host.closest('.door-scene'),veil=document.querySelector('.scene-transition-glow');
    try{
      porchScene?.dispose();porchScene=null;
      stage.classList.remove('is-door-opening','is-window-focus','is-night');
      document.querySelector('#night-toggle').hidden=true;
      document.querySelector('#scene-status').textContent='';
      document.querySelector('#door-title').textContent='老房间';
      porchScene=BirthdayDoor.mountInteriorScene(host);
      requestAnimationFrame(()=>requestAnimationFrame(()=>{if(veil){veil.style.transition='opacity 1s ease';veil.style.opacity='0';setTimeout(()=>veil.remove(),1100);}}));
    }catch(error){console.error('Interior initialization failed:',error);veil?.remove();document.querySelector('#scene-status').textContent='房间暂时无法打开，请刷新后重试。';}
  },0);
});
if (document.body.dataset.scenePreview === 'true') startPorch();
addEventListener('pagehide', (event) => {
  if (!event.persisted) { porchScene?.dispose(); porchScene = null; }
});
