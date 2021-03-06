import Visualization from '@/vue/components/Visualize';
import Explanation2 from '@/vue/components/Explanation2';
import About from '@/vue/components/About';
// import Mandelbrot from '@/vue/components/Mandelbrot';

export default [
  {
    path: '/',
    name: 'Visualisierung',
    component: Visualization,
    props: { rho: 28, sigma: 10, beta: 8 / 3, disabled: false },
  },
  {
    path: '/chaotic',
    name: 'Chaotisches Verhalten',
    component: Visualization,
    props: { rho: 22, sigma: 10, beta: 8 / 3, disabled: false },
  },
  {
    path: '/stable',
    name: 'Stabilies Verhalten',
    component: Visualization,
    props: { rho: 24.7, sigma: 10, beta: 8 / 3, disabled: false },
  },
  {
    path: '/explanation',
    name: 'Vortragstext',
    component: Explanation2,
  },
  /* {
    path: '/mandelbrot',
    name: 'Mandelbrot Gif',
    component: Mandelbrot,
  }, */
  {
    path: '/about',
    name: 'Über dieses Handout',
    component: About,
  },
];
