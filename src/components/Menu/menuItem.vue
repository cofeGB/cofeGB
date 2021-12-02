<template>
  <div class="menuItem">
    <div class="menuItem__desc">
      <p class="menuItem__title">{{ item.title }}</p>
      <div class="menuItem__composition">
        <span v-for="ingridient of item.composition" :item="item" :key="ingridient.title">
          {{ ingridient.title }},
        </span>
      </div>
      <table class="menuItem__cpfc">
        <thead>
          <tr>
            <td>{{ item.calories }}</td>
            <td>{{ item.proteins.in }}</td>
            <td>{{ item.fat.in }}</td>
            <td>{{ item.carbohydrates.in }}</td>
          </tr>
        </thead>
        <tbody class="menuItem__cpfc-body">
          <tr>
            <td>ккал</td>
            <td>белки</td>
            <td>жиры</td>
            <td>углеводы</td>
          </tr>
        </tbody>
      </table>
      <div class="menuItem__price">
        {{ item.price }} &#x20bd;
        <button @click="onClick">
          <i class="fas fa-plus-circle btn-plus"></i>
        </button>
      </div>
    </div>
    <div class="menuItem__img">
      <div class="contaier">
        <div class="triangle"></div>
        <img :src="img" alt="photo" />
        <p v-if="amount > 0" class="menuItem__quantity">x {{ amount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
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
      amount: 0,
    };
  },
  methods: {
    onClick() {
      console.log('click', this.amount);
      this.amount += 1;
    },
  },
};
</script>

<style lang="sass" scoped>
.menuItem
  position: relative
  height: 400px
  width: 260px
  background-color: white
  &__desc
    padding: 20px
    color: #564742

  &__title
    font-family: Playfair Display
    font-weight: 900
    font-size: 16px
  &__composition
    font-family: Open Sans
    font-weight: 300
    font-size: 12px
    line-height: 16px
  &__cpfc
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
</style>
