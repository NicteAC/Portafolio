<template>
  <v-container
    id="contact"
    class="pa-0 grey lighten-3 flex-wrap align-start fill-height"
    fluid
    tag="section"
  >
    <iframe
      allowfullscreen
      frameborder="0"
      height="500"
      src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=es&amp;q=%C3%B1u%C3%B1oa.%20chile+(Mi%20ciudad)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      style="border: 0"
      width="100%"
    />

    <v-row class="ma-0" justify="center">
      <v-col cols="12" md="4">
        <h1 class="display-1 mb-8 font-weight-bold">
          Informacion de Contacto:
        </h1>

        <div class="mb-8">
          Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque
          nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet
          risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.
        </div>

        <div class="mb-4"><strong>Email</strong> carola.aliaga@gmail.com</div>

        <div class="mb-4">
          <strong>LinkedIn</strong> https://www.linkedin.com/in/carola-aliaga/
        </div>

        <div class="mb-4"><strong>Móvil</strong> +56961635279</div>
      </v-col>

      <v-col cols="12" md="5">
        <v-form>
          <v-row class="mb-6">
            <v-col cols="12" md="6">
              <v-sheet>
                <v-text-field flat hide-details label="Nombre" solo />
              </v-sheet>
            </v-col>

            <v-col cols="12" md="6">
              <v-sheet>
                <v-text-field flat hide-details label="Correo" solo />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-sheet>
                <v-text-field flat hide-details label="Asunto" solo />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-sheet>
                <v-textarea flat hide-details label="Mensaje" solo />
              </v-sheet>
            </v-col>
          </v-row>

          <v-btn
            :block="$vuetify.breakpoint.smAndDown"
            class="white--text"
            color="black"
            x-large
          >
            Enviar mensaje
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
};
</script>
