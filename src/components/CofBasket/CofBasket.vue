<template>
  <Modal :activator="basket" @close="close">
    <template #content>
      <v-flex class="classes">
        <v-toolbar color="primary">
          <v-spacer></v-spacer>
          <v-toolbar-title class="mr-3">Корзина</v-toolbar-title>
          <v-btn icon @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
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
  background: rgba(0, 0, 0, 0.9) !important;
  height: 100vh !important;
}
</style>
