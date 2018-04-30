<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <a
      class="navbar-brand"
      href="/#/">Lorenz Attractor</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarNav"
      class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li
          v-for="route in routes"
          :key="route.path">
          <router-link
            :to="route.path"
            class="nav-link">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import routeList from '../router';

export default {
  name: 'NavBar',
  data: () => ({
    routes: routeList,
  }),
};
</script>

<style scoped>

</style>
