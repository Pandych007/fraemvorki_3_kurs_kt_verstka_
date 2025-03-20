import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  function decincrement() {
    count.value--;
  }

  function addByPrompt() {
    const value = prompt("Введите число");
    if (isNaN(value)) {
      alert("Введенное значение не  число");
    } else {
      count.value = +value;
    }
  }

  async function asyncRandomNun() {
    let url =
      "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";
    let res = await fetch(url);
    let data = await res.json();
    count.value = data;
  }

  return { count, doubleCount, increment, decincrement, addByPrompt, asyncRandomNun };
});
