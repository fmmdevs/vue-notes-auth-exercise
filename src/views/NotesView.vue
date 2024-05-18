<template>
    <h1>My notes</h1>
    <div v-if="show">
        <div v-for="(note, index) in store.userData.notes" :key="index">
            <div id="card" class="card text-center  p-5">
                <div class="card-header">
                    {{ index + 1 }}

                </div>
                <div class="card-body">
                    <h2 class="card-title">{{ note.content }}</h2>
                </div>

                <div class="card-footer text-body-secondary ">

                    <!-- <p>Updated : {{ note.updated_at }} </p>  -->

                    {{ note.created_at.split('T')[0] }} | {{ note.created_at.split('T')[1].split(".")[0] }}
                    <p>note id: {{ note.id }}</p>

                </div>
                <button class="btn btn-danger w-50 mx-auto mt-4" @click.prevent="deleteNote(note.id)">Delete</button>
                <button v-show="!toggleUpdate" class="btn btn-warning w-50 mx-auto mt-1"
                    @click.prevent="togglerUpdate">Update Dialog</button>

                <form v-show="toggleUpdate">
                    <div class="mb-3">
                        <textarea v-model="note.content" class="form-control" id="exampleFormControlTextarea1"
                            rows="3"></textarea>


                        <button class="btn btn-success w-50 mx-auto mt-1"
                            @click.prevent="updateNote(note.id, note.content)">Save</button>
                        <button class="btn btn-secondary w-50 mx-auto mt-1" @click.prevent="togglerUpdate">back</button>
                    </div>
                </form>



            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store/auth';
import AuthService from '@/service/AuthService';
import { ref, onBeforeMount } from 'vue'
// import { useRouter } from 'vue-router'

const service = new AuthService();
const store = useAuthStore()
// const router = useRouter()

let notes = ref()
let show = ref(false)

console.log(store.userData.jwt)
onBeforeMount(async () => {
    notes.value = await service.getNotes(store.userData.jwt)
    show.value = true
})

const deleteNote = async (note: number) => {
    // alert(note)
    await service.deleteNote(note)
        .then(() => {
            notes.value = service.getNotes(store.userData.jwt)
        })
}

let toggleUpdate = ref(false)
const togglerUpdate = () => {
    toggleUpdate.value = !toggleUpdate.value
}


const updateNote = async (note: number, newContent: string) => {
    await service.updateNote(note, newContent)
        .then(() => {
            notes.value = service.getNotes(store.userData.jwt)
            togglerUpdate()
        })
}

</script>

<style scoped>
.card {
    width: 80%;
    margin: 20px auto;
    border-radius: 30px;
    max-width: 400px;
    min-width: 300px;
}
</style>