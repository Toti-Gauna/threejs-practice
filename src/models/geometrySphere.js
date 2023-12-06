import * as THREE from "three";

const geometrySphere = (scene) => {
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: "white" });
  const circle = new THREE.Mesh(geometry, material);
  return scene.add(circle);
};

export default geometrySphere;
