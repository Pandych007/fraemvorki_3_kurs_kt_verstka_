import { defineStore } from "pinia";
import { compile, computed, ref } from "vue";

export const useUsersStore = defineStore("users", () => {
  const users = [ref];

  // let userCount = computed(( => u))

  const fetchUsers = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    users.value = data.users;
  };

  return {
    users,
    fetchUsers,
  };
});
