<template>
  <div class="menuItem">
    <div class="menuItem__desc">
      <router-link :to="{ path: `/dish/${item.guid}`, component: 'dish' }">
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
    <router-link :to="{ path: `/dish/${item.guid}`, component: 'dish' }">
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
  computed: {
    ...mapGetters(['QUICK_ORDER']),
    quantity() {
      let find = this.QUICK_ORDER.find(el => el.title === this.item.title);
      return find ? find.quantity : 0;
    },
  },
  methods: {
    ...mapActions(['ADD_DISH']),
    onClick(inc) {
      this.$store.dispatch('ADD_DISH', { dish: this.item, inc });
    },
  },
};
</script>

<style lang="sass" scoped>
.menuItem
  position: relative
  height: 400px
  max-width: 260px
  background-color: white
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
  border-right: 260px solid transparent
.btn-plus
  color: #25DCD1
.contaier
  position: relative
  width: 100%
img
  width: 100%
</style>
