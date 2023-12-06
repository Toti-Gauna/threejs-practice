import * as THREE from "three";

const ambientLight = (scene) => {
  const ambient_light = new THREE.AmbientLight(0x404040);
  const direction_light = new THREE.DirectionalLight(0x00ff00, 1);
  direction_light.position.set(1, 1, 1);
  ambient_light.add(direction_light);
  return scene.add(ambient_light);
};
export default ambientLight;
