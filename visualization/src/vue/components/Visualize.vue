<template>
  <div id="WHS-Playground" />
</template>

<script>
import * as WHS from '../../whs/App';

const app = new WHS.WHSApp();

/* eslint-disable */
export default {
  name: 'Visualize',
  mounted: () => {
    app.init(document.getElementById('WHS-Playground'));
    app.render();
  },
};
</script>

<style scoped>
  canvas {
    width: 100%;
    height: 500px;
  }
</style>
