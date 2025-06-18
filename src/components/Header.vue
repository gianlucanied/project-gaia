<template>
  <header class="header">
      <router-link to="/">Gaia Grisanti</router-link>
      <router-link to="/about">About</router-link>
  </header>
</template>

<style scoped>
header {
  font-family: 'Andale Mono', sans-serif;
  font-size: 1.5rem;
}

.header {
  width: 100%;
  background-color: black;
  display: flex;
  justify-content:space-between;
}

a {
  text-decoration: none;
  color: white;
  padding: 20px;
}

@media (max-width: 768px) {
  a {
    padding: 10px;
    font-size: 20px;
  }
}
</style>
