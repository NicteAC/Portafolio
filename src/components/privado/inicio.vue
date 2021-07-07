<template>
  
  <div class="home">
    <Navbar />
    <h1>Sistema Inventario Tienda Otto Klaus</h1>
    <v-container class="container">
      <v-row align-center>
        <v-col cols="12">         
        </v-col>
        <v-col >
          <v-btn @click="login" elevation="17" id="boton">Ingresar</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "inicio",
  mounted() {},

  methods: {
    ...mapActions(["login"]),
  },
};
</script>
<style>
.container {
    width: 200px;
    height: 450px;
    overflow: hidden;
    margin: 5px;
    position: relative;
}
#fondo {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
}
#boton {
  position: absolute;
  z-index: 1;
  left:45%;
  top:50%;
  color:white;
  background-color:blueviolet;
}
</style>
