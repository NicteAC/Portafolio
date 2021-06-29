import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBG92suGUMo8TshcQ66nBNd3APYvAJ0eTU",
  authDomain: "nicte-ac.firebaseapp.com",
  projectId: "nicte-ac",
  storageBucket: "nicte-ac.appspot.com",
  messagingSenderId: "1062476650396",
  appId: "1:1062476650396:web:cc85f7d9873d4250459a59"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
