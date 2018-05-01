/* eslint-disable */
// Define the Whitestorm Modules here
import * as WHS from 'whs';
import * as THREE from 'three';
import {CameraComponent as camera} from "whs";

export class WHSApp {

  constructor() {
    this.app = null;
    this.lorenzPoints = [];
    this.viewPoints = [];
    this.running = false;
  }

  render(element, rho = 28, sigma = 10, beta = 8 / 3) {
    // Prepare stage
    let scene = new WHS.SceneModule();

    this.app = new WHS.App([
      new WHS.ElementModule(element),
      scene,
      new WHS.CameraModule({
        position: {
          y: 10,
          z: 50
        }
      }),
      //0xCDCDCD
      new WHS.RenderingModule({
        bgColor:  0x4A555C,

        renderer: {
          antialias: true,
          shadowmap: {
            type: THREE.PCFSoftShadowMap
          }
        }
      }, {shadow: true}),
      new WHS.OrbitControlsModule(),
      new WHS.ResizeModule()
    ]);

    // Calculate Positions
    this.lorenzPoints = this.calculate(rho, sigma, beta);

    // Create Visual Element for each position
    for (let i = 0; i < this.lorenzPoints.length; i++) {
      let sphere = new WHS.Sphere({
        geometry: {
          radius: 0.2,
          widthSegments: 5,
          heightSegments: 5
        },

        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color((this.lorenzPoints[i].x+10)/20, (this.lorenzPoints[i].y+10)/20, (this.lorenzPoints[i].z)/30)
        }),


        position: this.lorenzPoints[i],
      });

      this.viewPoints[i] = sphere;
      this.viewPoints[i].addTo(this.app);
    }

    // Create Light
    new WHS.AmbientLight({
      light: {
        intensity: 0.4
      }
    }).addTo(this.app);

    // Display Coordinates

    const axis = new THREE.AxisHelper(30);
    this.app.get('scene').add(axis);


    // Start the app
    this.app.start();
    this.running = true;
  };

  rerender(rho, sigma, beta) {
    this.lorenzPoints = this.calculate(rho, sigma, beta);
    for (let i = 0; i < this.viewPoints.length; i++) {
      this.viewPoints[i].position = this.lorenzPoints[i];
      this.viewPoints[i].material.color.r = (this.lorenzPoints[i].x+10)/20;
      this.viewPoints[i].material.color.g = (this.lorenzPoints[i].y+10)/20;
      this.viewPoints[i].material.color.b = this.lorenzPoints[i].z/30;
    }

  }

  destruct() {
    if (this.running) {
      this.app.render = false;
      this.app.stop();
      this.app.disposeModules();
      this.app = null;
    }
  }

  calculate(rho = 28, sigma = 10, beta = 8 / 3) {
    const it = 2500;

    let x = 0.1;
    let y = 0.1;
    let z = 0.1;
    const delta = 0.01;

    const arr = [];
    arr.push(new THREE.Vector3(x, y, z));

    for (let i = 0; i < it; i += 1) {
      /* eslint-disable no-mixed-operators */
      x = arr[i].x + ((sigma * y) - (sigma * x)) * delta;
      y = arr[i].y + ((-x * z) + (rho * x) - y) * delta;
      z = arr[i].z + ((x * y) - (beta * z)) * delta;
      arr.push(new THREE.Vector3(x, y, z));
    }

    return arr;
  };
}
