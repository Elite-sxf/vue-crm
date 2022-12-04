<template>
  <div id="app">
    <!-- <router-link to="/">1</router-link> -->
    <!-- <router-link to="/login">2</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
* {
  list-style:none;
}
</style>
