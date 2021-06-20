<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreDrawer: () => import("@/components/Drawer"),
    CoreFooter: () => import("@/components/Footer"),
    CoreAppBar: () => import("@/components/AppBar"),
    CoreView: () => import("@/components/View"),
  },
};
</script>
