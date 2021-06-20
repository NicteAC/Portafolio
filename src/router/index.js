import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: () => import('@/views/home/Index.vue'),
    },
    {
      path: '/about',
      name: 'Sobre mi',
      component: () => import('@/views/about/Index.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portafolio',
      component: () => import('@/views/portfolio/Index.vue'),
    },
    {
      path: '/contact',
      name: 'Contacto',
      component: () => import('@/views/contact/Index.vue'),
    },
  ],
})
