<template>
  <v-app-bar app color="primary">
    <v-btn @click="$store.dispatch('SHOW_NAV_MENU', !$store.state.navMenuVisible)"> Menu </v-btn>
    <!-- <v-btn to="home"> Home </v-btn> -->

    <v-spacer></v-spacer>

    <!-- <v-btn text to="menu"> Menu </v-btn> -->
    <!-- <v-btn text to="about"> About </v-btn> -->
    <!-- <v-btn text to="delivery"> Delivery </v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped></style>
