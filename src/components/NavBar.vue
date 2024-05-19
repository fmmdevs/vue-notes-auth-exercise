<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">

        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto pr-0 mb-2 mb-lg-0 ">
                    <li>
                        <router-link :to="{ name: 'home' }"> Home</router-link>
                    </li>

                    <li v-show="store.userData.logged">
                        <router-link :to='{ name: "notes" }'>My Notes</router-link>

                    </li>
                    <li v-show="!store.userData.logged">
                        <router-link :to='{ name: "register" }'>Register</router-link>
                    </li>

                    <li class="nav-item" v-show="!store.userData.logged">
                        <router-link :to='{ name: "login" }'>Login</router-link>

                    </li>
                    <li class="nav-item" v-show="store.userData.logged">
                        <router-link :to='{ name: "newNote" }'>New Note</router-link>

                    </li>
                    <li class="nav-item" v-show="store.userData.logged">
                        <router-link :to='{ name: "logout" }'>Logout</router-link>

                    </li>
                    <li class="nav-item">
                        <router-link :to='{ name: "about" }'>About</router-link>

                    </li>
                </ul>
                <form v-show="store.inNotes" class="d-flex" role="search">
                    <input v-show="store.inNotes" class="form-control me-2" type="search" placeholder="Search"
                        aria-label="Search">
                    <button v-show="store.inNotes" class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { useAuthStore } from '../store/auth'
const store = useAuthStore()
</script>

<style scoped>
li {
    padding: 10px;
}
</style>