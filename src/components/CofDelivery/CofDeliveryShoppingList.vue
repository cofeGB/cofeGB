<template>
  <Card class="mx-2 card">
    <template #content>
      <div class="card-menu">
        <div v-if="!QUICK_ORDER.length" class="pa-2">В списке пусто</div>
        <v-list-item-group v-model="select" class="order">
          <v-list-item
            v-for="(el, idx) in QUICK_ORDER"
            :key="idx"
            :value="el"
            class="order-item my-1 px-2"
          >
            <v-list-item-title class="d-flex justify-space-between mr-5">
              <Title size="16px" class="d-inline-block text-truncate" style="max-width: 150px">
                {{ el.title }}
              </Title>
              <Title
                size="16px"
                class="d-inline-block text-truncate price"
                style="max-width: 150px"
              >
                {{ el.quantity }} x {{ el.price }} &#x20bd;
              </Title>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </div>
    </template>
    <template #actions>
      <div class="w100">
        <v-flex v-if="select" class="action">
          <v-btn
            class="btn mx-1"
            :color="selected.quantity === 1 ? 'error' : 'primary'"
            @click="addOrderQuantity(selected, -1)"
          >
            <tooltip v-if="selected.quantity === 1" content="Удалить ?" :disabled="disabled">
              <v-icon color="primary"> mdi-food-off </v-icon>
            </tooltip>
            <tooltip v-else content="Минус одна позиция" :disabled="disabled">
              <v-icon color="black">mdi-minus</v-icon>
            </tooltip>
          </v-btn>

          <v-btn
            v-if="$route.path !== `/menu/${$route.params.category}/${select.guid}`"
            class="btn mx-1"
            color="secondery"
            @click="goToElement(selected)"
          >
            <tooltip content="Перейки к блюду" :disabled="disabled">
              <v-icon big>mdi-silverware</v-icon>
            </tooltip>
          </v-btn>

          <v-btn class="btn mx-1" color="primary" @click="addOrderQuantity(selected, 1)">
            <tooltip content="Плюс одна позиция" :disabled="disabled">
              <v-icon color="black">mdi-plus</v-icon>
            </tooltip>
          </v-btn>
        </v-flex>
        <tooltip
          content="Окончательный счет с учетом акций и скидок"
          :disabled="disabled"
          :activatorClass="'w100'"
        >
          <div class="d-flex total pt-2">
            <span class="ellipsis"> Всего к оплате </span>
            <span class="price"> {{ TOTAL_SUM.totalPrice }} &#x20bd; </span>
          </div>
        </tooltip>
        <v-btn
          v-if="TOTAL_SUM.totalPrice"
          outlined
          color="error"
          class="title btn-buy w100 mt-2"
          @click="clearBasket()"
          >Очистить корзину</v-btn
        >
      </div>
    </template>
  </Card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import OrderMixin from '@/mixins/OrderMixin';

export default {
  mixins: [OrderMixin],
  props: {
    basket: {
      type: Object,
      default: () => {},
    },
    drawer: {
      type: Boolean,
      default: false,
    },
    mini: {
      type: Boolean,
      default: false,
    },
    tooltipDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      select: null,
      contentClick: false,
      stopRouter: false,
      numberOrder: '',
      window: {
        width: 0,
      },
    };
  },
  computed: {
    ...mapGetters(['QUICK_ORDER', 'TOTAL_SUM']),
    disabled() {
      return this.tooltipDisabled;
    },
    miniCOMPUTED() {
      return this.mini;
    },
    selected() {
      return this.QUICK_ORDER.find(el => el.guid === this.select.guid);
    },
  },
  created() {
    this.startOrder();
  },
  methods: {
    ...mapActions(['ADD_DISH', 'DELETE_ALL_IN_ORDER_ACTION', 'GET_ORDER_LIST', 'GET_MENU']),
    goToElement(el) {
      this.contentClick = true;
      this.GET_MENU(el.category);
      this.$router.replace({
        path: `/menu/${el.category}/${el.guid}`,
        component: 'dish',
      });
    },
    clearBasket() {
      this.DELETE_ALL_IN_ORDER_ACTION({ numberOrder: localStorage.numberOrder });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.order {
  max-height: 160px !important;
  overflow-y: auto !important;
}
.action {
  width: 100% !important;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.mini {
  background: rgba(20, 15, 12, 0.9) !important;
  border: 1px solid white !important;
  border-radius: 10px;
}

.card {
  border: 1px solid white !important;
  &-menu {
    max-height: 300px !important;
    overflow-y: auto !important;
  }
}

.price {
  display: block;
  width: max-content;
  text-align: right;
  margin-left: auto;
  min-width: fit-content;
  color: $primary;
}
.total {
  border-top: 1px solid white;
}
</style>
