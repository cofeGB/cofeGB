import { mapActions } from 'vuex';

export default {
  data() {
    return {
      numberOrder: null,
    };
  },
  methods: {
    ...mapActions(['GET_ORDER_LIST', 'ADD_DISH']),
    addOrderQuantity(el, inc) {
      if (el.quantity === 1 && inc === -1) {
        this.select = null;
      }
      this.ADD_DISH({ dish: el, inc, numberOrder: this.numberOrder });
    },
    startOrder() {
      if (!localStorage.numberOrder) {
        const today = new Date();
        const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
        localStorage.numberOrder = `${date}-${Math.floor(Math.random() * 100)}`;
      }
      if (localStorage.numberOrder) {
        this.numberOrder = localStorage.numberOrder;
        this.GET_ORDER_LIST(this.numberOrder);
      }
    },
  },
};
