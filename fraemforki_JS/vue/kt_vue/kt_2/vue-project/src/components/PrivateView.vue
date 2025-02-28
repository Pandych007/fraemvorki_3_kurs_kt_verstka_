<template lang="">
  <div>
    <div>
      <h2 v-if="this.error !== ''">Authentication Problem</h2>
      <div class="user" v-if="user">
        <h2>My profile</h2>
        <div class="info">
          <div class="fields">
            <p>Username:{{ this.user.username }}</p>
            <p>Name:{{ this.user.firstName }}</p>
            <p>Lastnane:{{ this.user.lastName }}</p>
            <p>Gender:{{ this.user.gender }}</p>
            <p>Email:{{ this.user.email }}</p>
          </div>
          <img class="avatar" :src="this.user.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      user: {},
    };
  },
  methods: {},
  mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
      return;
    }

    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.message ? (this.error = data.message) : (this.user = data)
      );
  },
};
</script>

<style>
.user {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 500px;
}

.info {
  display: flex;
}

.fields p {
  width: fit-content;
  list-style: none;
  display: flex;
  padding-inline: 20px;
  border: 1px solid black;
  border-radius: 50px;
}

.avatar {
  height: 243px;
  width: 243px;
  border-radius: 50%;
}
</style>
