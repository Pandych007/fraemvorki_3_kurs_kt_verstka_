<!-- <template>
  <h1>user</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from "vue";
let users = ref([
  { id: 1, name: Sergo },
  { id: 2, name: Maks },
  { id: 3, name: Andre },
]);

onMounted(() => {
  console.log(users.value);
});
</script> -->
<template>
  <div>
    <button @click="openModal">Добавить пользователя</button>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <h3>Добавить пользователя</h3>
        <input v-model="newUser.name" placeholder="Имя" />
        <input v-model="newUser.email" placeholder="Email" type="email" />
        <button @click="addUser">Добавить</button>
        <button @click="closeModal">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isModalOpen = ref(false);
    const newUser = ref({ name: "", email: "" });
    const users = ref([]);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
      newUser.value = { name: "", email: "" };
    };

    const addUser = () => {
      if (newUser.value.name && newUser.value.email) {
        users.value.push({ ...newUser.value });
        closeModal();
      }
    };

    return {
      isModalOpen,
      newUser,
      users,
      openModal,
      closeModal,
      addUser,
    };
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
</style>
