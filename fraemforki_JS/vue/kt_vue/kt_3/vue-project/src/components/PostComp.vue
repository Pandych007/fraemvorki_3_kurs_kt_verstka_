<template>
  <div class="post-container">
    <h1>{{ title }}</h1>

    <div class="post-actions">
      <button class="btn-comments" @click="toggleComments">Комментарии</button>
      <button class="btn-edit" @click="toggleModal()">Изменить пост</button>
      <button class="btn-delete" @click="postStore.deletePost(id)">Удалить пост</button>
      <p class="comment-count">Кол-во комментариев - {{ comments.length }}</p>
    </div>

    <div class="comment-section" v-if="showComments">
      <div class="new-comment">
        <input type="text" v-model="newComment" />
        <button @click="postStore.addComment(id, newComment)">Добавить</button>
      </div>
      <div class="comment-list">
        <div class="comment-item" v-for="(comment, index) in comments" :key="index">
          <p>{{ comment.text }}</p>
          <button class="btn-remove" @click="postStore.deleteComment(id, comment.id)">
            Удалить
          </button>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <p>Напишите измененный текст:</p>
        <input type="text" v-model="newTitle" />
        <div class="modal-buttons">
          <button @click="postStore.changePost(id, newTitle)">Изменить</button>
          <button @click="toggleModal">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from "@/stores/PostStore";
import { defineProps, ref } from "vue";

let newComment = ref("");
let newTitle = ref("");

let showComments = ref(false);
let showModal = ref(false);

defineProps({
  id: Number,
  title: String,
  comments: Object,
});

let toggleModal = () => {
  showModal.value = !showModal.value;
};

let toggleComments = () => {
  showComments.value = !showComments.value;
};

const postStore = usePostStore();
</script>

<style>
.post-container {
  border: 2px solid #0094ff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fcfbfb;
}

.post-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.btn-comments {
  background-color: #28a745;
}

.btn-edit {
  background-color: #ff218b;
}

.btn-delete {
  background-color: #dc3545;
}

.comment-section {
  margin-top: 20px;
  border-top: 1px solid #ccc;
}

.new-comment {
  margin-top: 20px;
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.comment-item {
  display: flex;
  justify-content: space-between;
}

.btn-remove {
  background-color: #ff218b;
}

.btn-remove:hover {
  background-color: #690f3b;
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

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
}

.modal-buttons {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}
</style>
