<template>
  <div>
    <div class="post-header">
      <h1>Создайте новый пост!</h1>
      <div class="post-input-bar">
        <input type="text" v-model="title" />
        <button type="submit" @click="openModal">Отправить</button>
      </div>
    </div>

    <PostComp
      v-for="(item, index) in postStore.posts"
      :key="index"
      :title="item.title"
      :comments="item.comments"
      :id="item.id"
    ></PostComp>

    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal-box">
        <p>Вы действительно хотите добавить этот пост?</p>
        <p class="modal-post-text">"{{ title }}"</p>
        <div class="modal-actions">
          <button @click="confirmPost">Добавить</button>
          <button @click="closeModal">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostComp from "./PostComp.vue";
import { usePostStore } from "@/stores/PostStore";

let title = ref("");
let isModalOpen = ref(false);
const postStore = usePostStore();

const openModal = () => {
  if (title.value.trim() !== "") {
    isModalOpen.value = true;
  }
};

const closeModal = () => {
  isModalOpen.value = false;
};

const confirmPost = () => {
  postStore.updatePosts({ title: title.value });
  title.value = "";
  closeModal();
};
</script>

<style>
.post-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 2px solid #95b9d3;
  border-radius: 20px;
  padding: 20px;
  background-color: #fcfbfb;
}

.post-input-bar {
  display: flex;
}

.post-input-bar input {
  width: 100%;
  outline: 1px solid black;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-box {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
}

.modal-post-text {
  font-style: italic;
  margin: 10px 0;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.modal-actions button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-actions button:first-child {
  background-color: #007bff;
  color: white;
}

.modal-actions button:first-child:hover {
  background-color: #0056b3;
}

.modal-actions button:last-child {
  background-color: #dc3545;
  color: white;
}

.modal-actions button:last-child:hover {
  background-color: #bd2130;
}
</style>
