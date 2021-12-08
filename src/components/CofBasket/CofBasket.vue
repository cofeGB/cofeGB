<template>
  <Modal :activator="basket" @close="close">
    <template #content>
      <v-flex class="classes">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Корзина</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-flex>
    </template>
  </Modal>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.dispatch('OPEN_CLOSE_MODAL');
    },
  },
  computed: {
    basket() {
      return this.$store.state.modal;
    },
  },
};
</script>

<style lang="scss" scoped>
.classes {
  background: rgba($color: #000000, $alpha: 0.9) !important;
  height: 100vh !important;
}
</style>
