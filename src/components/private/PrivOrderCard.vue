<template>
  <div class="my-card">
    Время заказа <br />
    Номер заказа<br />
    Детали заказа<br />
    [В работу]/[Закрыть]
  </div>
</template>

<script>
export default {
  name: 'PrivOrderCard',
};
</script>

<style lang="scss" scoped>
.my-card {
  box-sizing: border-box;
  border: 1px solid red;
  background-color: #fff;
  margin: 8px;
}
</style>
