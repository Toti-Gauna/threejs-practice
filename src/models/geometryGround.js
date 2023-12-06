import * as THREE from "three";

const geometryGround = () => {
  const groundGeometry = new THREE.BoxGeometry(15, 20, 0.6);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    side: THREE.DoubleSide,
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);

  ground.rotation.x = 1.7;
  ground.position.y = -3;

  return ground;
};

export default geometryGround;
