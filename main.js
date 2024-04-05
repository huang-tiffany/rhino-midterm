import * as THREE from "three";
import { Rhino3dmLoader } from "three/addons/loaders/3DMLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

THREE.Object3D.DEFAULT_UP.set(0, 0, 1);

const scene = new THREE.Scene();
scene.background = new THREE.Color();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Instantiate a loader
const loader = new Rhino3dmLoader();
let model;

// Specify path to a folder containing WASM/JS libraries or a CDN.
// For example, /jsm/libs/rhino3dm/ is the location of the library inside the three.js repository
// loader.setLibraryPath( '/path_to_library/rhino3dm/' );
loader.setLibraryPath("https://unpkg.com/rhino3dm@8.4.0/");

// Load a 3DM file
loader.load(
  // resource URL
  "coffee grinder.3dm",
  // called when the resource is loaded
  function (object) {
    scene.add(object);
    model = object;
  },
  // called as loading progresses
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  function (error) {
    console.log("An error happened");
  }
);

const directionalLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 30;
camera.position.y = -90;
camera.position.x = 30;
camera.rotation.z += Math.PI / 2;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  //model.rotation.z += 0.001;
}
animate();
