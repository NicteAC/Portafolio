<template>
  <v-container id="home" class="pt-12 pb-0 px-0" fluid tag="section">
    <v-img src="./05.png" >
    <headline />
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {
    Headline: () => import("./components/Headline"),
  },
};
</script>