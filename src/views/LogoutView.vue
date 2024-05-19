<template>
    <div v-if="!store.userData.logged" class="container">
        <h1>Logout succesfully</h1>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store/auth';

const store = useAuthStore()
store.logout()

</script>

<style lang="scss" scoped>
.container {
    background-color: darkgray;
    height: 30vh;
    color: whitesmoke;
    @include flex();
}
</style>