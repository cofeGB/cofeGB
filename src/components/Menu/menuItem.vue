<template>
  <div class="menuItem">
    <div class="menuItem__desc">
      <router-link
        :to="{ path: `/menu/${this.$route.params.category}/${item.guid}`, component: 'dish' }"
      >
        <p class="menuItem__title">{{ item.title }}</p>
        <div class="menuItem__composition">
          <span v-for="ingridient of item.composition" :item="item" :key="ingridient.title">
            {{ ingridient.title }},
          </span>
        </div>
      </router-link>
      <div class="menuItem__cpfc">
        <div v-for="(i, index) of item.calories" :key="index">
          <p>{{ i.procents }}</p>
          <p class="menuItem__cpfc-body">{{ i.title }}</p>
        </div>
      </div>
      <div class="menuItem__price">
        {{ item.price }} &#x20bd;
        <button @click="onClick(1)">
          <i class="fas fa-plus-circle btn-plus"></i>
        </button>
        <button v-if="quantity > 0" @click="onClick(-1)">
          <i class="fas fa-minus-circle btn-plus"></i>
        </button>
      </div>
    </div>
    <router-link
      :to="{ path: `/menu/${this.$route.params.category}/${item.guid}`, component: 'dish' }"
    >
      <div class="menuItem__img">
        <div class="contaier">
          <div class="triangle"></div>
          <img :src="img" alt="photo" />
          <p v-if="quantity > 0" class="menuItem__quantity">x {{ quantity }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
const md5 = require('md5');
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'menuItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    img: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      numberOrder: '',
    };
  },
  computed: {
    ...mapGetters(['QUICK_ORDER']),
    quantity() {
      let find = this.QUICK_ORDER.find(el => el.guid === this.item.guid);
      return find ? find.quantity : 0;
    },
  },
  methods: {
    ...mapActions(['ADD_DISH', 'GET_ORDER_LIST']),
    onClick(inc) {
      if (!localStorage.numberOrder) {
        const guid = md5(Math.floor(Math.random() * 1000)).substr(0, 6);
        const today = new Date();
        const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
        localStorage.numberOrder = `${date}-${guid}`;
        localStorage.guid = guid;
        this.numberOrder = localStorage.numberOrder;
      }
      this.item.quantity = this.quantity;
      this.$store.dispatch('ADD_DISH', {
        dish: this.item,
        inc,
        numberOrder: localStorage.numberOrder,
        guid: localStorage.guid,
      });
    },
  },
  mounted() {
    if (localStorage.numberOrder) {
      this.numberOrder = localStorage.numberOrder;
      this.GET_ORDER_LIST(this.numberOrder);
    }
  },
};
</script>

<style lang="sass" scoped>
.menuItem
  position: relative
  height: 400px
  max-width: 260px
  background-color: white
  justify-self: center
  &__desc
    padding: 20px
    color: #564742

  &__title
    font-family: Playfair Display
    font-weight: 900
    font-size: 16px
  &__composition
    padding-top: 6px
    font-family: Open Sans
    font-weight: 300
    font-size: 12px
    line-height: 16px
  &__cpfc
    display: grid
    grid-template-columns: repeat(4, 1fr)
    margin: 22px 0
    color: #87817F
    font-family: Open Sans
    font-weight: 600
    font-size: 12px
    line-height: 16px
    &-body
      font-weight: 300
  &__price
    font-family: Open Sans
    font-weight: 600
    font-size: 24px
    line-height: 34px
  &__img
    position: absolute
    bottom: -7px
    width: 100%
    padding: 0
  &__quantity
    border: 3px solid #FFFFFF
    box-sizing: border-box
    border-radius: 25px
    position: absolute
    color: white
    bottom: -15px
    right: -15px
    background: #25DCD1
    height: 42px
    min-width: 70px
    padding: 0 2px
    text-align: center
    font-family: Open Sans
    font-weight: 600
    font-size: 24px
    line-height: 34px
.triangle
  position: absolute
  top: -3px
  width: 0
  height: 0
  border-top: 40px solid white
  border-right: 240px solid transparent
.btn-plus
  color: #25DCD1
.contaier
  position: relative
  width: 100%
img
  width: 100%

@media (max-width: 580px)
  .menuItem
    height: 350px
    max-width: 220px
  .triangle
    border-top: 35px solid white
    border-right: 200px solid transparent
</style>
