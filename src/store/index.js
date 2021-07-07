import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";
import pathify from 'vuex-pathify'
import VueRouter from 'vue-router'
import  createPersistedState  from  'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(VueRouter)
export default new Vuex.Store({
   state: {
     mensajes:[],
    drawer: false,
    links: [
      'Inicio',
      'Sobre mi',
      'Portafolio',
      'Contacto',
    ],
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    GET_MESSAGE(state, payload) {
      state.Mensajes = payload;
    },
  },
  actions: {
    //agregar mensajes
    addForm(state, formulario) {
      const { nombre, correo, asunto, mensaje } = formulario
      if (nombre.length > 1 && correo.length > 1 && asunto.length > 1 && mensaje.length > 2) {
        firebase
          .firestore()
          .collection("mensajes")
          .add(formulario);
      }
    },
    //login admin
    
    //logout admin

    //obtener mensajes
    get_Message({ commit }) {
      firebase
        .firestore()
        .collection("mensajes")
        .onSnapshot((docs) => {
          const mensajes = [];
          docs.forEach((doc) => {
            mensajes.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          commit("GET_MESSAGE", mensajes);
        });
    },
   
  },
  plugins: [pathify.plugin],
  plugins: [createPersistedState()]
})
