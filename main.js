import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const loader = new GLTFLoader();

loader.load(
  "/chair.glb",
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const directionalLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;
//camera.position.set(0, 20, 100);
//controls.update();

function animate() {
  requestAnimationFrame(animate);
  // /controls.update();
  renderer.render(scene, camera);
}
animate();
