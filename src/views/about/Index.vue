<template>
  <v-container id="about" class="pa-0" fluid tag="section">
    <v-row class="ma-0" no-gutters>
      <v-col cols="12" md="6">
        <v-img src="./img.jpg"/>
      </v-col>

      <v-col
        class="d-block d-md-flex align-center grey lighten-3 pa-6"
        cols="12"
        md="6"
      >
        <v-responsive class="mx-auto px-3 px-md-12" max-width="700">
          <h1
            class="mb-6"
            :class="$vuetify.breakpoint.md ? 'display-2' : 'display-1'"
          >Hola! mi nombre es Carolina. <br>
          Y esta es mi historia 
          </h1>

          <p>
            Desde muy pequeña siempre senti hambre de conocimiento y la necesidad de como se hacian y funcionaban las cosas. Ya de grande me fui mas por el lado artistico y la creacion lo que me llevo a estudiar "Diseño de Vestuario", pero esto no fue suficiente. Con el pasar de los años y las vueltas de la vida llegue al rubro TI de las telecomunicaciones y me encanto.
          </p>

          <p>
            Aunque me gustaba lo que hacia sentia que algo faltaba, el 2020 gracias a un beca de Talento Digital me gane una beca para un bootcamp de desarrollo FrontEnd y me enamore! descubri un mundo en donde podia crear y diseñar. Esto asociado al mundo TI. Pude aprender Html, Css, Sass, Bootstrap, Javascript, Vue.js, Vuetify, Nuxt y mas! 
          </p>
          <p>
            En este camino conoci a mi Mentora Rosa (o como le digo de cariño "Jefa Mentora") ella me enseño UX y dio las bases del UI, en sesiones de mentoria donde tome un proyecto para hacer el research. Con todo lo que he aprendido estoy en el inicio de un camino que me encanta y llena de felicidad.
          </p>
          <p>
            ¿Donde nace Nicte? muchos me preguntan que significa nicte. Para quienes no saben Nicte viene de NYX (NO, NO ES LA MARCA DE MAQUILLAJE), que es la diosa griega de la noche y una hija de Caos. Como siempre estuve en constante movimiento y soy mas nocturna me senti identificada y use este nombre para mis diseños de vestuario. Como es un nombre que he usado por ya varios años lo converti en parte de mi marca personal.
          </p>
          <h3>Te invito a ver mi portafolio!</h3><br>

          <div class="signature">Nicte</div>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="sass">
.signature
  font-family: 'Sacramento', cursive !important
  font-size: 2.5rem
  font-style: italic
</style>
