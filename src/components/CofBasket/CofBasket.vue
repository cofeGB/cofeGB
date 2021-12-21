<template>
  <Modal :activator="basket" @close="CLOSE_MODAL()">
    <template #content>
      <v-flex class="classes">
        <v-toolbar dark color="secondery">
          <v-toolbar-title class="mr-2">
            <span>К оплате: </span>
            <span>{{ TOTAL_SUM.totalPrice }} &#x20bd;</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="CLOSE_MODAL()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-flex class="pa-3 content">
          <v-row>
            <v-col cols="12" md="6" lg="4">
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
                      <span> {{ el.quantity }} х {{ el.price }} </span>
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
                            color="secondery"
                            text-color="#fff"
                          >
                            <v-icon color="primary"> mdi-food-off </v-icon>
                          </tooltip>
                          <tooltip
                            v-else
                            content="Минус одна позиция"
                            :disabled="disabled"
                            color="secondery"
                            text-color="#fff"
                          >
                            <v-icon>mdi-minus</v-icon>
                          </tooltip>
                        </v-btn>
                        <v-btn
                          class="btn mx-1"
                          fab
                          x-small
                          color="secondery"
                          @click="onClick(el, 1)"
                        >
                          <tooltip
                            content="Плюс одна позиция"
                            :disabled="disabled"
                            color="secondery"
                            text-color="#fff"
                          >
                            <v-icon>mdi-plus</v-icon>
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
            <v-col v-if="QUICK_ORDER.length" cols="12" md="6" lg="4" class="selected">
              <tooltip
                content="Перейки к блюду"
                :disabled="disabled"
                color="secondery"
                text-color="#fff"
              >
                <v-img
                  class="selected-img"
                  :src="selectedElement.img"
                  @click="goToElement(selectedElement)"
                />
              </tooltip>
              <v-list class="selected-list">
                <v-list-item class="selected-description">
                  <v-list-item-title class="pb-2">
                    <span class="selected-description-title">
                      {{ selectedElement.title }}
                    </span>
                  </v-list-item-title>
                  <v-list-item-subtitle class="selected-description-subtitle py-2">
                    <span v-for="(calories, idx) in selectedElement.calories" :key="idx">
                      {{ calories.title }} : {{ calories.value }}
                    </span>
                  </v-list-item-subtitle>
                  <v-list-item-content>
                    <span class="selected-description-description">{{
                      selectedElement.description
                    }}</span>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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
  name: 'cofBasket',
  data() {
    return {
      selectedEl: {},
    };
  },
  computed: {
    ...mapGetters(['QUICK_ORDER', 'TOTAL_SUM', 'MODAL_NAME']),
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
      return this.MODAL_NAME === 'basket';
    },
  },
  methods: {
    ...mapActions([
      'ADD_DISH',
      'DELETE_ALL_IN_ORDER_ACTION',
      'GET_ORDER_LIST',
      'GET_MENU',
      'CLOSE_MODAL',
    ]),
    firstSelectedElements() {
      if (this.QUICK_ORDER.length > 0) {
        this.selectedElement = this.QUICK_ORDER[0];
      }
    },
    closeAndGo() {
      this.$router.replace({ path: '/menu/starters' });
      this.CLOSE_MODAL();
    },
    goToElement(el) {
      this.GET_MENU(el.category);
      this.CLOSE_MODAL();
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
@import '@/assets/css/variables.scss';
.classes {
  background: rgba(86, 71, 66, 0.95) !important;
  min-height: 100% !important;
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
.selected {
  &-list {
    border-top: 4px solid $secondery;
  }
  &-img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
      filter: brightness(0.8);
    }
    @media (min-width: 300px) {
      height: 100px;
    }
    @media (min-width: 760px) {
      height: 200px;
    }
    @media (min-width: 1000px) {
      height: 300px;
    }
  }
  &-description {
    width: 100%;
    display: flex;
    flex-direction: column;
    &-title {
      font-size: 20px;
      font-weight: bold;
    }
    &-subtitle {
      font-size: 16px;
      font-weight: bold;
      display: flex;
      width: 100%;
      color: $secondery !important;
      justify-content: space-between;
      border-top: 2px solid $secondery;
      border-bottom: 2px solid $secondery;
    }
    &-description {
      font-weight: 16px;
    }
  }
}
</style>
