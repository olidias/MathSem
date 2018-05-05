<template>
  <div class="WHS-Container">
    <form id="input-form">
      <div class="form-group row">
        <label for="rho-input">rho</label>
        <input
          id="rho-input"
          v-model="rho"
          :readonly="disabled"
          :class="{'form-control-plaintext': disabled, 'form-control': !disabled}"
          type="number">
      </div>
      <div class="form-group row">
        <label for="sigma-input">sigma</label>
        <input
          id="sigma-input"
          v-model="sigma"
          :readonly="disabled"
          :class="{'form-control-plaintext': disabled, 'form-control': !disabled}"
          type="number">
      </div>
      <div class="form-group row">
        <label for="beta-input">beta</label>
        <input
          id="beta-input"
          v-model="beta"
          :readonly="disabled"
          :class="{'form-control-plaintext': disabled, 'form-control': !disabled}"
          type="number">
      </div>
    </form>
    <div id="WHS-Playground"/>
    <div id="caption">
      <p>
        <label id="x-axis" style="color:red;">X-Achse:</label> <label> Durchschn. Windgeschwindigkeit</label>
      </p>
      <p>
        <label id="y-axis" style="color:green;">Y-Achse:</label> <label>Temperatur</label>
      </p>
      <p>
        <label id="z-axis" style="color:blue;">Z-Achse:</label> <label>Temperaturgradient</label>
      </p>
    </div>
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
    disabled: {
      type: Boolean,
      default: true,
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
    position: relative;
  }

  #input-form {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 20px;
    color: #FFF;
  }

  .form-control-plaintext {
    color: white;
  }
  #caption{
    position: absolute;
    margin: -11rem 0 0 1.5rem;
    width: 90%;
    color: white;
  }

  @media (max-width: 650px){
    input {
      max-width: 5rem;
      margin-left: 1em;
    }
    .form-group{
      width: 100%
    }
    #caption{
      display:none;
    }
  }
</style>
