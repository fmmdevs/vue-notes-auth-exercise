import { defineStore } from "pinia"
import INote from "@/interfaces/INote"
// import {Ref} from 'vue'
export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            userData:{
             jwt: "",
            logged: false,
            email: "",
            notes:[] as INote[]
            },
            // for showing search bar only in /notes
            inNotes:false
           
        }
    },

    getters: {
        
    },

    actions: {
        logout() {
            this.userData.logged = false
            this.userData.jwt = ""
            this.userData.email = ""
            this.userData.notes=[] as INote[]
        }
        
    },
    persist: true
})