import * as THREE from "three";

const geometryCube = () => {
  const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(boxGeometry, material);

  cube.position.x = -3;

  return cube;
};

export default geometryCube;
