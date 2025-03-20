<template>
  <h2>User List</h2>
  <div>
    <div class="user_card" v-for="user in users" :key="user">
      {{ user.firstname }}
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/users";
import {onMounted} from 'vue'
const userStore = useCounterStore();

onMounted(( =>
    userStore.fetchUsers()
))
</script>

<style scoped>
.user_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border: 1px solid black;
  border-radius: 16px;
  padding: 5px;
  margin: 5px 250px;
}
</style>
