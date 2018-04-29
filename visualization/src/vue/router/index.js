import Vue from 'vue';
import Router from 'vue-router';
import Visualization from '@/vue/components/Visualize';
import Explanation from '@/vue/components/Explanation';
import About from '@/vue/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Visualisierung',
      component: Visualization,
      props: { rho: 10, sigma: 10, beta: 8 / 3, disabled: false },
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
