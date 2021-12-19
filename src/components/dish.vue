<template>
  <div class="container">
    <div class="center">
      <div v-if="menuItem" class="content center">
        <div class="dish__image">
          <img :src="img" alt="photo" />
          <button @click="$router.go(-1)" class="dish__btn dish__btn_close">&times;</button>
          <div class="dish__img-info">
            <div class="dish__img-info_text">
              <span class="dish__text">{{ menuItem.title }}</span>
              <div class="dish__text-align">
                <span class="dish__text dish__text-mrg">{{ menuItem.price }} &#x20bd;</span>
                <button @click="onClick(1)" class="dish__btn dish__btn_add">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="dish__main">
          <div class="dish__main_composition">
            <div class="dish__text-small">
              <h4>Состав:</h4>
              <span v-for="ingridient of menuItem.composition" :item="item" :key="ingridient.title">
                {{ ingridient.title }},
              </span>
            </div>
            <div class="dish__main_cpfc dish__text-small">
              <div v-for="(i, index) of menuItem.calories" :key="index">
                <span>{{ i.procents }}</span>
                <br />
                <span>{{ i.title }}</span>
              </div>
            </div>
          </div>
          <div class="dish__main_description dish__text-small">
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
        <div class="dish__main_description">
          <h4>Описание</h4>
          <p>{{ menuItem.description }}</p>
        </div>
        <div class="dish__main_description">
          <h4>Описание:</h4>
          <span>{{ menuItem.description }}</span>
        </div>
      </div>
      <div v-else>
        <h3>К сожалению, такого блюда нет</h3>
      </div>
      <dishFooter />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import dishFooter from './dishFooter.vue';
export default {
  name: 'dish',
  components: {
    dishFooter,
  },
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
    this.GET_MENU(this.$route.params.category);
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1167px;
  background-color: white;
  margin: 0 auto;
  @media (max-width: 667px) {
    width: 100%;
  }
}
.center {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  margin-bottom: 64px;
  @media (max-width: 667px) {
    margin-bottom: 16px;
  }
}
.dish__text {
  font-family: Playfair Display;
  font-style: normal;
  letter-spacing: 0em;
  &-mrg {
    margin-right: 8px;
  }
  &-align {
    display: flex;
    align-items: center;
  }
  &-small {
    font-family: Playfair Display;
    font-size: 18px;
    color: black;
    @media (max-width: 667px) {
      font-size: 14px;
    }
  }
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
  @media (max-width: 667px) {
    margin-bottom: 0;
  }
}
.dish__img-info {
  position: absolute;
  width: 100%;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 667px) {
    position: static;
    padding: 8px;
    justify-content: space-between;
  }
}
.dish__img-info_text {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: 400;
  font-size: 33px;
  @media (max-width: 667px) {
    font-size: 22px;
    color: black;
    width: 100%;
  }
}
.dish__btn {
  background-color: #25dcd1;
  border: 1px solid #23c9be;
  transition: background-color, 0.5s;
  &:hover {
    background-color: #1bc2b7;
  }
  &_close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 26px;
    border-radius: 20px;
    text-align: center;
    @media (max-width: 667px) {
      top: 8px;
      right: 8px;
      width: 30px;
      height: 30px;
      font-size: 18px;
    }
  }
  &_add {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    @media (max-width: 667px) {
      width: 30px;
      height: 30px;
      font-size: 18px;
    }
  }
}
.dish__main {
  display: flex;
  justify-content: center;
  width: 80%;
  &_composition {
    padding-right: 16px;
    width: 50%;
    @media (max-width: 667px) {
      padding: 8px;
      width: 100%;
    }
  }
  &_description {
    padding-left: 16px;
    width: 50%;
    @media (max-width: 667px) {
      padding: 8px;
      width: 100%;
    }
  }
  &_cpfc {
    display: flex;
    justify-content: space-between;
    margin: 32px 0;
    @media (max-width: 667px) {
      margin: 8px 0;
    }
  }
  @media (max-width: 667px) {
    width: 100%;
    flex-direction: column;
  }
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
  @media (max-width: 667px) {
    width: 150px;
    height: 40px;
    font-weight: 400;
  }
}
</style>
