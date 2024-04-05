import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const mtlLoader = new MTLLoader();
mtlLoader.load("glass.mtl", function (materials) {
  materials.preload();

  // Instantiate a loader
  const loader = new OBJLoader();
  let model;

  // Specify path to a folder containing WASM/JS libraries or a CDN.
  // For example, /jsm/libs/rhino3dm/ is the location of the library inside the three.js repository
  // loader.setLibraryPath( '/path_to_library/rhino3dm/' );

  // Load a 3DM file
  loader.load(
    // resource URL
    "glass.obj",
    // called when the resource is loaded
    function (object) {
      scene.add(object);
      object.setMaterials(materials);
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
});

const directionalLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 30;
camera.position.y = 0;
camera.position.x = 30;
camera.rotation.z += Math.PI / 2;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  //model.rotation.z += 0.001;
}
animate();
