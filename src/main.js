import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import naive from 'naive-ui'
import messagePlugin from '@/requests/messagePlugin.js';
import "@/styles/index.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)
app.use(messagePlugin);

app.mount('#app')
