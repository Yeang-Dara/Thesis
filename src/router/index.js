import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddNewThesis from '@/views/AddNewThesis'
import EditThesis from '@/views/EditThesis'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/addnewthesis',
    name: 'addnewthesis',
    component: AddNewThesis
  },
  {
    path: '/editthesis',
    name: 'editthesis',
    component: EditThesis
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
