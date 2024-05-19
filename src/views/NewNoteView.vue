<template>

    <form>
        <h1>New Note</h1>

        <div class="mb-3">
            <label for="title" class="fs-5 text mb-2">Title</label>
            <textarea v-model="title" class="form-control" id="title" rows="3" required></textarea>

            <label for="content" class="fs-5 text mb-2">Content</label>

            <textarea v-model="content" class="form-control" id="content" rows="8" required></textarea>

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
let title = ref("")
const router = useRouter()

const addNote = async () => {

    const service = new AuthService()
    const store = useAuthStore()
    await service.postNote(title.value, content.value, store.userData.jwt)
    title.value = ""
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