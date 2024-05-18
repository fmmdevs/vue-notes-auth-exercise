// Login vs backend
import IUser from '@/interfaces/IUser'
import { Ref, ref } from 'vue'
import { useAuthStore } from '@/store/auth'

class AuthService{
    // user data
    private user:IUser
    // note content
    private content: Ref<string>
    // message errors
    private errors: Ref<Array<string>>
    // status request
    private status: Ref<boolean>
    // message
    private message:Ref<string>
    // base url
    private url: string

    constructor() {
        this.user = {
            name: ref(''),
            email: ref(''),
            logged: ref(false),
            jwt: ref(''),
            notes:ref([])
        }
        this.content = ref("")
        this.errors = ref([])
        this.status = ref(false)
        this.message= ref('')
        this.url = "http://vue-server.es/api"
    }

    getJwt() {
        return this.user.jwt
    }
    
    getName() {
        return this.user.name
    }

    getEmail() {
        return this.user.email
    }

    getError() {
        return this.errors
    }

    getStatus() {
        return this.status
    }

    async login(userEmail: string, userPassword: string) {
        try {
            const loginUrl = this.url + "/auth/login"
            const res = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userEmail,
                    password:userPassword
                })
            })

            const response = await res.json()
            console.log(response)
            if (response.status) {
                
                // alert(response.message)
                // Guardamos respuesta en pinia store
                const store = useAuthStore()
                store.userData.jwt = response.token
                store.userData.email = userEmail
                store.userData.logged=true
           
            } else {
                alert(response.message)
            }

        } catch (error) {
            if (error instanceof Error) {
                alert("Error "+ error.message)
            } else {
                alert("Error : An unknown error occurred")
            }
        }
    }

    async getNotes(jwt:string) {
        try {
            const notesUrl = this.url+"/note"
            const res = await fetch(notesUrl, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer "+ jwt
                }
            })
              if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
           
            const response = await res.json()
            console.log(res)
            console.log(response)
            const store = useAuthStore()
            store.userData.notes=response
            this.user.notes.value=response

            

        } catch (error) {
            if (error instanceof Error) {
                alert("Error "+ error.message)
            } else {
                alert("Error : An unknown error occurred")
            }
        }
    }

    async postNote(newContent: string, jwt:string) {
        
        try {
            
             const postNoteUrl = this.url + "/note"
             const res = await fetch(postNoteUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer '+jwt
                },
                body: JSON.stringify({
                    content: newContent
                })
             })
            
             console.log(res)

            const response = await res.json()
            console.log(response)

            if (response.message =="Success") {
                
                alert(response.message)
              
           
            } else {
                alert(response.message)
            }


        } catch (error) {
            if (error instanceof Error) {
                alert("Error " + error.message)
            } else {
                alert("Error : An unknown error occurred")
            }
        }
    }

     async register(userName:string, userEmail: string, userPassword: string) {
        try {
            const registerUrl = this.url + "/auth/register"
            const res = await fetch(registerUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                    password:userPassword
                })
            })
    // "status": true,
    // "message": "User Created Successfully",
    // "token": "38|ZbPJlL2mCZLjZEG95kDZFzloytMMbpcjWeewFTrL"
            const response = await res.json()
            console.log(response)
            if (response.status) {
                
                alert(response.message+ ", now you can log in!")
                
                // Guardamos respuesta en pinia store
             
           
            } else {
                alert(response.message)
            }

        } catch (error) {
            if (error instanceof Error) {
                alert("Error "+ error.message)
            } else {
                alert("Error : An unknown error occurred")
            }
        }
     }
    
    async deleteNote(idNote: number) {
        try {
            const store = useAuthStore()
            const deleteUrl = this.url+"/delete/"+idNote
            const res = await fetch(deleteUrl, {
                method: 'DELETE',
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+store.userData.jwt
                }
            })
            const response = await res.json()
            // console.log(response)
            alert(response.message)

        } catch (error) {
            if (error instanceof Error) {
                alert("Error "+ error.message)
            } else {
                alert("Error : An unknown error occurred")
            }
        }
    }

    async updateNote(idNote: number, newContent: string) {
        try {
            const store = useAuthStore()
            const updateUrl = this.url + "/update/" + idNote
            const res = await fetch(updateUrl,
                {
                    method: 'PUT',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+store.userData.jwt
                    },
                    body: JSON.stringify({
                     content: newContent
                 })
                    
                }
            )
            const response = await res.json()
            console.log(response)

            alert(response.message)

        }  catch (error) {
            if (error instanceof Error) {
                alert("Error "+ error.message)
            } else {
                alert("Error : An unknown error occurred")
            }
        }
    }
}

export default AuthService