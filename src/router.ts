
import {createRouter, createWebHistory} from 'vue-router'

import Home from './view/Home.vue'
import Login from "./view/Login.vue";
import Register from "./view/Register.vue";
import NotFound from "./view/NotFound.vue";
import App from './view/App.vue'

const routes = [
    { path: '/:pathMatch(.*)*', name: "NotFound", component: NotFound },
    { path: '/', component: Home },
    { path: '/login', component: Login, name: 'Login'},
    { path: '/register', component: Register},
    { path: '/app', component: App}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})