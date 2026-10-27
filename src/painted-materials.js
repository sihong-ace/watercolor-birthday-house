import * as THREE from 'three';

// Reproducible paint textures generated locally; no external images or requests.
let seed = 20261005;
function random() { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; }
function canvasTexture(draw, width = 512, height = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext('2d');
  draw(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
function wash(ctx, width, height, color) {
  ctx.fillStyle = color; ctx.fillRect(0, 0, width, height);
  for (let i = 0; i < 180; i++) {
    const x = random() * width, y = random() * height, r = 6 + random() * 65;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    gradient.addColorStop(0, random() > .45 ? 'rgba(255,249,232,.10)' : 'rgba(96,78,57,.075)');
    gradient.addColorStop(1, 'rgba(255,249,232,0)');
    ctx.fillStyle = gradient; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  for (let i = 0; i < 9000; i++) {
    ctx.fillStyle = random() > .5 ? 'rgba(255,251,240,.12)' : 'rgba(70,59,44,.04)';
    ctx.fillRect(random() * width, random() * height, 1, 1);
  }
}
function material(map, extras = {}) { return new THREE.MeshStandardMaterial({ map, roughness: 1, metalness: 0, ...extras }); }
function surface(result, span) {
  result.map.wrapS = result.map.wrapT = THREE.RepeatWrapping;
  result.userData.worldSpan = span;
  return result;
}
function paper(color, span) { const result = material(canvasTexture((ctx, w, h) => wash(ctx, w, h, color))); return span ? surface(result, span) : result; }
function tiled(color, floral = false, green = false, span = 1.5) {
  return surface(material(canvasTexture((ctx, w, h) => {
    wash(ctx, w, h, color);
    const count = floral ? 8 : 6, size = w / count;
    for (let y = 0; y < count; y++) for (let x = 0; x < count; x++) {
      const px = x * size, py = y * size;
      ctx.strokeStyle = 'rgba(236,223,203,.48)'; ctx.lineWidth = 1.1;
      ctx.strokeRect(px + .8, py + .8, size - 1.6, size - 1.6);
      ctx.fillStyle = `rgba(255,245,218,${random() * .09})`; ctx.fillRect(px + 2, py + 2, size - 4, size - 4);
      if (floral) {
        const cx = px + size / 2, cy = py + size / 2;
        ctx.fillStyle = '#eee5d6';
        for (const [dx, dy] of [[-6, 0], [6, 0], [0, -6], [0, 6]]) {
          ctx.beginPath(); ctx.ellipse(cx + dx, cy + dy, 4, 5, dx ? Math.PI / 2 : 0, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = '#575650'; ctx.fillRect(cx - 3, cy - 3, 6, 6);
        for (const dx of [-21, 21]) for (const dy of [-21, 21]) {
          ctx.fillStyle = 'rgba(238,230,212,.7)'; ctx.beginPath(); ctx.arc(cx + dx, cy + dy, 1.8, 0, Math.PI * 2); ctx.fill();
        }
      }
      if (green) {
        ctx.strokeStyle = 'rgba(56,91,76,.32)';
        ctx.beginPath(); ctx.moveTo(px + size / 2, py + 5); ctx.lineTo(px + size - 5, py + size / 2); ctx.lineTo(px + size / 2, py + size - 5); ctx.lineTo(px + 5, py + size / 2); ctx.closePath(); ctx.stroke();
      }
    }
  })), span);
}
function wood(color) {
  return material(canvasTexture((ctx, w, h) => {
    wash(ctx, w, h, color);
    for (let i = 0; i < 100; i++) {
      const x = random() * w;
      ctx.strokeStyle = i % 3 ? 'rgba(58,37,23,.17)' : 'rgba(249,224,185,.18)'; ctx.lineWidth = .5 + random() * 2;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.bezierCurveTo(x - 10, h * .3, x + 10, h * .7, x + random() * 6, h); ctx.stroke();
    }
    for (let knot = 0; knot < 5; knot++) {
      const x = random() * w, y = random() * h;
      for (let ring = 1; ring < 7; ring++) {
        ctx.strokeStyle = `rgba(77,49,30,${.11 - ring * .01})`;
        ctx.beginPath(); ctx.ellipse(x, y, ring * 2.3, ring * 10, .08, 0, Math.PI * 2); ctx.stroke();
      }
    }
  }));
}
function stone() {
  return surface(material(canvasTexture((ctx, w, h) => {
    wash(ctx, w, h, '#bcb6a7');
    for (let i = 0; i < 120; i++) {
      const x = random() * w, y = random() * h, r = 5 + random() * 28;
      ctx.fillStyle = ['#e6dfcd', '#969b91', '#d6c9b2', '#ac9e8c'][i % 4]; ctx.globalAlpha = .66;
      ctx.beginPath();
      for (let j = 0; j < 6; j++) { const angle = j / 6 * Math.PI * 2; const radius = r * (.5 + random() * .5); ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius); }
      ctx.closePath(); ctx.fill();
    }
    ctx.globalAlpha = 1;
  })), .85);
}
export function createPaintedMaterials() {
  const palette = {
    floral: tiled('#ba9c8f', true, false, 1.2), skirt: tiled('#946e5c', false, false, 1.5), floor: tiled('#c8ad9e', false, false, 2.4),
    green: tiled('#88a895', false, true, .9), concrete: paper('#c9c0ae', 1.4), stone: stone(),
    wood: wood('#9d7857'), darkWood: wood('#76573f'), panel: wood('#a88661'),
    frame: paper('#c1bcac'), metal: paper('#7e847a'), pipe: paper('#b39755'),
    glass: paper('#718780'), shadow: paper('#53615a'), cream: paper('#e1d7c4'),
  };
  return palette;
}
export function couplet(text) {
  const texture = canvasTexture((ctx, w, h) => {
    wash(ctx, w, h, '#ad6e60');
    ctx.strokeStyle = '#dcc29a'; ctx.lineWidth = 3; ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.fillStyle = '#f1dfb6'; ctx.font = '60px "KaiTi", "STKaiti", "SimSun", serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    [...text].forEach((letter, index) => ctx.fillText(letter, w / 2, 34 + index * (h - 68) / (text.length - 1)));
  }, 96, 768);
  return new THREE.MeshStandardMaterial({ map: texture, side: THREE.DoubleSide, roughness: 1 });
}
export function lintelPainting() {
  return material(canvasTexture((ctx, w, h) => {
    wash(ctx, w, h, '#e3d7bd');
    ctx.strokeStyle = '#6e8e83'; ctx.lineWidth = 22;
    ctx.beginPath(); ctx.moveTo(40, 180); ctx.bezierCurveTo(90, 70, 260, 255, 335, 155); ctx.bezierCurveTo(380, 70, 440, 100, 458, 135); ctx.stroke();
    ctx.strokeStyle = '#b48070'; ctx.lineWidth = 9;
    ctx.beginPath(); ctx.moveTo(78, 122); ctx.bezierCurveTo(165, 60, 225, 178, 330, 112); ctx.stroke();
  }, 512, 256));
}
