<template>
  <div class="app">
    <h1 class="title">Faster Payments</h1>
    <CardForm @addCard="cards.push" />
    <DataTable :cards="cards" />
  </div>
</template>

<script>
import CardForm from "./components/CardForm.vue";
import DataTable from "./components/DataTable.vue";

export default {
  components: { CardForm, DataTable },
  data: () => ({ cards: [] }),
};
</script>

<style>
.app {
  font-family: "Arial", sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
.title {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1c54b2;
}
</style>
