<template>
  <nav>
    <ul>

      <li class="col hov">
        <router-link :to='{ name: "home" }'>Home</router-link>
      </li>
      <li class="col" v-show="store.userData.logged">
        <router-link :to='{ name: "notes" }'>My Notes</router-link>
      </li>
      <li class="col" v-show="!store.userData.logged">
        <router-link :to='{ name: "register" }'>Register</router-link>
      </li>
      <li class="col" v-show="!store.userData.logged">
        <router-link :to='{ name: "login" }'>Login</router-link>
      </li>

      <li class="col" v-show="store.userData.logged">
        <router-link :to='{ name: "newNote" }'>New Note</router-link>
      </li>

      <li class="col" v-show="store.userData.logged">
        <router-link :to='{ name: "logout" }'>Logout</router-link>
      </li>

      <li class="col">
        <router-link :to='{ name: "about" }'>About</router-link>
      </li>
    </ul>
  </nav>
  <router-view />
  <footer>&copy; fmm.devs 2024</footer>
</template>

<script lang="ts" setup>
import { useAuthStore } from './store/auth';
const store = useAuthStore()
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
  background-color: lightblue;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    padding: 30px;
    list-style: none;

    li:hover {
      background-color: darkcyan;
    }
  }
}



footer {
  margin-top: 20px;
}
</style>
