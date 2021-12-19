<template>
  <v-container fluid style="background: #d9d9d9" class="pa-0">
    <v-row no-gutters>
      <v-col cols="6" align-self="start">
        <v-card class="rounded-0" elevation="0">
          <v-card-title class="justify-start ml-4"> Актуальные заказы </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" align-self="start">
        <v-card class="rounded-0" elevation="0">
          <v-card-title class="justify-end mr-4"> Заказы в работе </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mx-4" color="#7d7d7d"></v-divider>
    <v-row align="stretch" no-gutters class="flex-nowrap">
      <v-col cols="6" style="border-right: 5px solid #7d7d7d">
        <PrivOrderList orderType="pending" />
      </v-col>
      <v-col cols="6" style="border-left: 5px solid #7d7d7d">
        <PrivOrderList orderType="cooking" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PrivOrderDesk',
  components: {
    PrivOrderList: () => import('../components/private/PrivOrderList.vue'),
  },
};
</script>
