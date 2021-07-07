import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import firebase from 'firebase'

Vue.use(Router)

const routes = [
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
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      login: true,
    },
    component: () => import('@/views/admin/Admin.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  const auth = to.meta.auth;
  if (auth && user) {
    next();
  } else if (auth && !user) {
    alert("Usted no tiene permisos para entrar aquí");
    next("/");
  } else {
    next();
  }
});

export default router

