<template>
  <v-list class="list" dark>
    <v-list-item-group class="list-order">
      <v-list-item class="list-item my-2 py-1">
        <span> История заказов доступна после авторизации. </span>
        <span> Перейти к авторизации? </span>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.list {
  background: none;
  border: 1px solid white;
  &-order {
    max-height: 300px;
  }
  &-item {
    min-height: fit-content;
    &-action {
      min-width: fit-content;
      align-items: center;
    }
  }
}
</style>
