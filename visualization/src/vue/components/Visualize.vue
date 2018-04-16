<template>
  <div id="WHS-Playground" />
</template>

<script>
import App from '../../whs/App';

export default {
  name: 'Visualize',
  mounted: () => App(document.getElementById('WHS-Playground')),
};
</script>

<style scoped>
  canvas {
    width: 100%;
    height: 500px;
  }
</style>
