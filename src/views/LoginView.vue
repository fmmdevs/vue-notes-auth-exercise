<template>
    <div v-if="!store.userData.logged" class="container">

        <h1>Login</h1>
        <form>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
            </div>

            <button @click.prevent="login" type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

    <div v-if="store.userData.logged" class="container">
        <h1>{{ store.userData.email }}</h1>
        <h2>Autenticado</h2>
        <!-- <h3>Bear Token : {{ store.userData.jwt }}</h3> -->
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AuthService from '@/service/AuthService';
import { useAuthStore } from '@/store/auth';

let password = ref('')
let email = ref('')
const store = useAuthStore()

const login = async () => {
    const auth = new AuthService();
    await auth.login(email.value, password.value)
    password = ref('')
    email = ref('')
}

</script>

<style lang="scss" scoped>
.container {
    @include theme(lightgreen)
}
</style>