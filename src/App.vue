<template>
  <Nav-Bar></Nav-Bar>

  <router-view />

  <footer>&copy; fmm.devs 2024</footer>
</template>

<script lang="ts" setup>
import NavBar from './components/NavBar.vue';

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  // background-color: lightblue;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }

    &:hover {
      color: #42b983;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    padding: 30px;
    list-style: none;

    li {

      border-radius: $radius;
    }


  }
}



footer {
  margin-top: 20px;
}
</style>
