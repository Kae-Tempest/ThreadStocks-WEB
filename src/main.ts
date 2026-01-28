import { createApp } from 'vue'
import './style.css'
import Main from './Main.vue'
import {router} from "./router.ts";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(Main)
app.use(pinia)
app.use(router)
app.mount('#app')