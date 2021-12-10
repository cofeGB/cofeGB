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
        <div class="body">
          <v-row class="mt-3 px-2">
            <v-col cols="6" class="list-order">
              <Card class="card pa-2" action>
                <template #content>
                  <v-list dark>
                    <v-list-item-group v-model="selectedItem" class="list">
                      <v-list-item
                        v-for="(item, i) in QUICK_ORDER"
                        :key="i"
                        :value="item"
                        class="px-2"
                      >
                        <span>{{ item.title }}</span>
                        <v-spacer></v-spacer>
                        <span class="price">{{ item.quantity }} x {{ item.price }} &#x20bd;</span>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </template>
                <template #actions>
                  <div class="w100 border-top">
                    <tooltip content="Окончательный счет с учетом акций и скидок">
                      <div class="list d-flex">
                        <span class="ellipsis"> Всего к оплате </span>
                        <v-spacer></v-spacer>
                        <span class="price"> {{ TOTAL_SUM.totalPrice }} &#x20bd; </span>
                      </div>
                    </tooltip>
                    <v-btn
                      v-if="TOTAL_SUM.totalPrice"
                      outlined
                      color="error"
                      class="title btn-buy w100 mt-2"
                      @click="DELETE_ALL_IN_ORDER_ACTION"
                      >Очистить корзину</v-btn
                    >
                  </div>
                </template>
              </Card>
            </v-col>
            <v-col cols="6" class="list-compound">
              <Card class="card pa-2" v-if="selectedItem">
                <template #content>
                  <v-list-item class="list">
                    <v-list-item-content>
                      <v-list-item-title>{{ selectedItem.title }}</v-list-item-title>
                      <span class="list">{{ selectedItem.description }}</span>
                    </v-list-item-content>
                    <v-list-item-avatar min-width="350" min-height="200" horizontal rounded>
                      <img class="dish-img" :src="img" alt="" />
                    </v-list-item-avatar>
                  </v-list-item>
                </template>
              </Card>
            </v-col>
          </v-row>
        </div>
      </v-flex>
    </template>
  </Modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      img: require('@/assets/img/26.jpg'),
      selectedItem: null,
    };
  },
  created() {
    console.log('MENU', this.MENU);
    console.log('QUICK_ORDER', this.QUICK_ORDER);
  },
  methods: {
    ...mapActions(['ADD_DISH', 'DELETE_ALL_IN_ORDER_ACTION', 'GET_MENU']),
    close() {
      this.$store.dispatch('OPEN_CLOSE_MODAL');
    },
  },
  computed: {
    ...mapGetters(['QUICK_ORDER', 'TOTAL_SUM', 'MENU']),
    basket() {
      return this.$store.state.modal;
    },
  },
};
</script>

<style lang="scss">
.classes {
  background: rgba(0, 0, 0, 0.9) !important;
  height: 100vh !important;
}
.list {
  color: #fff !important;
}
.border {
  padding-top: 8px;
  &-full {
    border: 1px solid white;
  }
  &-top {
    border-top: 1px solid white;
  }
}
.price {
  display: block;
  width: max-content;
  text-align: right;
  margin-left: auto;
  min-width: fit-content;
  color: #25dcd1;
}
.dish-img {
  width: 100% !important;
  height: 100% !important;
}
.v-list {
  background: none !important;
}
</style>
