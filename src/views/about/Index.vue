<template>
  <v-container id="about" class="pa-0" fluid tag="section">
    <v-row class="ma-0" no-gutters>
      <v-col cols="12" md="6">
        <v-img src="./img.jpg"  max-height="500"/>
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
          >Mi historia
            <br />
           
          </h1><br />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            eligendi culpa cum voluptas dolore accusamus et non. Nulla hic minus
            non ullam dolore itaque, quo expedita cum! Modi, inventore ipsum?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ratione debitis reprehenderit, repudiandae itaque vel explicabo
            ducimus dolore iste, alias cumque, provident amet beatae quibusdam
            possimus voluptate rerum qui at.
          </p>

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
