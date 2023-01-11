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
            <div className={"mainpage"}>
                <div className={"canvaswrapper"}>
                    <canvas id="canvas" className={"glumbocanvas"}/>
                    <div>
                        <h1 className={"bigtext"}>
                            THE WORLD&apos;S FIRST AND ONLY EDIBLE CRYPTO.
                        </h1>
                        <h2 className={"smalltext"}>
                            world&apos;s first choking hazard small parts warning. your toddler will LOVE crypto
                            exchange and swallowing coin
                        </h2>
                    </div>
                </div>
                <div className={"contentwrapper"}>
                    <h2 className={"bigh2"}>
                        Easier than ever
                    </h2>
                    We have made it easier than ever to choke on digital coins. No longer do you have to get physical
                    coins to choke on them and die and go to the hostpital. We put the &quot;innovation&quot; in going
                    to the hospital/dying
                    <br/>
                    <h2 className={"bigh2"}>
                        Hungry? Umm, not for long. Smile
                    </h2>
                    <div>
                        We made food reimagined. Imagine a place where  some innovative food. Sometimes tho you will choke and then you die LMAO. Jk
                        this was all just a joke LMFAO. Umm but not the part about innovation teehee. We put the &quot;innovation&quot; in &quot;meal innovation&quot;
                    </div>
                    <h2 className={"bigh2"}>Actually tho</h2>
                    <div>
                        You never take me seriously and I hate my job and i am so sad and have no money and am broke and have no money and am bald. Buy our coins please it will give me my hair back
                    </div>
                </div>
            </div>
        )
    }
}

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default App;
