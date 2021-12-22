<template>
  <div>
    <tooltip content="Перейки к блюду" :disabled="disabled" color="secondery" text-color="#fff">
      <v-img
        class="selected-img"
        :src="selectedElement.img"
        @click="goToElement(selectedElement)"
      />
    </tooltip>
    <v-list class="selected-list">
      <v-list-item class="selected-description">
        <v-list-item-title class="pb-2">
          <span class="selected-description-title">
            {{ selectedElement.title }}
          </span>
        </v-list-item-title>
        <v-list-item-subtitle class="selected-description-subtitle py-2">
          <span v-for="(calories, idx) in selectedElement.calories" :key="idx">
            {{ calories.title }} : {{ calories.value }}
          </span>
        </v-list-item-subtitle>
        <v-list-item-content>
          <span class="selected-description-description">{{ selectedElement.description }}</span>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    selectedElement: {
      type: Object,
      default: () => {},
    },
    tooltipDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    disabled() {
      return this.tooltipDisabled;
    },
  },
  methods: {
    ...mapActions(['CLOSE_MODAL', 'GET_MENU']),
    goToElement(el) {
      this.GET_MENU(el.category);
      this.CLOSE_MODAL();
      this.$router.replace({
        path: `/menu/${el.category}/${el.guid}`,
        component: 'dish',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.selected {
  &-list {
    border-top: 4px solid $secondery;
  }
  &-img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
      filter: brightness(0.8);
    }
    @media (min-width: 300px) {
      height: 100px;
    }
    @media (min-width: 760px) {
      height: 200px;
    }
    @media (min-width: 1000px) {
      height: 300px;
    }
  }
  &-description {
    width: 100%;
    display: flex;
    flex-direction: column;
    &-title {
      font-size: 20px;
      font-weight: bold;
    }
    &-subtitle {
      font-size: 16px;
      font-weight: bold;
      display: flex;
      width: 100%;
      color: $secondery !important;
      justify-content: space-between;
      border-top: 2px solid $secondery;
      border-bottom: 2px solid $secondery;
    }
    &-description {
      font-weight: 16px;
    }
  }
}
</style>
