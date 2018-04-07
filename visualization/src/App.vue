<style src="./vue/assets/style/main.sass" lang="sass"></style>

<template>
  <div id="app">
    <nav>
      <NavBar />
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import NavBar from './vue/components/NavBar';

export default {
  name: 'App',
  components: { NavBar },
};
</script>

<style>
</style>
