import React, { useEffect } from "react";
import "./myProjects.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const MyProjects = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg")!,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    renderer.render(scene, camera);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff6347,
    });

    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(20, 20, 20);

    const ambientLight = new THREE.AmbientLight(0xffffff);

    scene.add(pointLight, ambientLight);

    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper();
    scene.add(lightHelper, gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      // torus.rotation.x += 0.01;
      // torus.rotation.y += 0.005;
      // torus.rotation.z += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <>
      <div id="info">Description</div>

      <canvas id="bg"></canvas>
    </>
  );
};
export default MyProjects;
