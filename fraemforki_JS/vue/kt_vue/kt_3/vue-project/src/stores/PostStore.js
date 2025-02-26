import { ref, watch } from "vue";
import { defineStore } from "pinia";

let data = [
  {
    id: 1,
    title: " Сила – не в бабках. Ведь бабки – уже старые. ",
    comments: [
      { id: 1, text: "Безумно можно быть первым" },
      { id: 2, text: "ОА кто это сказал?" },
      { id: 3, text: "Глубокая мысль, согласен" },
      { id: 4, text: "Но без бабок сложновато..." },
    ],
  },
  {
    id: 2,
    title: " Я вообще делаю что хочу. Хочу импланты — звоню врачу.  ",
    comments: [
      { id: 1, text: "Очень научно и круто" },
      { id: 2, text: "Главное — здоровье!" },
      { id: 3, text: "Когда выйдет новый альбом?" },
    ],
  },
  {
    id: 3,
    title: " Работа — это не волк. Работа — ворк. А волк — это ходить.   ",
    comments: [
      { id: 1, text: "Логично" },
      { id: 2, text: "Теперь понятно, почему волки так много ходят" },
    ],
  },
  {
    id: 4,
    title: "  Делай, как надо. Как не надо, не делай.  ",
    comments: [
      { id: 1, text: "Я Ваш лютый фанат" },
      { id: 2, text: "Простая, но гениальная истина" },
    ],
  },
];

export const usePostStore = defineStore("posts", () => {
  let ls = JSON.parse(localStorage.getItem("posts"));
  let posts = ref(ls || data);

  let updatePosts = (post) => {
    let newPost = {
      id: Date.now(),
      title: post.title,
      comments: [],
    };

    posts.value.push(newPost);
  };

  let changePost = (id, newTitle) => {
    posts.value.filter((el) => el.id === id)[0].title = newTitle;
  };

  let addComm = (id, comm) => {
    const newComm = {
      id: Date.now(),
      text: comm,
    };
    posts.value.filter((el) => el.id === id)[0].comments.push(newComm);
  };

  let deleteComm = (postId, commentId) => {
    const post = posts.value.find((post) => post.id === postId);
    if (post) {
      post.comments = post.comments.filter((el) => el.id !== commentId);
    }
  };

  let deletePost = (id) => {
    posts.value = posts.value.filter((post) => post.id !== id);
  };

  watch(
    () => posts.value,
    () => {
      localStorage.setItem("posts", JSON.stringify(posts.value));
    },
    { deep: true }
  );

  return { posts, updatePosts, changePost, deleteComm, addComm, deletePost };
});
