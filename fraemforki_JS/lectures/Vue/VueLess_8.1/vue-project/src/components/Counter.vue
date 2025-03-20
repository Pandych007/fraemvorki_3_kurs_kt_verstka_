<template>
  <h2>Counter</h2>
  <h3>{{ counterStore.count }}</h3>
  <h2>Computed: double</h2>
  <h3>{{ counterStore.doubleCount }}</h3>
  <!-- <button @click="incrementHandle">increment</button> -->
  <button @click="decincrement">increment</button>
  <button @click="addByPrompt">increment2</button>
  <button @click="asyncRandomNun">async Random Nun</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { onMounted } from "vue";

const counterStore = useCounterStore();
const decincrement = () => {
  counterStore.decincrement();
};

// const incrementHandle = () => {
//   counterStore.increment();
// };
const addByPrompt = () => {
  counterStore.addByPrompt();
};
const asyncRandomNun = () => {
  counterStore.asyncRandomNun();
};

// onMounted = () => {
//   counterStore.asyncRandomNun;
// };
</script>
