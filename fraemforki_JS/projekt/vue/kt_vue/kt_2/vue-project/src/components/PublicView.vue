<template lang="">
  <div>
    <ul class="list-user">
      <li class="user-card" v-for="user in users">
        <p class="user-name">
          {{ `${user.firstName} ${user.lastName} ${user.maidenName}` }}
        </p>
        <p class="user-email">{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => (this.users = data.users));
  },
};
</script>

<style>
.list-user {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-inline: auto;
  align-items: center;
}

.user-card {
  width: 402px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid black;
  border-radius: 50px;
}

.user-name {
  text-align: center;
}

.user-email {
  text-align: center;
}
</style>
