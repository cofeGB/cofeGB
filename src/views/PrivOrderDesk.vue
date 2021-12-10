<template>
  <v-container fluid>
    <v-row align="center" dense>
      <v-col cols="6">
        <v-card>
          <v-card-title class="justify-center"> Заказ </v-card-title>
        </v-card>
        <PrivOrderList type="pending" />
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title class="justify-center"> В работе </v-card-title>
        </v-card>
        <PrivOrderList type="coocking" />
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
