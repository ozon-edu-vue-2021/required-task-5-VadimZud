<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Товары</router-link>
      <router-link to="/cart">Корзина</router-link>
      <router-link to="/favourites">Избранное</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("loadProducts");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}

#nav {
  display: flex;
  gap: 10px;
}
</style>
