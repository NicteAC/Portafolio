import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";
import pathify from 'vuex-pathify'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
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
    }  
  },
  plugins: [pathify.plugin],
})
