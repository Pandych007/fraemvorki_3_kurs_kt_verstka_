<template>
  <SimpleSlot>
    <h1>Ferst exsample slot!</h1>
  </SimpleSlot>
  <SimpleSlot>
    <h2 class="blue">Second exsample slot!</h2>
  </SimpleSlot>
</template>

<script>
import SimpleSlot from "./components/SimpleSlot.vue";
export default {
  components: {
    SimpleSlot,
  },
};
</script>

<style scoped>
.blue {
  color: blue;
  padding: 5px;
  border: 1px solid;
}
</style>
