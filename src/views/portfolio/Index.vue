<template>
  <v-container id="portfolio" class="pt-12 pb-0 px-0" fluid tag="section">
    <headline />
    <Cards /> 
    
  </v-container>
</template>

<script>
export default {
  name: "Portafolio",

  components: {
    Headline: () => import("./components/Headline"),
    Cards: () => import("./components/Cards"),
  },
};
</script>
