import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/vue/components/HelloWorld';
import Visualize from '@/vue/components/Visualize';
import Explanation from '@/vue/components/Explanation';

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
    },
    {
      path: '/explanation',
      name: 'Beschreibung',
      component: Explanation,
    },
  ],
});
