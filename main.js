import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.001,
  1000
);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  physicallyCorrectLights: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = true;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.5;
renderer.gammaOutput = true;
renderer.gammaFactor = 2.2;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const environment = new RoomEnvironment(renderer);
const pmremGenerator = new THREE.PMREMGenerator(renderer);
scene.environment = pmremGenerator.fromScene(environment).texture;
window.addEventListener("resize", onWindowResize);

const light = new THREE.DirectionalLight(0xfffefb, 1.5); // soft yellow light
light.castShadow = true;
light.shadow.bias = -0.0001;
light.position.set(-10, 12.5, 5);
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
scene.add(light);

const light2 = new THREE.DirectionalLight(0xfffefb, 1); // soft yellow light
light2.castShadow = true;
light2.shadow.bias = -0.0001;
light2.position.set(-15, 15, 10);
light2.shadow.mapSize.width = 2048;
light2.shadow.mapSize.height = 2048;
scene.add(light2);

const ambientLight = new THREE.AmbientLight(0xfffefb, 0.5);
scene.add(ambientLight);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();
let shelf;
let coffeeGrinder;
let radio;
let clock;
let largeSpeaker;
let recordPlayer;
let juicer;
let fan;
let razor;
let tp1;
let calculator;

loader.load(
  "/shelf.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material && material.name != "Metal") {
        child.material = new THREE.MeshPhongMaterial();
        child.material.color = material.color;
        child.material.shininess = 100;
        child.material.roughness = 0;
        child.material.flatShading = true;
      }
    });

    gltf.scene.position.set(0, -1, 0);
    shelf = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/coffee grinder.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material && material.name != "Metal" && material.name != "Glass") {
        child.material = new THREE.MeshPhongMaterial();
        child.material.color = material.color;
        child.material.shininess = 100;
        child.material.roughness = 0;
        child.material.flatShading = true;
      }
    });

    gltf.scene.position.set(-0.75, 0.755, 0.1);
    coffeeGrinder = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/radio.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material) {
        child.material = new THREE.MeshPhongMaterial();
        child.material.color = material.color;
        child.material.shininess = 50;
        child.material.roughness = 65;
        child.material.flatShading = true;
      }
    });

    gltf.scene.position.set(-0.25, -0.12, 0.25);
    radio = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/clock.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material && material.name != "Glass") {
        child.material = new THREE.MeshPhongMaterial();
        child.material.color = material.color;
        child.material.flatShading = true;
        child.material.shininess = 100;

        if (material.name.includes("Gloss")) {
          child.material.roughness = 10;
        } else {
          child.material.roughness = 100;
        }
      }
    });

    gltf.scene.position.set(1, -0.1625, 0.1);
    clock = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/large speaker.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;
    });

    gltf.scene.position.set(-1.375, 0.22, 0.25);
    largeSpeaker = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/record player.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material && material.name.includes("Paint")) {
        child.material = new THREE.MeshPhongMaterial();
        child.material.color = material.color;
        child.material.flatShading = true;
        child.material.shininess = 100;
        child.material.roughness = 40;
      }
    });

    gltf.scene.position.set(0.375, -0.423, 0.35);
    recordPlayer = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/juicer.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material) {
        child.material = new THREE.MeshPhongMaterial();
        child.material.color = material.color;
        child.material.flatShading = true;
        child.material.shininess = 100;

        if (
          !material.name.includes("Black") ||
          !material.name.includes("Red")
        ) {
          child.material.roughness = 0;
        } else {
          child.material.roughness = 100;
        }
      }
    });

    gltf.scene.position.set(-0.6, 0.865, 0.1);
    juicer = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/fan.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material && material.name.includes("Matte")) {
        child.material = new THREE.MeshPhongMaterial();
        child.material.color = material.color;
        child.material.flatShading = true;
        child.material.shininess = 100;
        if (material.name.includes("Matte")) {
          child.material.roughness = 50;
        } else {
          child.material.roughness = 100;
        }
      }
    });

    gltf.scene.position.set(0.3, 0.825, 0.1);
    fan = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/razor.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material && material.name.includes("Paint")) {
        child.material = new THREE.MeshPhongMaterial();
        child.material.color = material.color;
        child.material.flatShading = true;
        child.material.shininess = 100;
        child.material.roughness = 25;
      }
    });

    gltf.scene.position.set(0.575, 0.348, 0.1);
    razor = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/tp 1.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material && material.name.includes("Paint")) {
        child.material = new THREE.MeshPhongMaterial();
        child.material.color = material.color;
        child.material.flatShading = true;
        child.material.shininess = 100;

        if (material.name.includes("Translucent")) {
          child.material.roughness = 0;
          child.material.opacity = 60;
        } else if (
          material.name.includes("Red") ||
          material.name.includes("Brown") ||
          material.name.includes("White")
        ) {
          child.material.roughness = 100;
        } else {
          child.material.roughness = 50;
        }
      }
    });

    gltf.scene.position.set(-0.575, -0.042, 0.25);
    tp1 = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/calculator.glb",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material && material.name.includes("Paint")) {
        child.material = new THREE.MeshPhongMaterial();
        child.material.color = material.color;
        child.material.flatShading = true;
        child.material.shininess = 100;

        if (material.name == "Paint") {
          child.material.roughness = 50;
        } else {
          child.material.roughness = 25;
        }
      }
    });

    gltf.scene.position.set(1.2, -0.155, 0.2);
    gltf.scene.rotation.x = -90 * (Math.PI / 180);
    gltf.scene.rotation.z = -60 * (Math.PI / 180);
    calculator = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const wallGeometry = new THREE.BoxGeometry(50, 50, 0.01);
const wallMaterial = new THREE.MeshPhongMaterial({ color: 0xf3f3f3 });
const wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.castShadow = true;
wall.receiveShadow = true;
wall.position.set(0, 0.25, 0);
wall.material.shininess = 100;
wall.material.roughness = 0;
wall.material.flatShading = true;
scene.add(wall);

const floorGeometry = new THREE.BoxGeometry(50, 0.01, 3.5);
const floorMaterial = new THREE.MeshPhongMaterial({ color: 0xa3a3a3 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.castShadow = true;
floor.receiveShadow = true;
floor.position.set(0, -1.5, 1.75);
floor.material.shininess = 100;
floor.material.roughness = 0;
floor.material.flatShading = true;
scene.add(floor);

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
//   console.log(camera.position);
// }
// animate();

//———//

/* Liner Interpolation
 * lerp(min, max, ratio)
 * eg,
 * lerp(20, 60, .5)) = 40
 * lerp(-20, 60, .5)) = 20
 * lerp(20, 60, .75)) = 50
 * lerp(-20, -10, .1)) = -.19
 */
function lerp(x, y, a) {
  return (1 - a) * x + a * y;
}

// Used to fit the lerps to start and end at specific scrolling percentages
function scalePercent(start, end) {
  return (scrollPercent - start) / (end - start);
}

const animationScripts = [];

let laX = -0.075;
let laY = 0;
let laZ = 0;

const sec0 = document.querySelector("#section-0 .section-content");
const sec1 = document.querySelector("#section-1 .section-content");
const sec2 = document.querySelector("#section-2 .section-content");
const sec3 = document.querySelector("#section-3 .section-content");
const sec4 = document.querySelector("#section-4 .section-content");
const sec5 = document.querySelector("#section-5 .section-content");
const sec6 = document.querySelector("#section-6 .section-content");
const sec7 = document.querySelector("#section-7 .section-content");
const sec8 = document.querySelector("#section-8 .section-content");
const sec9 = document.querySelector("#section-9 .section-content");
const sec10 = document.querySelector("#section-10 .section-content");
const sec11 = document.querySelector("#section-11 .section-content");

// initial view
animationScripts.push({
  start: 0,
  end: 0,
  func: () => {
    camera.position.set(-0.075, 0, 3);
    camera.lookAt(laX, laY, laZ);
    sec0.style.opacity = 1;
  },
});

// fan
animationScripts.push({
  start: 0,
  end: 8,
  func: () => {
    // 0.3, 0.825, 0.1;
    // camera.position.set(0.385, 0.85, 0.35);
    // camera.lookAt(0.385, 0.85, 0.35);
    laX = lerp(-0.075, 0.385, scalePercent(0, 8));
    laY = lerp(0, 0.85, scalePercent(0, 8));
    laZ = lerp(0, 0.35, scalePercent(0, 8));

    camera.position.x = lerp(-0.075, 0.385, scalePercent(0, 8));
    camera.position.y = lerp(0, 0.85, scalePercent(0, 8));
    camera.position.z = lerp(3, 0.35, scalePercent(0, 8));

    camera.lookAt(laX, laY, laZ);

    sec0.style.opacity = lerp(1, 0, scalePercent(0, 2));
    sec1.style.opacity = lerp(0, 1, scalePercent(7.5, 8));
  },
});

// juicer
animationScripts.push({
  start: 10,
  end: 12,
  func: () => {
    // -0.6, 0.865, 0.1
    // camera.lookAt(-0.5, 0.865, 0.1);
    // camera.position.set(-0.65, 0.9, 0.45);

    camera.position.z = lerp(0.35, 0.5, scalePercent(10, 12));

    camera.lookAt(laX, laY, laZ);

    sec0.style.opacity = 0;
    sec1.style.opacity = lerp(1, 0, scalePercent(10, 12));
  },
});

// juicer
animationScripts.push({
  start: 12,
  end: 19,
  func: () => {
    // -0.6, 0.865, 0.1
    // camera.lookAt(-0.5, 0.865, 0.1);
    // camera.position.set(-0.65, 0.9, 0.45);

    laX = lerp(0.385, -0.5, scalePercent(12, 19));
    laY = lerp(0.85, 0.865, scalePercent(12, 19));
    laZ = lerp(0.35, 0.1, scalePercent(12, 19));

    camera.position.x = lerp(0.385, -0.65, scalePercent(12, 19));
    camera.position.y = lerp(0.85, 0.9, scalePercent(12, 19));
    camera.position.z = lerp(0.5, 0.45, scalePercent(12, 19));

    camera.lookAt(laX, laY, laZ);

    sec1.style.opacity = 0;
    sec2.style.opacity = lerp(0, 1, scalePercent(18.5, 19));
  },
});

// record player
animationScripts.push({
  start: 21,
  end: 28,
  func: () => {
    // 0.375, -0.423, 0.35
    // camera.lookAt(0.375, -0.15, 0.35);
    // camera.position.set(0.375, -0.05, 0.9);

    laX = lerp(-0.5, 0.375, scalePercent(21, 28));
    laY = lerp(0.865, -0.15, scalePercent(21, 28));
    laZ = lerp(0.1, 0.35, scalePercent(21, 28));

    camera.position.x = lerp(-0.65, 0.375, scalePercent(21, 28));
    camera.position.y = lerp(0.9, -0.05, scalePercent(21, 28));
    camera.position.z = lerp(0.45, 0.9, scalePercent(21, 28));

    camera.lookAt(laX, laY, laZ);

    sec2.style.opacity = lerp(1, 0, scalePercent(21, 23));
    sec3.style.opacity = lerp(0, 1, scalePercent(27.5, 28));
  },
});

// calculator
animationScripts.push({
  start: 30,
  end: 37,
  func: () => {
    // 1.2, -0.155, 0.2
    // camera.lookAt(1.45, -2.5, 0);
    // camera.position.set(1.2, 0, 0.25);

    laX = lerp(0.375, 1.45, scalePercent(30, 37));
    laY = lerp(-0.15, -2.5, scalePercent(30, 37));
    laZ = lerp(0.35, 0, scalePercent(30, 37));

    camera.position.x = lerp(0.375, 1.2, scalePercent(30, 37));
    camera.position.y = lerp(-0.05, 0, scalePercent(30, 37));
    camera.position.z = lerp(0.9, 0.25, scalePercent(30, 37));

    camera.lookAt(laX, laY, laZ);

    sec2.style.opacity = 0;
    sec3.style.opacity = lerp(1, 0, scalePercent(30, 32));
    sec4.style.opacity = lerp(0, 1, scalePercent(36.5, 37));
  },
});

// clock
animationScripts.push({
  start: 39,
  end: 46,
  func: () => {
    // 1, -0.1625, 0.1
    // camera.lookAt(0.25, -0.1625, -5);
    // camera.position.set(1.05, -0.12, 0.2);

    laX = lerp(1.45, 0.25, scalePercent(39, 46));
    laY = lerp(-2.5, -0.1625, scalePercent(39, 46));
    laZ = lerp(0, -5, scalePercent(39, 46));

    camera.position.x = lerp(1.2, 1.05, scalePercent(39, 46));
    camera.position.y = lerp(0, -0.12, scalePercent(39, 46));
    camera.position.z = lerp(0.25, 0.2, scalePercent(39, 46));

    camera.lookAt(laX, laY, laZ);

    sec3.style.opacity = 0;
    sec4.style.opacity = lerp(1, 0, scalePercent(39, 41));
    sec5.style.opacity = lerp(0, 1, scalePercent(45.5, 46));
  },
});

// large speakers
animationScripts.push({
  start: 48,
  end: 55,
  func: () => {
    // -1.375, 0.22, 0.25
    // camera.lookAt(-3.6, -0.25, -4);
    // camera.position.set(-1, 0.3, 1.05);

    laX = lerp(0.25, -3.6, scalePercent(48, 55));
    laY = lerp(-0.1625, -0.25, scalePercent(48, 55));
    laZ = lerp(-5, -4, scalePercent(48, 55));

    camera.position.x = lerp(1.05, -1, scalePercent(48, 55));
    camera.position.y = lerp(-0.12, 0.3, scalePercent(48, 55));
    camera.position.z = lerp(0.2, 1.05, scalePercent(48, 55));

    camera.lookAt(laX, laY, laZ);

    sec4.style.opacity = 0;
    sec5.style.opacity = lerp(1, 0, scalePercent(48, 50));
    sec6.style.opacity = lerp(0, 1, scalePercent(54.5, 55));
  },
});

// tp 1
animationScripts.push({
  start: 57,
  end: 64,
  func: () => {
    // -0.575, -0.042, 0.25
    // camera.lookAt(-0.68, -0.01, 0.25);
    // camera.position.set(-0.68, -0.01, 0.48);

    laX = lerp(-3.6, -0.68, scalePercent(57, 64));
    laY = lerp(-0.25, -0.01, scalePercent(57, 64));
    laZ = lerp(-4, 0.25, scalePercent(57, 64));

    camera.position.x = lerp(-1, -0.68, scalePercent(57, 64));
    camera.position.y = lerp(0.3, -0.01, scalePercent(57, 64));
    camera.position.z = lerp(1.05, 0.48, scalePercent(57, 64));

    camera.lookAt(laX, laY, laZ);

    sec5.style.opacity = 0;
    sec6.style.opacity = lerp(1, 0, scalePercent(57, 59));
    sec7.style.opacity = lerp(0, 1, scalePercent(63.5, 64));
  },
});

// radio
animationScripts.push({
  start: 66,
  end: 73,
  func: () => {
    // -0.25, -0.12, 0.25
    // camera.lookAt(-0.25, -0.08, 0.25);
    // camera.position.set(-0.25, -0.08, 0.37);

    laX = lerp(-0.68, -0.25, scalePercent(66, 73));
    laY = lerp(-0.01, -0.08, scalePercent(66, 73));
    laZ = lerp(0.25, -0.25, scalePercent(66, 73));

    camera.position.x = lerp(-0.68, -0.25, scalePercent(66, 73));
    camera.position.y = lerp(-0.01, -0.08, scalePercent(66, 73));
    camera.position.z = lerp(0.48, 0.37, scalePercent(66, 73));

    camera.lookAt(laX, laY, laZ);

    sec6.style.opacity = 0;
    sec7.style.opacity = lerp(1, 0, scalePercent(66, 68));
    sec8.style.opacity = lerp(0, 1, scalePercent(72.5, 73));
  },
});

// razor
animationScripts.push({
  start: 75,
  end: 82,
  func: () => {
    // 0.575, 0.348, 0.1
    // camera.lookAt(0.625, 0.348, 0.1);
    // camera.position.set(0.57, 0.37, 0.21);

    laX = lerp(-0.25, 0.625, scalePercent(75, 82));
    laY = lerp(-0.08, 0.348, scalePercent(75, 82));
    laZ = lerp(-0.25, 0.1, scalePercent(75, 82));

    camera.position.x = lerp(-0.25, 0.57, scalePercent(75, 82));
    camera.position.y = lerp(-0.08, 0.37, scalePercent(75, 82));
    camera.position.z = lerp(0.37, 0.21, scalePercent(75, 82));

    camera.lookAt(laX, laY, laZ);

    sec7.style.opacity = 0;
    sec8.style.opacity = lerp(1, 0, scalePercent(75, 77));
    sec9.style.opacity = lerp(0, 1, scalePercent(81.5, 82));
  },
});

// coffee grinder
animationScripts.push({
  start: 84,
  end: 91,
  func: () => {
    // -0.75, 0.755, 0.1
    // camera.lookAt(-0.77, 0.82, 0.1);
    // camera.position.set(-0.72, 0.93, 0.22);

    laX = lerp(0.625, -0.77, scalePercent(84, 91));
    laY = lerp(0.348, 0.86, scalePercent(84, 91));
    laZ = lerp(0.1, 0.1, scalePercent(84, 91));

    camera.position.x = lerp(0.57, -0.72, scalePercent(84, 91));
    camera.position.y = lerp(0.37, 0.95, scalePercent(84, 91));
    camera.position.z = lerp(0.21, 0.2, scalePercent(84, 91));

    camera.lookAt(laX, laY, laZ);

    sec8.style.opacity = 0;
    sec9.style.opacity = lerp(1, 0, scalePercent(84, 86));
    sec10.style.opacity = lerp(0, 1, scalePercent(90.5, 91));
  },
});

// shelf
animationScripts.push({
  start: 93,
  end: 100,
  func: () => {
    // camera.position.set(0, 0, 3);
    // camera.lookAt(0, 0, 0);

    laX = lerp(-0.77, -0.075, scalePercent(93, 100));
    laY = lerp(0.82, 0, scalePercent(93, 100));
    laZ = lerp(0.1, 0, scalePercent(93, 100));

    camera.position.x = lerp(-0.72, -0.075, scalePercent(93, 100));
    camera.position.y = lerp(0.93, 0, scalePercent(93, 100));
    camera.position.z = lerp(0.22, 3, scalePercent(93, 100));

    camera.lookAt(laX, laY, laZ);

    sec9.style.opacity = 0;
    sec10.style.opacity = lerp(1, 0, scalePercent(93, 95));
    sec11.style.opacity = lerp(0, 1, scalePercent(98, 100));
  },
});

animationScripts.push({
  start: 100,
  end: 101,
  func: () => {
    sec10.style.opacity = 0;
  },
});

function playScrollAnimations() {
  animationScripts.forEach((a) => {
    if (scrollPercent >= a.start && scrollPercent < a.end) {
      a.func();
    }
  });
}

let scrollPercent = 0;

document.body.onscroll = () => {
  //calculate the current scroll progress as a percentage
  scrollPercent =
    ((document.documentElement.scrollTop || document.body.scrollTop) /
      ((document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight)) *
    100;
};

function animate() {
  requestAnimationFrame(animate);
  playScrollAnimations();
  render();
}

function render() {
  renderer.render(scene, camera);
}

window.scrollTo({ top: 0, behavior: "smooth" });
animate();
