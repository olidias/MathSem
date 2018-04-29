/* eslint-disable */
// Define the Whitestorm Modules here
import * as WHS from 'whs';
import * as THREE from 'three';

export class WHSApp {

  constructor() {
    this.app = null;
    this.lorenzPoints = [];
    this.viewPoints = [];
    this.running = false;
  }

  render(element, rho = 28, sigma = 10, beta = 8 / 3) {

    // Prepare stage
    this.app = new WHS.App([
      new WHS.ElementModule(element),
      new WHS.SceneModule(),
      new WHS.CameraModule({
        position: {
          y: 10,
          z: 50
        }
      }),
      new WHS.RenderingModule({
        bgColor: 0x162129,

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
          radius: 0.1,
          widthSegments: 5,
          heightSegments: 5
        },

        material: new THREE.MeshPhongMaterial({
          color: 0xF2F2F2
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

    // Start the app
    this.app.start();
    this.running = true;
  };

  rerender(rho, sigma, beta) {
    this.lorenzPoints = this.calculate(rho, sigma, beta);
    for (let i = 0; i < this.viewPoints.length; i++) {
      this.viewPoints[i].position = this.lorenzPoints[i];
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

  calculate(rho = 10, sigma = 10, beta = 8 / 3) {
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
