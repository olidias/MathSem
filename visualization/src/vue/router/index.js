import Visualization from '@/vue/components/Visualize';
import Explanation from '@/vue/components/Explanation';
import About from '@/vue/components/About';

export default [
  {
    path: '/',
    name: 'Visualisierung',
    component: Visualization,
    props: { rho: 28, sigma: 10, beta: 8 / 3, disabled: false },
  },
  {
    path: '/chaotic',
    name: 'Visualisierung',
    component: Visualization,
    props: { rho: 22, sigma: 10, beta: 8 / 3, disabled: false },
  },
  {
    path: '/stable',
    name: 'Visualisierung',
    component: Visualization,
    props: { rho: 24.7, sigma: 10, beta: 8 / 3, disabled: false },
  },
  /*{
    path: '/explanation',
    name: 'Beschreibung',
    component: Explanation,
  },*/
  {
    path: '/about',
    name: 'Über dieses Handout',
    component: About,
  },
];
