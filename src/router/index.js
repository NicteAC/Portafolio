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
      path: '/aboutme',
      name: 'Sobre mi',
      component: () => import('@/views/about/Index.vue'),
    },
    {
      path: '/portafolio',
      name: 'Portafolio',
      component: () => import('@/views/portfolio/Index.vue'),
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: () => import('@/views/contact/Index.vue'),
    },
  ],
})
