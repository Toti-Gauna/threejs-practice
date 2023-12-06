import * as THREE from "three";
import geometryCapsule from "./models/geometryCapsule";
import ambientLight from "./light/ambientLight";
import geometryGround from "./models/geometryGround";
import geometrySphere from "./models/geometrySphere";
import geometryCube from "./models/geometryCube";
import { isPressed } from "./movement";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 20;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
ambientLight(scene);

// Geometry Models
const capsule = geometryCapsule();
scene.add(capsule);

const cube = geometryCube();
scene.add(cube);

const ground = geometryGround();
scene.add(ground);

geometrySphere(scene);

const animate = () => {
  requestAnimationFrame(animate);

  capsule.rotation.x += 0.05;
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;

  // Movement to the left
  if (isPressed(65)) {
    cube.position.x -= 0.5;
  }

  // Movement to right

  if (isPressed(68)) {
    cube.position.x += 0.5;
  }

  // Movement to up
  if (isPressed(87)) {
    cube.position.y += 0.5;
  }

  // Movement to down

  if (isPressed(83)) {
    cube.position.y -= 0.5;
  }

  //

  camera.lookAt(cube.position);

  renderer.render(scene, camera);
};

animate();
