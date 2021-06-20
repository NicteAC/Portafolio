<template>
  <v-navigation-drawer v-model="drawer" right fixed temporary>
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="{
          name: link,
        }"
        active-class="primary--text font-weight-bold"
        class="subtitle-1"
        exact
        min-width="128"
        text
      >
        <v-list-item-content>
          <v-list-item-title v-text="link" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="py-10">
          <v-img
            src="../assets/03.png"
            contain
            class="shrink mr-2"
            height="60"
            width="200"
          />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "CoreDrawer",

  computed: {
    ...mapState(["links"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },
};
</script>
