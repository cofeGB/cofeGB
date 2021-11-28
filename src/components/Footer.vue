<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-col
      class="primary lighten-2 py-4 text-center white--text"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>
        <v-icon class="mx-5 mb-5">
          mdi-copyright
        </v-icon>
        "Кофеманы"</strong>
      </v-col>  
  </v-footer>
</template>

<script>
export default {
  name: 'footeer',
};
</script>

<style lang="scss" scoped>
.footer {
  height: 50px;
  background: #000;
}
.v-icon.v-icon {
  display: inline;
}
</style>
