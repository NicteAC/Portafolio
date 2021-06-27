<template>
  <v-container id="portfolio" class="pt-12 pb-0 px-0" fluid tag="section">
    <headline />
  
  </v-container>
</template>

<script>
export default {
  name: "Portafolio",

  components: {
    Headline: () => import("./components/Headline"),
  },
};
</script>
