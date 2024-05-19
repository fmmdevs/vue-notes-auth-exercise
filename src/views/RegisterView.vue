<template>
    <div class="container">

        <form>
            <h1>Register</h1>

            <div class="mb-3">
                <label for="name" class="form-label">Full name</label>
                <input v-model="name" type="text" class="form-control" id="name">
            </div>
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

            <button @click.prevent="register" type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AuthService from '@/service/AuthService';

let email = ref('')
let password = ref('')
let name = ref('')

const register = async () => {
    const service = new AuthService()

    service.register(name.value, email.value, password.value)
}


</script>

<style lang="scss" scoped>
form {
    max-width: 500px;
}
</style>