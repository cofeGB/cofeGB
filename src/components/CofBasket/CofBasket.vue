<template>
  <Modal :activator="basket" @close="close">
    <template #content>
      <div class="classes">
        <v-flex>
          <v-toolbar color="primary">
            <v-spacer></v-spacer>
            <v-toolbar-title class="mr-3">Корзина</v-toolbar-title>
            <v-btn icon @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-flex>
        <v-row>
          <div class="body">ffffffffff</div>
        </v-row>
      </div>
    </template>
  </Modal>
</template>

<script>
export default {
  name: 'cofBasket',
  methods: {
    close() {
      this.$store.dispatch('OPEN_CLOSE_MODAL', this.name);
    },
  },
  computed: {
    basket() {
      return this.$store.state.modalCard === 'cofBasket';
    },
  },
};
</script>

<style lang="scss" scoped>
.classes {
  background: rgba(0, 0, 0, 0.9) !important;
  height: 100vh !important;
  color: #fff !important;
}
</style>
