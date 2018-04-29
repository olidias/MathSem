import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/vue/components/HelloWorld';
import Visualize from '@/vue/components/Visualize';
import Explanation from '@/vue/components/Explanation';
import About from '@/vue/components/About';

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
      name: 'Visualisierung',
      component: Visualize,
      props: { rho: 10, sigma: 10, beta: 8 / 3 },
    },
    {
      path: '/explanation',
      name: 'Beschreibung',
      component: Explanation,
    },
    {
      path: '/about',
      name: 'Über dieses Handout',
      component: About,
    },
  ],
});
