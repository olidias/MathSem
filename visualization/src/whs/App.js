/* eslint-disable */
// Define the Whitestorm Modules here
import * as WHS from 'whs';
import * as THREE from 'three';
import * as Lorenz from './components/lorenz.js';

export default (element) => {
  const app = new WHS.App([
    new WHS.ElementModule({
      container: element
    }),
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

  const lorenzPoints = Lorenz.Calculate();
  lorenzPoints.forEach(val => {
    new WHS.Sphere({
      geometry:{
        radius: 0.1,
        widthSegments: 5,
        heightSegments: 5
      },

      material: new THREE.MeshPhongMaterial({
       color: 0xF2F2F2
     }),

      position: val
    }).addTo(app);
  });



  new WHS.AmbientLight({
    light: {
      intensity: 0.4
    }
  }).addTo(app);

// Start the app
  app.start();
};
