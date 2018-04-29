<template>
  <div id="container">
    <form id="input-form">
      <div class="form-group row">
        <label for="rho-input">rho</label>
        <input
          id="rho-input"
          v-model="r"
          class="form-control"
          type="number">
      </div>
      <div class="form-group row">
        <label for="sigma-input">sigma</label>
        <input
          id="sigma-input"
          v-model="s"
          class="form-control"
          type="number">
      </div>
      <div class="form-group row">
        <label for="beta-input">beta</label>
        <input
          id="beta-input"
          v-model="b"
          class="form-control"
          type="number">
      </div>
    </form>
    <visualize
      :beta="b"
      :rho="r"
      :sigma="s" />
  </div>
</template>

<script>
import Visualize from './Visualize';

export default {
  name: 'Interactive',
  components: { Visualize },
  data() {
    return {
      r: 28,
      s: 10,
      b: 8 / 3,
    };
  },
};
</script>

<style scoped>
  #container {
    position: relative;
  }

  #input-form {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 100;
    padding: 20px;
    color: #FFF;
  }
</style>
