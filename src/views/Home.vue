<template>
  <div>
    <h1 class="brandName">{{ GLOBAL_CONST.brandName }}</h1>
    <div class="baners">
      <div class="slider_stock">
        <StockBaner />
      </div>
      <div class="slider_stock">
        <DrinkBaner />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StockBaner from '@/components/Baners/StockBaner.vue';
import DrinkBaner from '@/components/Baners/DrinkBaner.vue';
export default {
  name: 'Home',
  components: {
    StockBaner,
    DrinkBaner,
  },
  data: () => ({
    showNavMenu: false,
  }),
  computed: {
    ...mapGetters(['FOOD_CONSTRUCTOR', 'GLOBAL_CONST']),
  },
};
</script>

<style lang="scss" scoped>
.baners {
  display: flex;
  justify-content: space-around;
  align-items: start;
  height: 60vh;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    height: 500px;
  }
}
.slider_stock {
  width: 45vw;
  min-width: 600px;
}
</style>
