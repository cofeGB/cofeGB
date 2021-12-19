<template>
  <Card class="mx-2 card">
    <template #content>
      <div class="pa-2 order-menu">
        <div v-if="!QUICK_ORDER.length">В списке пусто</div>
        <div
          v-else
          v-for="(el, idx) in QUICK_ORDER"
          :key="idx"
          class="d-flex align-center order-list"
        >
          <Menu
            :offsetX="true"
            :left="true"
            :contentClick="contentClick"
            :maxW="'300px'"
            :origin="'right top'"
            :transition="'fab-transition'"
            :contentClass="miniCOMPUTED ? 'mini' : ''"
            @input="clearBasket(idx)"
          >
            <template #activator>
              <tooltip :content="el.title" :disabled="disabled">
                {{ el.title }}
              </tooltip>
            </template>
            <template #content>
              <div class="d-flex order-list-menu pa-2" :class="{ mini: miniCOMPUTED }">
                <v-btn
                  v-if="el.quantity >= 3"
                  class="btn mx-1"
                  fab
                  small
                  color="error"
                  @click="DELETE_ALL_IN_ORDER_ACTION"
                >
                  <tooltip content="Удалить все?" :disabled="disabled">
                    <v-icon color="primary"> mdi-delete-alert-outline </v-icon>
                  </tooltip>
                </v-btn>
                <v-btn
                  class="btn mx-1"
                  fab
                  small
                  :color="el.quantity === 1 ? 'error' : 'primary'"
                  @click="onClick(el, -1)"
                >
                  <tooltip v-if="el.quantity === 1" content="Удалить ?" :disabled="disabled">
                    <v-icon color="primary"> mdi-delete-alert-outline </v-icon>
                  </tooltip>
                  <tooltip v-else content="Минус одна позиция" :disabled="disabled">
                    <span>-</span>
                  </tooltip>
                </v-btn>
                {{ el.quantity }}
                <tooltip content="Плюс одна позиция" :disabled="disabled">
                  <v-btn class="btn mx-1" fab small color="primary" @click="onClick(el, 1)"
                    >+</v-btn
                  >
                </tooltip>
                <tooltip content="Перейки к блюду" :disabled="disabled">
                  <v-btn
                    v-if="$route.path !== `/menu/:${el.path}`"
                    class="btn mx-1"
                    icon
                    fab
                    small
                    color="primary"
                    @click="goToElement(el)"
                  >
                    <v-icon>mdi-badge-account-alert-outline</v-icon>
                  </v-btn>
                </tooltip>
              </div>
            </template>
          </Menu>
          <span class="price"> {{ el.quantity }} x {{ el.price }} &#x20bd; </span>
        </div>
      </div>
    </template>
    <template #actions>
      <div class="w100">
        <tooltip
          content="Окончательный счет с учетом акций и скидок"
          :disabled="disabled"
          :activatorClass="'w100'"
        >
          <div class="d-flex order-list total pt-2">
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
      <!-- <Menu
        :offsetX="true"
        :left="true"
        :maxW="'300px'"
        :origin="'right top'"
        :transition="'fab-transition'"
        :activator-class="'w100'"
        :contentClass="miniCOMPUTED ? 'mini' : ''"
        @input="clearBasket(idx)"
      >
        <template #activator>
          <tooltip content="Подробнее про общий счет" :disabled="disabled">
            <div class="d-flex order-list total pt-2 w-100">
              <span class="ellipsis"> Всего к оплате </span>
              <span class="price"> {{ TOTAL_SUM.totalPrice }} &#x20bd; </span>
            </div>
          </tooltip>
        </template>
        <template #content>
          <div class="stockMenu pa-2" :class="miniCOMPUTED ? 'mini' : ''">
            <span v-if="!TOTAL_SUM.loyalty.length" class="body-1">Нет доступных акций</span>
            <div v-else class="loyalty" v-for="(loyal, idx) in TOTAL_SUM.loyalty" :key="idx">
              <span class="title primary-text">{{ loyal.title }}</span>
              <v-list color="transparent" class="stockMenu-list">
                <v-list-item
                  v-for="(stock, idx) in loyal.items"
                  :key="idx"
                  class="stockMenu-list-item"
                  :to="stock.path"
                >
                  <tooltip
                    :disabled="disabled"
                    :content="`Перейти на страницу ${loyal.title.toLowerCase()}`"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="stockMenu-list-item-title">
                        {{ stock.title }}
                      </v-list-item-title>
                      <v-list-item-subtitle class="stockMenu-list-item-subtitle">
                        Скидка по Акции: <span class="primary-text">{{ stock.sale }} % </span>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="stockMenu-list-item-subtitle">
                        Вы сэкономили :
                        <span class="primary-text">{{ stock.saving }} &#x20bd;.</span>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </tooltip>
                </v-list-item>
              </v-list>
            </div>
          </div>
        </template>
      </Menu> -->
    </template>
  </Card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
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
      contentClick: false,
      stopRouter: false,
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
  },
  methods: {
    ...mapActions(['ADD_DISH', 'DELETE_ALL_IN_ORDER_ACTION']),
    goToElement(el) {
      this.contentClick = true;
      this.$router.replace({ path: `/menu/:${el.path}`, query: el });
    },
    clearBasket() {
      this.DELETE_ALL_IN_ORDER_ACTION({ numberOrder: localStorage.numberOrder });
    },
    onClick(el, inc) {
      this.ADD_DISH({ dish: el, inc });
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  background: rgba(5, 4, 3, 0.863) !important;
  &-menu {
    max-height: 150px !important;
    overflow-x: auto;
  }
  &-list {
    min-width: 100% !important;
    &-menu {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background: rgba(75, 67, 63, 0.9);
      color: #fff;
      .mini & {
        background: rgba(48, 24, 13, 0.9);
      }
    }
  }
}
.mini {
  background: rgba(48, 24, 13, 0.9) !important;
}

.card {
  border: 1px solid white !important;
}

.price {
  display: block;
  width: max-content;
  text-align: right;
  margin-left: auto;
  min-width: fit-content;
  color: #25dcd1;
}
.total {
  border-top: 1px solid white;
}

.btn {
  font-size: 30px;
  color: rgba(48, 24, 13, 0.9) !important;
}
.stockMenu {
  background: rgba(75, 67, 63, 0.9);
  .mini & {
    background: rgba(48, 24, 13, 0.9);
    &-list-item {
      &:hover {
        background: rgba(51, 18, 3, 0.9);
      }
    }
  }
  color: #fff;
  &-list {
    &-item {
      &:hover {
        background: rgba(65, 54, 49, 0.9);
      }
      &-title,
      &-subtitle {
        color: #fff !important;
      }
    }
  }
}
</style>
