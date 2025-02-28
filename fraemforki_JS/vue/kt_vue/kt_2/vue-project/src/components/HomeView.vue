<template lang="">
  <div class="main">
    <div class="home">
      <div class="text">
        <h1>Home page</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <RouterLink to="/login">
          <button class="auth-button">Authorization</button>
        </RouterLink>
      </div>
      <img src="../assets/sonkun.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home {
  margin-top: 75px;
  display: flex;
  width: 80%;
  margin-inline: auto;
  justify-content: space-between;
}

.text {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 497px;
}

.home img {
  width: 301px;
  height: 290px;
}

.main {
  height: 545px;
}

.auth-button {
  border-radius: 2px;
  background: rgb(255, 100, 100);
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  outline: none;
  border: none;
  width: 208px;
  height: 43px;
}
</style>
