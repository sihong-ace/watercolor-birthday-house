import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { createPaintedMaterials } from './painted-materials.js';
import { createReferenceDetails } from './reference-details.js';

export function createHouseFront() {
  const house = new THREE.Group(); house.name = '老家门廊';
  const m = createPaintedMaterials();
  const lineMaterial = new THREE.LineBasicMaterial({ color: '#615346', transparent: true, opacity: .23 });
  function box(name, size, position, material, parent = house, outlined = false) {
    const geometry = outlined ? new RoundedBoxGeometry(...size, 2, Math.min(.012, Math.min(...size) * .17)) : new THREE.BoxGeometry(...size);
    // Project repeatable textures in meters, so flower tiles do not stretch on thin columns.
    if (material.userData.worldSpan) {
      const positions = geometry.attributes.position, normals = geometry.attributes.normal, uv = geometry.attributes.uv;
      const span = material.userData.worldSpan;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i) + position[0], y = positions.getY(i) + position[1], z = positions.getZ(i) + position[2];
        const nx = Math.abs(normals.getX(i)), ny = Math.abs(normals.getY(i));
        uv.setXY(i, (nx > .5 ? z : x) / span, (ny > .5 ? z : y) / span);
      }
      uv.needsUpdate = true;
    }
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name; mesh.position.set(...position);
    mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh);
    if (outlined) {
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 40), lineMaterial);
      mesh.add(edges);
    }
    return mesh;
  }
  function tube(name, start, end, radius, material, parent = house) {
    const a = new THREE.Vector3(...start), b = new THREE.Vector3(...end);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, a.distanceTo(b), 8), material);
    mesh.name = name; mesh.position.copy(a).add(b).multiplyScalar(.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.sub(a).normalize());
    mesh.castShadow = true; parent.add(mesh); return mesh;
  }
  // Coordinate convention: front is +Z, floor top is Y=.30.
  // Extend the platform .45m forward, keeping the building and canopy in place.
  box('门廊石基', [4.96, .30, 2.57], [0, .15, .255], m.stone, house, true);
  box('粉色地砖', [4.73, .035, 2.44], [0, .318, .235], m.floor);
  box('下层台阶', [4.82, .10, .55], [0, .05, 1.79], m.stone, house, true);
  box('上层台阶', [4.82, .10, .35], [0, .15, 1.62], m.stone, house, true);
  box('台阶边缘', [4.82, .012, .035], [0, .205, 1.78], m.cream);
  box('门槛石条', [1.25, .045, .26], [0, .365, -.68], m.stone, house, true);
  for (const [z, y] of [[1.48, .302], [1.71, .204], [2.05, .103]]) box('台阶磨损浅边', [4.76, .015, .025], [0, y, z], m.concrete);

  // Build around real openings, rather than putting window pictures on a solid wall.
  const wallZ = -.92;
  for (const [name, width, x] of [['左边墙', .38, -2.21], ['左门柱', .42, -.79], ['右门柱', .42, .79], ['右边墙', .38, 2.21]]) {
    box(name, [width, 2.56, .15], [x, 1.61, wallZ], m.floral, house, true);
  }
  box('门窗上方花砖', [4.8, .37, .15], [0, 2.70, wallZ], m.floral, house, true);
  for (const x of [-1.5, 1.5]) {
    box('窗下花砖', [1.02, .64, .15], [x, .81, wallZ], m.floral);
    box('窗下墙裙', [1.02, .16, .17], [x, .40, wallZ + .01], m.skirt);
  }
  for (const [width, x] of [[.38, -2.21], [.42, -.79], [.42, .79], [.38, 2.21]]) {
    box('柱脚墙裙', [width, .16, .17], [x, .40, wallZ + .01], m.skirt);
  }
  box('左侧门廊墙', [.16, 2.56, 1.88], [-2.4, 1.61, -.04], m.floral, house, true);
  box('左侧墙裙', [.175, .18, 1.88], [-2.395, .42, -.04], m.skirt);
  // Single timber side door, on the left return wall below/right of the meter.
  // It is closed in this stage; the dark surround gives the recessed opening depth.
  const sideDoor = new THREE.Group(); sideDoor.name = '电箱右下方单扇木门';
  sideDoor.position.set(-2.303, .33, -.18); sideDoor.rotation.y = Math.PI / 2; house.add(sideDoor);
  box('侧门洞阴影', [.69, 1.98, .025], [0, .99, 0], m.darkWood, sideDoor);
  box('侧门木门扇', [.60, 1.89, .055], [0, .945, .021], m.wood, sideDoor, true);
  for (const x of [-.34, .34]) box('侧门木框', [.06, 2.02, .08], [x, 1.01, .028], m.darkWood, sideDoor, true);
  box('侧门上框', [.74, .07, .08], [0, 2.00, .028], m.darkWood, sideDoor, true);
  for (const [y, height] of [[.37, .49], [1.25, .98]]) {
    box('侧门面板凹槽', [.47, height + .055, .018], [0, y, .055], m.darkWood, sideDoor);
    box('侧门木面板', [.42, height, .018], [0, y, .068], m.panel, sideDoor, true);
  }
  tube('侧门把手', [.22, .89, .102], [.22, 1.03, .102], .012, m.metal, sideDoor);
  box('侧门门槛', [.77, .035, .19], [0, .02, .04], m.stone, sideDoor, true);
  box('右侧门廊墙', [.16, 2.56, 1.88], [2.4, 1.61, -.04], m.skirt, house, true);
  box('绿色贴砖柱', [.28, 2.54, .29], [2.39, 1.60, .87], m.green, house, true);
  box('绿柱白色左边条', [.035, 2.54, .035], [2.235, 1.60, 1.035], m.cream);
  box('绿柱白色右边条', [.035, 2.54, .035], [2.53, 1.60, 1.035], m.cream);
  for (const x of [-2.4, 2.4]) box('前方柱脚', [.33, .30, .37], [x, .15, 1.0], m.stone, house, true);
  box('混凝土门廊顶棚', [5.12, .16, 2.20], [0, 2.98, .03], m.concrete, house, true);
  box('顶棚前沿', [5.12, .20, .10], [0, 2.97, 1.11], m.concrete, house, true);

  const windows = [];
  for (const [index, x] of [-1.5, 1.5].entries()) {
    const windowGroup = new THREE.Group(); windowGroup.name = index ? '右窗' : '左侧推拉窗'; house.add(windowGroup);
    box('窗洞深色衬底', [1.10, 1.44, .03], [x, 1.825, -.86], m.shadow, windowGroup);
    box('外窗水泥窗台', [1.24, .065, .21], [x, 1.075, -.66], m.concrete, windowGroup, true);
    // Two overlapping sashes are independently grouped for future sliding animation.
    for (const side of [-1, 1]) {
      const sash = new THREE.Group(); sash.name = `窗扇${side}`; sash.position.set(x + side * .255, 1.825, -.795); windowGroup.add(sash);
      box('灰蓝玻璃', [.475, 1.32, .018], [0, 0, side * .018], m.glass, sash);
      for (const dx of [-.245, .245]) box('推拉窗竖框', [.022, 1.35, .032], [dx, 0, .028], m.frame, sash);
      for (const dy of [-.665, .665, .03]) box('推拉窗横框', [.49, .025, .032], [0, dy, .028], m.frame, sash);
      // Pale dry-brush reflections; no transparent glass exposing an unfinished interior.
      const reflection = new THREE.MeshBasicMaterial({color:'#ced8cc',transparent:true,opacity:.16,depthWrite:false});
      const stroke = box('玻璃水彩反光', [.026, 1.12, .005], [-.12, .04, .039], reflection, sash); stroke.rotation.z = -.035;
    }
    for (const dx of [-.55, .55]) box('外窗竖框', [.06, 1.47, .09], [x + dx, 1.825, -.71], m.frame, windowGroup, true);
    for (const y of [1.10, 2.55]) box('外窗横框', [1.16, .06, .09], [x, y, -.71], m.frame, windowGroup, true);
    for (const z of [-.76, -.72]) box('推拉窗下轨', [1.08, .012, .016], [x, 1.145, z], m.darkWood, windowGroup);
    for (let i = 0; i < 8; i++) {
      const bx = x - .45 + i * .129;
      tube('金属窗栏', [bx, 1.13, -.635], [bx, 2.52, -.635], .011, m.metal, windowGroup);
    }
    for (const y of [1.16, 1.65, 2.14, 2.49]) tube('横向窗栏', [x - .52, y, -.635], [x + .52, y, -.635], .014, m.metal, windowGroup);
    windows.push(windowGroup);
  }

  const leaves = [];
  for (const side of [-1, 1]) {
    const leaf = new THREE.Group(); leaf.name = side < 0 ? '左门扇（关闭）' : '右门扇（关闭）';
    leaf.position.set(side * .535, .33, -.78); house.add(leaf);
    const center = -side * .265;
    box('木门主体', [.53, 1.93, .065], [center, .965, 0], m.wood, leaf, true);
    for (const y of [.36, 1.25]) {
      const height = y < .5 ? .48 : .96;
      box('面板凹槽阴影', [.425, height + .055, .015], [center, y, .039], m.darkWood, leaf);
      box('木门内嵌面板', [.365, height - .025, .018], [center, y, .052], m.panel, leaf, true);
      for (const dx of [-.18, .18]) box('面板内层雕线', [.011, height, .018], [center + dx, y, .059], m.wood, leaf);
      for (const dx of [-.201, .201]) box('面板竖线', [.018, height + .04, .025], [center + dx, y, .062], m.darkWood, leaf);
      for (const dy of [-height / 2 - .013, height / 2 + .013]) box('面板横线', [.42, .018, .025], [center, y + dy, .062], m.darkWood, leaf);
    }
    const handleX = center - side * .17;
    for (const y of [.25, 1.65]) box('木门铰链', [.02, .10, .02], [0, y, .055], m.metal, leaf);
    box('门把手底片', [.025, .21, .025], [handleX, .91, .085], m.metal, leaf);
    tube('门把手', [handleX, .845, .12], [handleX, .99, .12], .012, m.metal, leaf);
    leaves.push(leaf);
  }
  for (const x of [-.585, .585]) box('木门框', [.065, 2.22, .11], [x, 1.43, -.77], m.darkWood, house, true);
  box('门框横梁', [1.23, .07, .12], [0, 2.28, -.76], m.darkWood, house, true);
  box('门楣玻璃', [1.1, .20, .025], [0, 2.42, -.78], m.glass);
  for (const x of [-.18, .18]) box('门楣分格', [.025, .22, .065], [x, 2.42, -.74], m.wood);
  box('门楣顶框', [1.23, .06, .11], [0, 2.55, -.76], m.darkWood);

  const details = createReferenceDetails();
  for (const [x, banner] of [[-.785, details.left], [.785, details.right]]) {
    banner.name = '褪色春联'; banner.position.set(x, 1.37, -.817); house.add(banner);
  }
  box('门上装饰画框', [.65, .26, .05], [0, 2.73, -.78], m.darkWood, house, true);
  details.lintel.name = '参考图门上装饰'; details.lintel.position.set(0, 2.73, -.738); house.add(details.lintel);
  const bulbMaterial = new THREE.MeshStandardMaterial({color:'#f4f4ed',roughness:.3,emissive:'#fff8eb',emissiveIntensity:0});
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(.055, 20, 12), bulbMaterial);
  bulb.name = '门口灯泡'; bulb.position.set(0, 2.57, -.63); house.add(bulb);
  box('白色灯座', [.075, .04, .06], [0, 2.64, -.655], m.cream);
  // Side-door frame top=2.365; meter top=2.530, exactly half its .33m height above.
  // Place the meter beside the door instead of in front of the door panel.
  const meter = new THREE.Group(); meter.position.set(-2.245, 2.365, .70); meter.rotation.y = Math.PI / 2; house.add(meter);
  box('旧电表箱', [.23, .33, .15], [0, 0, 0], m.pipe, meter, true);
  tube('电表竖线', [-2.285, .45, .70], [-2.285, 2.2, .70], .012, m.pipe);
  tube('电表上方导线', [-2.285, 2.53, .70], [-2.285, 2.75, .70], .012, m.pipe);
  tube('檐下导线', [-2.285, 2.75, .70], [-2.285, 2.75, .86], .012, m.pipe);
  return { group: house, windows, leaves, bulb };
}
