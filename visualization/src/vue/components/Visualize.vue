<template>
  <div class="WHS-Container">
    <div id="WHS-Playground"/>
  </div>
</template>

<script>
  import * as WHS from '../../whs/App';

  const app = new WHS.WHSApp();

export default {
  name: 'Visualize',
  props: {
    rho: {
      type: Number,
      required: true,
    },
    sigma: {
      type: Number,
      required: true,
    },
    beta: {
      type: Number,
      required: true,
    },
  },

  /* eslint-disable */
  mounted: function() {
    app.render(document.getElementById('WHS-Playground'), this.rho, this.sigma, this.beta);
  },
  beforeDestroy() {
    app.destruct();
  },
  watch: {
    rho() { app.rerender(this.rho, this.sigma, this.beta); },
    sigma() { app.rerender(this.rho, this.sigma, this.beta); },
    beta() { app.rerender(this.rho, this.sigma, this.beta); },
  }
};
</script>

<style scoped>
  .WHS-Container {
    width: 100%;
    height: 75%;
  }
</style>
