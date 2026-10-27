import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createHouseFront } from './house-front.js';
import { createWindowJourney } from './window-journey.js';
import {createDoorOpening} from './door-opening.js';
import {createPorchHarvest} from './porch-harvest.js';
export {mountInteriorScene} from './interior-scene.js';
export {mountReferencePreview} from './reference-preview.js';

export function mountDoorScene(host) {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;
  renderer.domElement.setAttribute('aria-label', '可旋转的水彩老家门廊，双扇木门关闭，两侧窗户与石台阶');
  renderer.domElement.setAttribute('role', 'img');
  host.appendChild(renderer.domElement);
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 60);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = .085;
  controls.enablePan = false; controls.rotateSpeed = .45;
  controls.minAzimuthAngle = -.40; controls.maxAzimuthAngle = .43;
  controls.minPolarAngle = 1.30; controls.maxPolarAngle = 1.49;
  controls.minDistance = 6.7; controls.maxDistance = 11.5;
  controls.zoomSpeed = .6;
  function reset() { camera.position.set(1.3, 3.2, 9.4); controls.target.set(0, 1.47, .02); controls.update(); }
  reset();
  const ambient = new THREE.HemisphereLight('#f8f1e4', '#b0aa98', 1.2); scene.add(ambient);
  const light = new THREE.DirectionalLight('#fff3de', 1.6); light.position.set(-3, 6, 7);
  light.castShadow = true; light.shadow.mapSize.set(1024, 1024);
  light.shadow.camera.left = -5; light.shadow.camera.right = 5;
  light.shadow.camera.top = 5; light.shadow.camera.bottom = -5;
  light.shadow.normalBias = .03; light.shadow.bias = -.0003;
  light.shadow.radius = 4; light.shadow.blurSamples = 8; scene.add(light);
  const fill = new THREE.DirectionalLight('#e8edef', .45); fill.position.set(4, 3, 2); scene.add(fill);
  const model = createHouseFront(); scene.add(model.group);
  const harvest=createPorchHarvest();scene.add(harvest.root);
  const lamp = new THREE.PointLight('#fff8eb', 0, 5.5, 2);
  lamp.position.set(0, 2.52, -.43); lamp.castShadow = true;
  lamp.shadow.mapSize.set(512, 512); lamp.shadow.normalBias = .02; lamp.shadow.bias = -.0003;
  scene.add(lamp);
  const glowCanvas = document.createElement('canvas'); glowCanvas.width = glowCanvas.height = 64;
  const glowContext = glowCanvas.getContext('2d');
  const gradient = glowContext.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255,250,239,.65)'); gradient.addColorStop(.25, 'rgba(255,248,231,.18)'); gradient.addColorStop(1, 'rgba(255,248,231,0)');
  glowContext.fillStyle = gradient; glowContext.fillRect(0, 0, 64, 64);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(glowCanvas), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
  glow.position.copy(model.bulb.position); glow.position.z += .035; glow.scale.set(.28, .28, 1); scene.add(glow);
  const stage = host.closest('.door-scene');
  const journey = createWindowJourney({host,camera,controls,model,status:document.querySelector('#scene-status')});
  const opening=createDoorOpening({host,scene,camera,controls,model,journey,status:document.querySelector('#scene-status')});
  const nightButton = document.querySelector('#night-toggle');
  const bulbButton = document.createElement('button');
  bulbButton.className = 'bulb-hit-target'; bulbButton.type = 'button';
  bulbButton.setAttribute('aria-label', '点击灯泡切换昼夜'); bulbButton.setAttribute('aria-pressed', 'false');
  bulbButton.title = '点击灯泡切换昼夜'; host.appendChild(bulbButton);
  let isNight = false, nightAmount = 0, lastTime = performance.now();
  function toggleNight() {
    isNight = !isNight;
    stage.classList.toggle('is-night', isNight);
    nightButton.setAttribute('aria-pressed', String(isNight));
    nightButton.textContent = isNight ? '回到白天' : '看夜晚';
    bulbButton.setAttribute('aria-pressed', String(isNight));
  }
  nightButton.addEventListener('click', toggleNight);
  bulbButton.addEventListener('click', toggleNight);
  const bulbScreen = new THREE.Vector3();
  function overBulb(event) {
    const bounds = renderer.domElement.getBoundingClientRect();
    model.bulb.getWorldPosition(bulbScreen); bulbScreen.project(camera);
    const x = bounds.left + (bulbScreen.x + 1) * bounds.width / 2;
    const y = bounds.top + (1 - bulbScreen.y) * bounds.height / 2;
    return Math.hypot(event.clientX - x, event.clientY - y) < 22;
  }
  let pointerStart = null;
  const onDown = event => { pointerStart = [event.clientX, event.clientY]; };
  const onUp = event => {
    if (pointerStart && Math.hypot(event.clientX - pointerStart[0], event.clientY - pointerStart[1]) < 6 && overBulb(event)) toggleNight();
    pointerStart = null;
  };
  const onMove = event => { renderer.domElement.style.cursor = overBulb(event) ? 'pointer' : 'grab'; };
  const onCancel = () => { pointerStart = null; };
  renderer.domElement.addEventListener('pointerdown', onDown);
  renderer.domElement.addEventListener('pointerup', onUp);
  renderer.domElement.addEventListener('pointermove', onMove);
  renderer.domElement.addEventListener('pointercancel', onCancel);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.ShadowMaterial({ color: '#6c6b58', opacity: .08 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -.007; floor.receiveShadow = true; scene.add(floor);
  let width = 0, height = 0, disposed = false, frame;
  function resize() {
    width = host.clientWidth; height = host.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height); camera.aspect = width / height;
    camera.fov = width / height < 1 ? 48 : 34;
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host); resize();
  function animate(now = performance.now()) {
    if (disposed) return;
    frame = requestAnimationFrame(animate);
    if (document.hidden || host.closest('[hidden]') || !width || !height) return;
    const delta = Math.min((now - lastTime) / 1000, .1); lastTime = now;
    const targetNight = Number(isNight);
    nightAmount += Math.sign(targetNight - nightAmount) * Math.min(Math.abs(targetNight - nightAmount), delta / .9);
    ambient.intensity = THREE.MathUtils.lerp(1.2, .20, nightAmount);
    light.intensity = THREE.MathUtils.lerp(1.6, .08, nightAmount);
    fill.intensity = THREE.MathUtils.lerp(.45, .19, nightAmount);
    lamp.intensity = nightAmount * 3.5; lamp.visible = nightAmount > .001;
    model.bulb.material.emissiveIntensity = nightAmount * 3;
    glow.material.opacity = nightAmount * .4;harvest.update(nightAmount);
    const cameraMoving=journey.update(now,width,height);
    const doorMoving=opening.update(now,width,height);
    if(!cameraMoving&&!doorMoving&&!opening.locked)controls.update();
    renderer.render(scene, camera);
    model.bulb.getWorldPosition(bulbScreen); bulbScreen.project(camera);
    bulbButton.style.left = `${(bulbScreen.x + 1) * width / 2}px`;
    bulbButton.style.top = `${(1 - bulbScreen.y) * height / 2}px`;
  }
  animate();
  const resetButton = document.querySelector('#reset-view');
  const handleReset=()=>{if(opening.locked)return;if(journey.focused)journey.returnToRoom();else reset();};
  resetButton.addEventListener('click', handleReset);
  const onLost = event => { event.preventDefault(); document.querySelector('#scene-status').textContent = '画面暂时中断，请刷新后重试。'; };
  renderer.domElement.addEventListener('webglcontextlost', onLost);
  return {
    reset,
    dispose() {
      disposed = true; cancelAnimationFrame(frame); resizeObserver.disconnect(); controls.dispose();
      resetButton.removeEventListener('click', handleReset);journey.dispose();opening.dispose();
      nightButton.removeEventListener('click', toggleNight);
      bulbButton.removeEventListener('click', toggleNight); bulbButton.remove();
      renderer.domElement.removeEventListener('pointerdown', onDown);
      renderer.domElement.removeEventListener('pointerup', onUp);
      renderer.domElement.removeEventListener('pointermove', onMove);
      renderer.domElement.removeEventListener('pointercancel', onCancel);
      renderer.domElement.removeEventListener('webglcontextlost', onLost);
      const geometries = new Set(), materials = new Set(), textures = new Set();
      scene.traverse(object => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
          materials.add(material); for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
        }
      });
      geometries.forEach(item => item.dispose()); textures.forEach(item => item.dispose()); materials.forEach(item => item.dispose());
      renderer.dispose(); renderer.domElement.remove();
    },
  };
}
