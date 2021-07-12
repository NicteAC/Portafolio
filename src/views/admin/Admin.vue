<template>
  <div class="admin">
    <v-simple-table>
      <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Asunto</th>
          <th class="text-left">Nombre</th>
          <th class="text-left">Correo</th>
          <th class="text-left">Mensaje</th>
        </tr>
      </thead>
      <tbody>
    <tr v-for="(mensaje, i) in mensajes" :key="i">
      <td>{{ mensaje.data.asunto }}</td>
          <td>{{ mensaje.data.nombre }}</td>
          <td>{{ mensaje.data.correo }}</td>
          <td>{{ mensaje.data.mensaje }}</td>         
              
    </tr>
    </tbody>
   </template>
  </v-simple-table>
    <v-btn @click="salir" class="primary--text ma-2" elevation="3" x-large
      >salir
    </v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapActions, mapState } from "vuex";
export default {
  name: "Admin",
  mounted() {
    this.get_Message();
  },
  data() {
    return {
      mensaje: {
        asunto: "",
        nombre: "",
        correo: "",
        mensaje: "",
      },
    };
  },
  computed: {
    ...mapState(["mensajes"]),
  },
  methods: {
    ...mapActions(["get_Message", "logout"]),
    salir() {
      this.logout()
    }
    // logout() {
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => {
    //       router.push("login");
    //     });
    //},
  },
};
</script>
