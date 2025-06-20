<template>
  <header class="header">
      <router-link to="/" data-aos="fade-right" data-aos-duration="2000">Gaia Grisanti</router-link>
      <router-link to="/about" data-aos="fade-left" data-aos-duration="2000">About</router-link>
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
