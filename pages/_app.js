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
            antialias: false,
        });

        renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        const geometry = new THREE.CylinderGeometry(1, 1, 0.3, 32);
        const texture = new THREE.TextureLoader().load('/images/coin.png');
        const topMaterial = new THREE.MeshBasicMaterial({map: texture});
        const sideMaterial = new THREE.MeshBasicMaterial({color: 0x1b1925});
        const bottomMaterial = new THREE.MeshBasicMaterial({map: texture});
        const materials = [
            sideMaterial,
            topMaterial,
            bottomMaterial
        ]
        const cylinder = new THREE.Mesh(geometry, materials);
        scene.add(cylinder);

        camera.position.z = 2;

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
            <div className={"canvaswrapper"}>
                <canvas id="canvas" className={"glumbocanvas"} />
                <div>
                <h1 className={"bigtext"}>
                    THE WORLD'S FIRST AND ONLY EDIBLE CRYPTO.
                </h1>
                <h2 className={"smalltext"}>
                    world's first choking hazard small parts warning. your toddler will LOVE crypto exchange and trading.
                </h2>
                </div>
            </div>
        )
    }
}

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default App;
