import * as THREE from "three";

const geometryCapsule = () => {
  const geometryCapsule = new THREE.CapsuleGeometry(1, 2, 4, 8);
  const materialCapsule = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const capsule = new THREE.Mesh(geometryCapsule, materialCapsule);
  capsule.position.x = 3;

  return capsule;
};

export default geometryCapsule;
