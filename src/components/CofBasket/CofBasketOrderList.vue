<template>
  <v-list class="list" dark>
    <v-list-item-group class="list-order" v-model="selectedEl" mandatory>
      <v-list-item
        v-for="(el, idx) in QUICK_ORDER"
        :key="idx"
        :value="el"
        class="list-item my-2 py-1"
      >
        <v-list-item-title class="d-flex justify-space-between mr-5">
          <span class="text-truncate">
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
            <v-btn class="btn mx-1" fab x-small color="secondery" @click="onClick(el, 1)">
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
    <v-divider v-if="QUICK_ORDER.length" />
    <v-subheader v-if="QUICK_ORDER.length" class="ml-2 d-flex justify-space-between">
      <span class="title">К оплате: </span>
      <span class="title">{{ TOTAL_SUM.totalPrice }} &#x20bd;</span>
    </v-subheader>
    <v-list-item v-if="!QUICK_ORDER.length">
      <v-list-item-title> Заказ пуст</v-list-item-title>
      <v-list-item-action class="ma-0 list-item-action">
        <v-btn color="secondery" @click="closeAndGo"> Перейти к закускам ? </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: {
    tooltipDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedEl: {},
    };
  },
  computed: {
    ...mapGetters(['QUICK_ORDER', 'TOTAL_SUM']),
    disabled() {
      return this.tooltipDisabled;
    },
  },
  watch: {
    selectedEl(v) {
      this.$emit('selectElement', v);
    },
  },
  methods: {
    ...mapActions(['ADD_DISH', 'GET_ORDER_LIST', 'GET_MENU']),
    firstSelectedElements() {
      if (this.QUICK_ORDER.length > 0) {
        this.selectedEl = this.QUICK_ORDER[0];
      }
    },
    onClick(el, inc) {
      this.ADD_DISH({ dish: el, inc, numberOrder: this.numberOrder });
    },
    closeAndGo() {
      this.$router.replace({ path: '/menu/starters' });
      this.CLOSE_MODAL();
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
.list {
  background: none;
  border: 1px solid white;
  &-order {
    max-height: 300px;
  }
  &-item {
    min-height: fit-content;
    &-action {
      min-width: fit-content;
      align-items: center;
    }
  }
}
</style>
