<template>
    <h1>My notes</h1>
    <div v-if="show">
        <div v-for="(note, index) in store.userData.notes" :key="index">
            <div id="card" class="card text-center  p-5">
                <div class="card-header">
                    <h2 class="card-title">{{ note.title }}</h2>

                </div>
                <div class="card-body p-5">
                    <p class="card-text">{{ note.content }}</p>
                </div>

                <div class="card-footer text-body-secondary ">

                    <!-- <p>Updated : {{ note.updated_at }} </p>  -->
                    <p>{{ index + 1 }}</p>
                    <p v-show="details">{{ note.created_at.split('T')[0] }} | {{
                        note.created_at.split('T')[1].split(".")[0] }}</p>
                    <p v-show="details">{{ note.created_at.split('T')[0] }} | {{
                        note.updated_at.split('T')[1].split(".")[0] }}</p>
                    <p v-show="details">note id: {{ note.id }}</p>

                </div>

                <button class="btn btn-secondary  w-50 mx-auto mt-4" v-show="!details"
                    @click.prevent="togglerDetails">Show Details</button>
                <button class="btn btn-secondary  w-50 mx-auto mt-1" v-show="details"
                    @click.prevent="togglerDetails">Hide
                    Details</button>
                <button class="btn btn-danger w-50 mx-auto mt-1" @click.prevent="deleteNote(note.id)">Delete</button>
                <button v-show="!toggleUpdate" class="btn btn-warning w-50 mx-auto mt-1"
                    @click.prevent="togglerUpdate">Edit Note</button>


                <form v-show="toggleUpdate" class="p-5 ">
                    <label for="title-update" class="fs-5 text mb-2">Title</label>
                    <textarea v-model="note.title" class="form-control" id="title-update" rows="3"></textarea>

                    <label for="content-update" class="fs-5 text mb-2 mt-2">Content</label>

                    <textarea v-model="note.content" class="form-control" id="content-update" rows="8"></textarea>


                    <button class="btn btn-success w-50 mx-auto mt-1"
                        @click.prevent="updateNote(note.id, note.title, note.content)">Save</button>

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


const updateNote = async (note: number, newTitle: string, newContent: string) => {
    await service.updateNote(note, newTitle, newContent)
        .then(() => {
            notes.value = service.getNotes(store.userData.jwt)
            togglerUpdate()
        })
}

let details = ref(false)
const togglerDetails = () => {
    details.value = !details.value
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