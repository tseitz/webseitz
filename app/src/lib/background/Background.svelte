<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

	let canvasEl;
	let scene;
	let camera;
	let renderer;
	let torus;
	let moon;
	let tegan;

	onMount(() => {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		renderer = new THREE.WebGLRenderer({ canvas: canvasEl });

		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.position.z = 30;

		const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
		const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
		torus = new THREE.Mesh(geometry, material);

		scene.add(torus);

		const pointLight = new THREE.PointLight(0xf3e7d3);
		pointLight.position.set(20, 20, 20);

		const ambientLight = new THREE.AmbientLight(0xf3e7d3);

		scene.add(pointLight, ambientLight);

		// const lightHelper = new THREE.PointLightHelper(pointLight);
		// const gridHelper = new THREE.GridHelper(200, 50);
		// scene.add(lightHelper, gridHelper);

		const controls = new OrbitControls(camera, renderer.domElement);

		Array(200).fill().forEach(addStar);

		const spaceTexture = new THREE.TextureLoader().load('src/lib/images/space.jpeg');

		scene.background = spaceTexture;

		animate();

		const teganTexture = new THREE.TextureLoader().load('src/lib/images/profile-pic2.jpg');
		tegan = new THREE.Mesh(
			new THREE.BoxGeometry(3, 3, 3),
			new THREE.MeshBasicMaterial({ map: teganTexture })
		);
		scene.add(tegan);

		const moonTexture = new THREE.TextureLoader().load('src/lib/images/moon.jpg');
		const normalTexture = new THREE.TextureLoader().load('src/lib/images/normal.jpg');
		moon = new THREE.Mesh(
			new THREE.SphereGeometry(3, 32, 32),
			new THREE.MeshBasicMaterial({ map: moonTexture })
		);
		moon.position.z = 30;
		moon.position.x = -10;
		scene.add(moon);

		document.body.onscroll = moveCamera;
	});

	function animate() {
		requestAnimationFrame(animate);
		torus.rotation.x += 0.01;
		torus.rotation.y += 0.005;
		torus.rotation.z += 0.01;
		renderer.render(scene, camera);
	}

	function addStar() {
		const geometry = new THREE.SphereGeometry(0.25, 24, 24);
		const material = new THREE.MeshStandardMaterial({ color: 0xf3e7d3 });
		const star = new THREE.Mesh(geometry, material);

		const [x, y, z] = Array(3)
			.fill()
			.map(() => THREE.MathUtils.randFloatSpread(100));

		star.position.set(x, y, z);
		scene.add(star);
	}

	function moveCamera() {
		const t = document.body.getBoundingClientRect().top;
		moon.rotation.x += 0.05;
		moon.rotation.y += 0.075;
		moon.rotation.z += 0.05;

		tegan.rotation.y += 0.01;
		tegan.rotation.z += 0.01;

		camera.position.z = t * -0.01;
		camera.position.x = t * -0.0002;
		camera.position.y = t * -0.0002;
	}
</script>

<canvas bind:this={canvasEl} id="bg" class="fixed top-0 left-0" />