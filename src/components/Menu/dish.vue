<template>
  <div class="container">
    <div class="menuPage__image">
      <img :src="img" alt="photo" />
      <button class="menuPage__btn close__btn">&times;</button>
      <div class="menuPage__img-info">
        <div class="menuPage__img-info_text">
          <span class="menuPage__text">{{ menuItem.title }}</span>
        </div>
        <div class="menuPage__img-info_text">
          <span class="menuPage__text">{{ menuItem.price }} &#x20bd;</span>
          <button class="menuPage__btn add__btn"></button>
        </div>
      </div>
    </div>
    <div class="menuPage__main">
      <div class="menuPage__main_composition">
        <div>
          <h4>Состав</h4>
          <span v-for="ingridient of menuItem.composition" :item="item" :key="ingridient.title">
            {{ ingridient.title }},
          </span>
        </div>
        <div class="menuPage__main_cpfc">
          <div class="menuPage__main_cpf-center">
            <span>{{ menuItem.calories }}</span>
            <br />
            <span class="menuPage__main_cpfc-block">ккал</span>
          </div>
          <div class="menuPage__main_cpf-center">
            <span>{{ menuItem.proteins.in }}</span>
            <br />
            <span class="menuPage__main_cpfc-block">белки</span>
          </div>
          <div class="menuPage__main_cpf-center">
            <span>{{ menuItem.fat.in }}</span>
            <br />
            <span class="menuPage__main_cpfc-block">жиры</span>
          </div>
          <div class="menuPage__main_cpf-center">
            <span>{{ menuItem.carbohydrates.in }}</span>
            <br />
            <span class="menuPage__main_cpfc-block">углеводы</span>
          </div>
        </div>
      </div>
      <div class="menuPage__main_description">
        <h4>Описание</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nulla, neque nam
          voluptates accusantium aut soluta nemo aspernatur ipsam, eveniet deleniti? Ipsum Ipsum
          Ipsum magni dolor vitae quas doloremque?
        </p>
      </div>
    </div>
    <hr />
    <div class="menuPage__constructor">
      <p>Здесь конструктор?</p>
    </div>
    <button>
      <div class="menuPage__btn cart__btn">
        <span class="cart__btn_cart">В КОРЗИНУ</span>
        <div></div>
        <span class="cart__btn_price">{{ menuItem.price }} &#x20bd;</span>
      </div>
    </button>
    <div>footer как у ями-ями</div>
  </div>
  <!-- <div>
    <div>{{ menuItem }}</div>
    <div>{{ this.$route.params['name'] }}</div>
  </div> -->
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'dish',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      img: require('../../assets/img/26.jpg'),
      nameSection: 'sandwich',
      // product: this.$route.params['id'],
    };
  },
  computed: {
    ...mapGetters(['MENU', 'BAR_MENU']),
    menuItem() {
      return this.MENU[this.nameSection].find(el => el.title === this.$route.params['id']);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1167px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menuPage__text {
  font-family: Playfair Display;
  font-style: normal;
  letter-spacing: 0em;
}
img {
  width: 100%;
}
hr {
  width: 100%;
}
.menuPage__image {
  margin-bottom: 32px;
  position: relative;
}
.menuPage__img-info {
  position: absolute;
  width: 100%;
  bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.menuPage__img-info_text {
  color: white;
  font-weight: 400;
  font-size: 33px;
}
.menuPage__btn {
  background-color: #25dcd1;
  border: 1px solid #23c9be;
}
.close__btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  font-size: 26px;
  border-radius: 20px;
  text-align: center;
}
.add__btn {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.menuPage__main {
  display: flex;
  justify-content: space-around;
  width: 80%;
}
.menuPage__main_composition {
  padding-left: 32px;
}
.menuPage__main_description {
  padding-right: 32px;
}
.menuPage__main_cpfc {
  display: flex;
  margin: 32px 0;
}
.menuPage__main_cpfc-block {
  text-align: center;
}
.menuPage__main_cpf-center {
  margin-right: 64px;
  text-align: center;
}
.menuPage__constructor {
  margin: 32px 0;
}
.cart__btn {
  width: 270px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
}
</style>
