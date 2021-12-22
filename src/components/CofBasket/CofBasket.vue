<template>
  <Modal :activator="basket" @close="CLOSE_MODAL()">
    <template #content>
      <v-flex class="classes">
        <CofBasketHeader />
        <CofBasketStatusBar :order="QUICK_ORDER" />
        <v-flex class="pa-3 content">
          <v-row>
            <v-col cols="12" md="6" lg="4">
              <CofBasketOrderList
                :tooltip-disabled="tooltipDisabled"
                @selectElement="selectElement"
              />
              <CofDeliveryFormOrder :hide-btn="'basket'" :tooltip-disabled="tooltipDisabled" />
            </v-col>
            <v-col v-if="QUICK_ORDER.length" cols="12" md="6" lg="4" class="selected">
              <CofBasketDiscription
                :tooltip-disabled="tooltipDisabled"
                :selected-element="selectedElement"
              />
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <CofBasketPastOrdersList />
            </v-col>
          </v-row>
        </v-flex>
      </v-flex>
    </template>
  </Modal>
</template>

<script>
import { mapGetters } from 'vuex';
import CofDeliveryFormOrder from '@/components/CofDelivery/CofDeliveryFormOrder.vue';
import CofBasketOrderList from './CofBasketOrderList.vue';
import CofBasketDiscription from './CofBasketDiscription.vue';
import CofBasketStatusBar from './CofBasketStatusBar.vue';
import CofBasketPastOrdersList from './CofBasketPastOrdersList.vue';
import CofBasketHeader from './CofBasketHeader.vue';

export default {
  components: {
    CofDeliveryFormOrder,
    CofBasketOrderList,
    CofBasketDiscription,
    CofBasketStatusBar,
    CofBasketPastOrdersList,
    CofBasketHeader,
  },
  data() {
    return {
      selectedEl: {},
      tooltipDisabled: false,
    };
  },
  computed: {
    ...mapGetters(['QUICK_ORDER', 'MODAL_NAME']),
    disabled() {
      return this.tooltipDisabled;
    },
    selectedElement: {
      get() {
        return this.selectedEl;
      },
      set(v) {
        this.selectedEl = v;
      },
    },
    basket() {
      return this.MODAL_NAME === 'basket';
    },
  },
  methods: {
    selectElement(v) {
      this.selectedEl = v;
    },
    handleResize() {
      if (window.innerWidth < 1010) {
        this.tooltipDisabled = true;
      }
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.classes {
  background: rgba(86, 71, 66, 0.95) !important;
  min-height: 100% !important;
}
</style>
