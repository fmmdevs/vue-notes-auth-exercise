<template>

    <form>
        <h1>New Note View</h1>

        <div class="mb-3">
            <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button class="btn btn-primary mt-3" @click.prevent="addNote">Add Note</button>
        </div>
    </form>
</template>

<script lang="ts" setup>

import { useAuthStore } from '@/store/auth';
import AuthService from '@/service/AuthService';
import { ref } from 'vue'
// Para redirigir
import { useRouter } from 'vue-router'

let content = ref("")
const router = useRouter()

const addNote = async () => {

    const service = new AuthService()
    const store = useAuthStore()
    await service.postNote(content.value, store.userData.jwt)
    content.value = ""
    router.push({ name: 'notes' })

}
</script>

<style scoped>
form {
    width: 80%;
    margin: 20px auto;
    border-radius: 30px;
    max-width: 400px;
    min-width: 300px;
}
</style>