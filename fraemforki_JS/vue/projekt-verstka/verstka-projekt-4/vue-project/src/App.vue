<template>
  <nav>
    <router-link to="/">All recipes</router-link>
    <router-link to="/favorites">Favorite</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  display: flex;
  gap: 10px;
  background: yellow;
  padding: 10px;
}
</style>
