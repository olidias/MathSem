<style src="./vue/assets/style/main.sass" lang="sass"></style>

<template>
  <div id="app">
    <nav>
      <NavBar />
    </nav>
    <main>
      <transition name="page-fade" mode="out-in">
        <router-view/>
      </transition>
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
  .page-fade-enter-active, .page-fade-leave-active {
    transition: opacity .3s ease;
  }
  .page-fade-enter, .page-fade-leave-to {
    opacity: 0;
  }
</style>
