
import {createRouter, createWebHistory} from 'vue-router'

import Home from './view/Home.vue'
import Features from "./view/Features.vue";
import Login from "./view/Login.vue";
import Register from "./view/Register.vue";
import Contact from "./view/Contact.vue";
import NotFound from "./view/NotFound.vue";
import App from './view/App.vue'

const routes = [
    { path: '/:pathMatch(.*)*', name: "NotFound", component: NotFound },
    { path: '/', component: Home },
    { path: '/features', component: Features},
    { path: '/login', component: Login, name: 'Login'},
    { path: '/register', component: Register},
    { path: '/contact', component: Contact},
    { path: '/app', component: App}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})