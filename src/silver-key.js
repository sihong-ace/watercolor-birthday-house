import * as THREE from 'three';

// A flat dimple key: square bow hole and milled blade, inspired by the supplied shape.
export function createSilverKey() {
  const group=new THREE.Group();
  const silver=new THREE.MeshStandardMaterial({color:'#c7ccd0',metalness:.65,roughness:.30});
  const recessed=new THREE.MeshStandardMaterial({color:'#858e94',metalness:.5,roughness:.55});
  const bow=new THREE.Shape();
  bow.moveTo(-.030,-.023);bow.lineTo(.028,-.023);bow.quadraticCurveTo(.034,-.023,.034,-.017);
  bow.lineTo(.034,.020);bow.quadraticCurveTo(.034,.027,.027,.027);bow.lineTo(-.027,.027);
  bow.quadraticCurveTo(-.034,.027,-.034,.020);bow.lineTo(-.034,-.017);bow.quadraticCurveTo(-.034,-.023,-.030,-.023);
  const hole=new THREE.Path();hole.moveTo(-.008,.003);hole.lineTo(-.008,.020);hole.lineTo(.014,.020);hole.lineTo(.014,.003);hole.closePath();bow.holes.push(hole);
  group.add(new THREE.Mesh(new THREE.ExtrudeGeometry(bow,{depth:.005,bevelEnabled:true,bevelSize:.0015,bevelThickness:.001,bevelSegments:2,steps:1}),silver));
  const blade=new THREE.Shape();blade.moveTo(-.012,-.017);blade.lineTo(.012,-.017);blade.lineTo(.012,-.087);blade.quadraticCurveTo(.012,-.093,.007,-.093);blade.lineTo(-.007,-.093);blade.quadraticCurveTo(-.012,-.093,-.012,-.087);blade.closePath();
  group.add(new THREE.Mesh(new THREE.ExtrudeGeometry(blade,{depth:.005,bevelEnabled:true,bevelSize:.001,bevelThickness:.0008,bevelSegments:2,steps:1}),silver));
  for(const x of [-.008,.006]){const groove=new THREE.Mesh(new THREE.BoxGeometry(.002,.060,.0007),recessed);groove.position.set(x,-.054,.0056);group.add(groove);}
  for(const y of [-.036,-.047,-.060,-.073,-.085]){const dimple=new THREE.Mesh(new THREE.SphereGeometry(.0022,8,6),recessed);dimple.scale.z=.2;dimple.position.set(-.001,y,.0055);group.add(dimple);}
  return group;
}
