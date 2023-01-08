import '../styles/globals.css'
import * as THREE from "three";
import {Component} from "react";

class App extends Component {

    componentDidMount() {
        const canvas = document.querySelector('#canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: false
        });

        const geometry = new THREE.CylinderGeometry(1, 1, 0.3, 32);
        const texture = new THREE.TextureLoader().load('/images/coin.png');
        const material = new THREE.MeshBasicMaterial({map: texture});
        const cylinder = new THREE.Mesh(geometry, material);
        scene.add(cylinder);

        camera.position.z = 5;

        cylinder.rotation.x = 0.5;
        cylinder.rotation.y = 0.5;
        cylinder.rotation.z = 0.5;
        const animate = function () {
            requestAnimationFrame(animate);

            cylinder.rotation.x += 0.01;
            cylinder.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }

    render() {
        return (
            <div>
                <canvas id="canvas" className={"glumbocanvas"} width={200} height={200}/>
            </div>
        )
    }
}

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default App;
