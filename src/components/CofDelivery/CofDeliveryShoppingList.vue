<template>
  <Card class="mx-2 card">
    <template #content>
      <div class="pa-2 order-menu">
        <div v-for="(el, idx) in list" :key="idx" class="d-flex align-center order-list">
          <Menu
            :offsetX="true"
            :left="true"
            :contentClick="contentClick"
            :maxW="'300px'"
            :origin="'right top'"
            :transition="'fab-transition'"
            :activator-class="'ellipsis'"
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
                  @click="quantity(idx, 'all')"
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
                  @click="quantity(idx, '-')"
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
                  <v-btn class="btn mx-1" fab small color="primary" @click="quantity(idx, '+')"
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
      <Menu
        :offsetX="true"
        :left="true"
        :maxW="'300px'"
        :origin="'right top'"
        :transition="'fab-transition'"
        :contentClass="miniCOMPUTED ? 'mini' : ''"
        :activatorClass="'w100'"
        @input="clearBasket(idx)"
      >
        <template #activator>
          <tooltip content="Подробнее про общий счет" :activatorClass="'w100'" :disabled="disabled">
            <div class="d-flex order-list total pt-2 w-100">
              <span class="ellipsis"> Всего к оплате </span>
              <span class="price"> {{ basket.total.totalPrice }} &#x20bd; </span>
            </div>
          </tooltip>
        </template>
        <template #content>
          <div class="stockMenu pa-2" :class="miniCOMPUTED ? 'mini' : ''">
            <div class="loyalty" v-for="(loyal, idx) in basket.total.loyalty" :key="idx">
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
                    :activatorClass="'w100'"
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
      </Menu>
    </template>
  </Card>
</template>

<script>
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
      list: [],
      window: {
        width: 0,
      },
    };
  },
  created() {
    this.list = this.basket.dish;
  },
  computed: {
    disabled() {
      return this.tooltipDisabled;
    },
    miniCOMPUTED() {
      return this.mini;
    },
  },
  methods: {
    goToElement(el) {
      this.contentClick = true;
      this.$router.replace({ path: `/menu/:${el.path}`, query: el });
    },
    clearBasket(idx) {
      if (this.list[idx].quantity === 1) {
        this.list.splice(idx, 1);
        return;
      }
    },
    quantity(idx, operation) {
      this.contentClick = false;
      switch (operation) {
        case '-':
          if (this.list[idx].quantity === 1) {
            this.list.splice(idx, 1);
            this.contentClick = true;
            return;
          }
          this.list[idx].quantity -= 1;
          break;
        case '+':
          this.list[idx].quantity += 1;
          break;
        case 'all':
          this.list.splice(idx, 1);
          this.contentClick = true;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  background: rgba(48, 24, 13, 0.5) !important;
  &-menu {
    height: 150px !important;
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
