<template>
  <div id="app">
    <header class="header">
      <h1>Товары магазина</h1>
    </header>
    <main>
      <ProductsList />
    </main>
  </div>
</template>

<script>
import ProductsList from "./components/ProductsList.vue";

export default {
  name: "App",
  components: {
    ProductsList,
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f4f4f4;
  padding: 0;
  margin: 0;
}

.header {
  background-color: #27ae60;
  color: white;
  text-align: center;
  padding: 20px;
}

header h1 {
  font-size: 2.5em;
  margin: 0;
}

main {
  padding: 20px;
}
</style>
