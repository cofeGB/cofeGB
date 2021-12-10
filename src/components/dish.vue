<template>
  <div class="container">
    <div v-if="menuItem" class="container">
      <div class="dish__image">
        <img :src="img" alt="photo" />
        <button @click="$router.go(-1)" class="dish__btn close__btn">&times;</button>
        <div class="dish__img-info">
          <div class="dish__img-info_text">
            <span class="dish__text">{{ menuItem.title }}</span>
            <div class="dish__text-align">
              <span class="dish__text dish__text-mrg">{{ menuItem.price }} &#x20bd;</span>
              <button @click="onClick(1)" class="dish__btn add__btn">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="dish__main">
        <div class="dish__main_composition">
          <div>
            <h4>Состав</h4>
            <span v-for="ingridient of menuItem.composition" :item="item" :key="ingridient.title">
              {{ ingridient.title }},
            </span>
          </div>
          <div class="dish__main_cpfc">
            <div v-for="(i, index) of menuItem.calories" :key="index">
              <span>{{ i.procents }}</span>
              <br />
              <span>{{ i.title }}</span>
            </div>
          </div>
        </div>
        <div class="dish__main_description">
          <h4>Описание:</h4>
          <span>{{ menuItem.description }}</span>
        </div>
      </div>
      <hr />
      <div class="dish__constructor">
        <p>Здесь конструктор?</p>
      </div>
      <button @click="onClick(1)" v-if="quantity === 0">
        <div class="dish__btn cart__btn">
          <span>В КОРЗИНУ</span>
          <span>{{ menuItem.price }} &#x20bd;</span>
        </div>
      </button>
      <div class="dish__btn cart__btn" v-else>
        <button @click="onClick(-1)">
          <i class="fas fa-minus"></i>
        </button>
        <span>&times; {{ quantity }}</span>
        <button @click="onClick(1)">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
    <div v-else>
      <h3>К сожалению, такого блюда нет</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
      img: require('../assets/img/26.jpg'),
      nameSection: 'sandwich',
      numberOrder: '',
    };
  },
  methods: {
    ...mapActions(['ADD_DISH', 'GET_MENU', 'GET_ORDER_LIST']),
    onClick(inc) {
      if (!localStorage.numberOrder) {
        const today = new Date();
        const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
        localStorage.numberOrder = `${date}-${Math.floor(Math.random() * 100)}`;
      }
      this.menuItem.quantity = this.quantity;
      this.$store.dispatch('ADD_DISH', { dish: this.menuItem, inc, numberOrder: this.numberOrder });
      this.GET_ORDER_LIST(this.numberOrder);
    },
  },
  computed: {
    ...mapGetters(['MENU', 'QUICK_ORDER']),
    menuItem() {
      return this.MENU.find(el => el.guid == this.$route.params.id);
    },
    quantity() {
      let find = this.QUICK_ORDER.find(el => el.guid === this.menuItem.guid);
      return find ? find.quantity : 0;
    },
  },
  mounted() {
    if (localStorage.numberOrder) {
      this.numberOrder = localStorage.numberOrder;
      this.GET_ORDER_LIST(this.numberOrder);
    }
    if (this.MENU.length == 0) {
      this.GET_MENU(this.$route.params.category);
    }
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
.dish__text {
  font-family: Playfair Display;
  font-style: normal;
  letter-spacing: 0em;
}
.dish__text-mrg {
  margin-right: 8px;
}
.dish__text-align {
  display: flex;
  align-items: center;
}
img {
  width: 100%;
}
hr {
  width: 100%;
}
.dish__image {
  margin-bottom: 32px;
  position: relative;
}
.dish__img-info {
  position: absolute;
  width: 100%;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dish__img-info_text {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: 400;
  font-size: 33px;
}
.dish__btn {
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
.dish__main {
  display: flex;
  justify-content: center;
  width: 80%;
}
.dish__main_composition {
  padding-right: 16px;
  width: 50%;
}
.dish__main_description {
  padding-left: 16px;
  width: 50%;
}
.dish__main_cpfc {
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
}
.dish__constructor {
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
