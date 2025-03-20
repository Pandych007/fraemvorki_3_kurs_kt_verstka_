<template>
  <div class="app">
    <h1 class="title">Faster Payments</h1>
    <CardForm />
  </div>
</template>

<script>
import CardForm from "./components/CardForm.vue";

export default {
  components: { CardForm },
  // data: () => ({ cards: [] }),
};
</script>

<style></style>
