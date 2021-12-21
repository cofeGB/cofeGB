<template>
  <Modal :activator="basket" @close="close">
    <template #content>
      <v-flex class="classes">
        <v-toolbar dark color="secondery">
          <v-toolbar-title class="mr-2"
            >И того к оплате: {{ TOTAL_SUM.totalPrice }}</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-toolbar-title class="mr-2">Корзина</v-toolbar-title>
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-flex class="pa-3">
          <v-row>
            <v-col cols="6">
              <v-list class="list" dark>
                <v-list-item-group v-model="selectedElement" mandatory>
                  <v-list-item
                    v-for="(el, idx) in QUICK_ORDER"
                    :key="idx"
                    :value="el"
                    class="list-item my-2 py-1"
                  >
                    <v-list-item-title class="d-flex justify-space-between mr-5">
                      <span>
                        {{ el.title }}
                      </span>
                      <span>
                        {{ el.quantity }}
                      </span>
                    </v-list-item-title>
                    <v-list-item-action class="ma-0 list-item-action">
                      <div class="d-flex">
                        <v-btn
                          class="btn mx-1"
                          fab
                          x-small
                          :color="el.quantity === 1 ? 'error' : 'primary'"
                          @click="onClick(el, -1)"
                        >
                          <tooltip
                            v-if="el.quantity === 1"
                            content="Удалить ?"
                            :disabled="disabled"
                          >
                            <v-icon color="primary"> mdi-food-off </v-icon>
                          </tooltip>
                          <tooltip v-else content="Минус одна позиция" :disabled="disabled">
                            <v-icon>mdi-minus</v-icon>
                          </tooltip>
                        </v-btn>
                        <v-btn class="btn mx-1" fab x-small color="primary" @click="onClick(el, 1)">
                          <tooltip content="Плюс одна позиция" :disabled="disabled">
                            <v-icon>mdi-plus</v-icon>
                          </tooltip>
                        </v-btn>
                        <v-btn
                          v-if="$route.path !== `/menu/${$route.params.category}/${el.guid}`"
                          class="btn mx-1"
                          icon
                          fab
                          x-small
                          color="primary"
                          @click="goToElement(el)"
                        >
                          <tooltip content="Перейки к блюду" :disabled="disabled">
                            <v-icon>mdi-food</v-icon>
                          </tooltip>
                        </v-btn>
                      </div>
                    </v-list-item-action>
                  </v-list-item>
                </v-list-item-group>
                <v-list-item v-if="!QUICK_ORDER.length">
                  <v-list-item-title class="mr-5"> Вы еще ничего не закозали </v-list-item-title>
                  <v-list-item-action class="ma-0 list-item-action">
                    <v-btn color="secondery" @click="closeAndGo"> Перейти к закускам ? </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6">
              <v-card>
                <template #content>
                  {{ selectedElement.title }}
                </template>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
      </v-flex>
    </template>
  </Modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectedEl: {},
    };
  },
  computed: {
    ...mapGetters(['QUICK_ORDER', 'TOTAL_SUM']),
    selectedElement: {
      get() {
        return this.selectedEl;
      },
      set(v) {
        this.selectedEl = v;
      },
    },
    disabled() {
      return this.tooltipDisabled;
    },
    basket() {
      return this.$store.state.modalCard === 'cofBasket';
    },
  },
  methods: {
    ...mapActions(['ADD_DISH', 'DELETE_ALL_IN_ORDER_ACTION', 'GET_ORDER_LIST', 'GET_MENU']),
    firstSelectedElements() {
      if (this.QUICK_ORDER.length > 0) {
        this.selectedElement = this.QUICK_ORDER[0];
      }
    },
    close() {
      this.$store.dispatch('OPEN_CLOSE_MODAL');
    },
    closeAndGo() {
      this.$router.replace({ path: '/menu/starters' });
      this.$store.dispatch('OPEN_CLOSE_MODAL');
    },
    goToElement(el) {
      this.GET_MENU(el.category);
      this.close();
      this.$router.replace({
        path: `/menu/${el.category}/${el.guid}`,
        component: 'dish',
      });
    },
    clearBasket() {
      this.DELETE_ALL_IN_ORDER_ACTION({ numberOrder: localStorage.numberOrder });
    },
    onClick(el, inc) {
      this.ADD_DISH({ dish: el, inc, numberOrder: this.numberOrder });
    },
  },
  created() {
    this.firstSelectedElements();
    if (localStorage.numberOrder) {
      this.numberOrder = localStorage.numberOrder;
      this.GET_ORDER_LIST(this.numberOrder);
    }
    if (!localStorage.numberOrder) {
      const today = new Date();
      const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
      localStorage.numberOrder = `${date}-${Math.floor(Math.random() * 100)}`;
    }
  },
};
</script>

<style lang="scss" scoped>
.classes {
  background: rgba(0, 0, 0, 0.9) !important;
  height: 100vh !important;
  .list {
    background: none;
    border: 1px solid white;
    max-height: 300px;
    &-item {
      min-height: fit-content;
      &-action {
        min-width: fit-content;
        align-items: center;
      }
    }
  }
}
</style>
