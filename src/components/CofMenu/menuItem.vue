<template>
  <div class="menuItem my-3">
    <div class="menuItem__desc">
      <router-link
        :to="{ path: `/menu/${this.$route.params.category}/${item.guid}`, component: 'dish' }"
        class="decoration-none"
      >
        <p class="menuItem__title">{{ item.title }}</p>
      </router-link>
      <div class="menuItem__cpfc">
        <div v-for="(i, index) of item.calories" :key="index">
          <p>{{ i.procents }}</p>
          <p class="menuItem__cpfc-body">{{ i.title }}</p>
        </div>
      </div>
      <div class="menuItem__price">
        {{ item.price }} &#x20bd;
        <button @click="onClick(1)" class="mr-3">
          <i class="fas fa-plus-circle btn-plus"></i>
        </button>
        <button v-if="quantity > 0" @click="onClick(-1)">
          <i class="fas fa-minus-circle btn-plus"></i>
        </button>
      </div>
    </div>
    <div class="menuItem__link">
      <div
        class="menuItem__img"
        @click="
          $router.replace({
            path: `/menu/${item.category}/${item.guid}`,
            component: 'dish',
          })
        "
      >
        <img :src="img" alt="photo" class="img" transition="fade-transition" />
      </div>
      <span v-if="quantity > 0" class="menuItem__quantity">x {{ quantity }}</span>
    </div>
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
.decoration-none
  text-decoration: none
.menuItem
  width: 280px
  background-color: #fff
  justify-self: center
  &__desc
    padding: 20px
    max-height: 200px
    color: rgba(20, 15, 12, 0.9)
  &__title
    color: darken(#25dcd1, 20%)
    font-family: Playfair Display
    font-weight: 900
    font-size: 20px
    letter-spacing: 1px
    text-overflow: ellipsis
  &__cpfc
    display: grid
    grid-template-columns: repeat(4, 1fr)
    margin: 22px 0
    color: rgba(20, 15, 12, 0.9)
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
  &__link
    clip-path: polygon(0 28%, 100% 0%, 100% 100%, 0% 100%)
    position: relative
    display: block
    overflow: hidden
    width: 100%
    height: 300px
  &__img
    margin-top: auto
    overflow: hidden
    width: 100%
    height: 100%
    cursor: pointer
    .img
      width: 100%
      height: 100%
      object-fit: cover !important
      transition: all 0.3s
    &:hover
      .img
        transform: scale(1.2)
  &__quantity
    border: 3px solid rgba(20, 15, 12, 0.6)
    box-sizing: border-box
    border-radius: 25px
    position: absolute
    color: rgba(20, 15, 12, 0.8)
    bottom: 10px
    right: 2px
    background: #25DCD1
    height: 42px
    min-width: 70px
    padding: 0 2px
    text-align: center
    font-family: Open Sans
    font-weight: 600
    font-size: 24px
    line-height: 34px
.btn-plus
  color: #25DCD1
.contaier
  position: relative
  width: 100%
img
  width: 100%
  height: 100%
</style>
