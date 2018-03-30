import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/vue/components/HelloWorld';
import Visualize from '@/vue/components/Visualize';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/vue',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'Visualize',
      component: Visualize,
    },
  ],
});
