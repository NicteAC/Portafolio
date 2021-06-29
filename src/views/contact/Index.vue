<template>
  <v-container
    id="contact"
    class="pa-0 grey lighten-3 flex-wrap align-start fill-height"
    fluid
    tag="section"
  >
    <!-- <iframe
      allowfullscreen
      frameborder="0"
      height="500"
      src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=es&amp;q=%C3%B1u%C3%B1oa.%20chile+(Mi%20ciudad)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      style="border: 0"
      width="100%"
    /> -->

    <v-row class="mt-10" justify="center">
      <v-col cols="12" md="4">
        <h1 class="display-1 mb-8 font-weight-bold">
          Informacion de Contacto:
        </h1>

        <div class="mb-8">
          ¿Te gusto mi trabajo y quieres que realicemos juntos tu proyecto? Acá puedes contactarme!
        </div>

        <div class="mb-4"><strong>Email</strong> <a href="mailto:carola.aliaga@gmail.com">carola.aliaga@gmail.com</a></div>

        <div class="mb-4">
          <strong>LinkedIn</strong> <a href="https://www.linkedin.com/in/carola-aliaga/">https://www.linkedin.com/in/carola-aliaga/</a>
        </div>

        <div class="mb-4"><strong>Github</strong> <a href="https://github.com/NicteAC">https://github.com/NicteAC</a></div>
      </v-col>

      <v-col cols="12" md="5">
        <v-form v-model="valid" lazy-validation>
          <v-row class="mb-6">
            <v-col cols="12" md="6">
              <v-text-field v-model="formulario.nombre" hide-details label="Nombre" solo required/>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="formulario.correo" hide-details label="Correo" solo required />
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="formulario.asunto" hide-details label="Asunto" solo required/>
            </v-col>

            <v-col cols="12">
              <v-textarea v-model="formulario.mensaje" hide-details label="Mensaje" solo required/>
            </v-col>
          </v-row>

          <v-btn @click="addForm(formulario)"
            :block="$vuetify.breakpoint.smAndDown"
            class="primary--text"
            x-large
            elevation="3"
          >
            Enviar mensaje
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Contact",
mounted() {
   
  },
   data: () => ({
    formulario: {
      nombre: "",
      correo: "",
      asunto: "",
      mensaje: "",
    },
  }),
  computed: {
    ...mapState(["mensajes"]),
  },
  methods: {
    ...mapActions(["addForm"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
