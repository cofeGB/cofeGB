<template>
  <v-container fluid>
    <v-row align="center" dense>
      <v-col cols="6" align-self="start">
        <v-card>
          <v-card-title class="justify-center"> Заказ </v-card-title>
        </v-card>
        <PrivOrderList orderType="pending" />
      </v-col>
      <v-col cols="6" align-self="start">
        <v-card>
          <v-card-title class="justify-center"> В работе </v-card-title>
        </v-card>
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
