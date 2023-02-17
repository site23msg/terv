const canvas = document.getElementById('earth');

const renderer = new THREE.WebGLRenderer({ canvas });

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(6, 32, 32);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/texture/solar.jpg');

const material = new THREE.MeshPhongMaterial({ map: texture });

const globe = new THREE.Mesh(geometry, material);

scene.add(globe);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();