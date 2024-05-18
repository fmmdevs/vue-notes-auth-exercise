import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import NotesView from '@/views/NotesView.vue'
import NewNoteView from '@/views/NewNoteView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { useAuthStore } from '@/store/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView,
    meta: {
      requireAuth:true
    }
  },
  {
    path: '/notes',
    name: 'notes',
    component: NotesView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/new-note',
    name: 'newNote',
    component: NewNoteView,
    meta: {
      requireAuth :true
    }
  },
  {
    path: '/register',
    name: 'register',
    component:RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  const auth = store.userData.logged
  // to : a donde queremos ir
  // from : de donde venimos
  // next : destino final
  const needAuth = to.meta.requireAuth
  if (needAuth && !auth) {
    // Si necesita autorizacion y no tiene, destino final: login
    if (from.name == "newNote" && to.name=="newNote") {
      next('notes')
    }
    next('login')
  } else {
    // en caso contrario lo dejamos que vaya a donde quiera
    next()
  }
})
export default router
