<template>
  <div class="login">
    <div class="signature">Ingreso Admin</div>
    <v-container
      id="log"
      class="pa-0 ma-0 grey lighten-3 align-center d-block d-md-flexd-block"
      fluid
      tag="section"
    >
      <v-row class="mt-10" justify="center">
        <v-col cols="12" md="6">
          <v-form v-model="valid" lazy-validation>
            <v-row class="mb-6 pa-2">
              <v-col cols="12" md="12">
                <v-text-field v-model="user.email" label="Usuario" solo required />
              </v-col>
            </v-row>
            <v-row class="mb-6 pa-2">
              <v-col cols="12" md="12">
                <v-text-field v-model="user.password" label="Contraseña" solo required />
              </v-col>
            </v-row>
            <v-btn
              @click="logueo"
              class="primary--text ma-2"
              elevation="3"
              x-large
              >Ingresar
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
//import firebase from "firebase";
import { mapActions } from 'vuex';

export default {
  name: "Login",
   data() {
    return{
      user: {
        email:"",
        password:"",
      },
    };
  },
  methods:{
   ...mapActions(['login']),
   logueo(){
    // console.log("entro a ña funcion..",this.user)
     this.login(this.user)
   }
  }
};
</script>
<style lang="sass">
.signature
  font-family: 'Sacramento', cursive !important
  font-size: 3.5rem
  font-style: italic
  text-align: center
</style>
