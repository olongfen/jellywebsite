import './assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {LOGO_FIRST_WORD} from "@/contants";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('LOGO_FIRST_WORD',LOGO_FIRST_WORD)
app.mount('#app')
