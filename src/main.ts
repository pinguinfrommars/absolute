import './assets/main.css'

import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import { createPinia } from 'pinia'
import router from './app/providers/router'
import App from './App.vue'
import 'vue-final-modal/style.css'

const app = createApp(App)

const vfm = createVfm()

app.use(createPinia())
app.use(router)
app.use(vfm)

app.mount('#app')
