// import * as THREE from 'three';
// import './style.css'
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// Setup

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


    // create a new renderer by instating the canvas element in our HTML // file
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    });

//setupCounter(document.querySelector('#counter'))

const geometry = new THREE.BoxGeometry(10, 10, 10);

    const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );

    const cube = new THREE.Mesh( geometry, material );

const ico = new THREE.IcosahedronGeometry(10);
    const icoMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const icoMesh = new THREE.Mesh(ico, icoMaterial);

    scene.add(icoMesh);

    icoMesh.position.z= -15;
    icoMesh.position.x= 15;

// Lights

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(0, -10, 10);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.position.set(25, -15, -400);

    scene.add(pointLight);
    scene.add(ambientLight);

// Helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
    scene.add(lightHelper)

const gridHelper = new THREE.GridHelper(200,50);
    scene.add(gridHelper)

// Orbit Control
const controls = new OrbitControls(camera, renderer.domElement)

// Background
const spaceTexture = new THREE.TextureLoader().load('images/fireBlu.jpg')
scene.background = spaceTexture;

function animate() {
    requestAnimationFrame( animate );
    // slowly rotate the cube:
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // rotate the icosahedron a little faster in the opposite direction:
    icoMesh.rotation.z += -0.03
    icoMesh.rotation.y += -0.03
    // ALLOWS YOUR ORBIT CONTROLS TO UPDATE LIVE IN REAL-TIME:
    controls.update()
    renderer.render( scene, camera );
}


scene.add( cube );

cube.position.z = -15;
cube.position.x = -15;
cube.rotation.x = 2;
cube.rotation.y = .5;

animate();

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);



/*document.querySelector('#app').innerHTML = `
  <div>
   <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`*/



