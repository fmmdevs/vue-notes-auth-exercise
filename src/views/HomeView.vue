<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Notes App!" />
    <img alt="Notes App logo" src="../assets/note.jpeg">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss" scoped>
img {
  width: 95%;
  margin: auto;
}
</style>
