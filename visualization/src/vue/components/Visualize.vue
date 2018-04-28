<template>
  <div>
    <button @click="move">Click me!</button>
    <div id="WHS-Playground" />
  </div>
</template>

<script>
import * as WHS from '../../whs/App';

const app = new WHS.WHSApp();

/* eslint-disable */
export default {
  name: 'Visualize',
  mounted: () => app.render(document.getElementById('WHS-Playground')),
  methods: {
    move: () => {
      app.viewPoints.forEach(i => {
        i.position.x = 0;
      })
    }
  }
};
</script>

<style scoped>
  canvas {
    width: 100%;
    height: 500px;
  }
</style>
