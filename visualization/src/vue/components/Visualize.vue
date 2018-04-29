<template>
  <div>
    <span>
      rho: {{ rho }}, sigma: {{ sigma }}, beta: {{ beta }}
    </span>
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
    console.log(this);
    app.render(document.getElementById('WHS-Playground'), this.rho, this.sigma, this.beta);
  },

  watch: {
    rho(newer) {
      console.log(this);
      console.log("Newer" + newer);
      app.rerender(this.rho, this.sigma, this.beta);
    },
    sigma(newer) {
      console.log(this);
      console.log("Newer" + newer);
      app.rerender(this.rho, this.sigma, this.beta);
    },
    beta(newer) {
      console.log(this);
      console.log("Newer" + newer);
      app.rerender(this.rho, this.sigma, this.beta);
    },
  }
};
</script>

<style scoped>
  canvas {
    width: 100%;
    height: 500px;
  }
</style>
