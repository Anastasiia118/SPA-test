import { createApp } from 'vue'
import App from './App.vue'
import '/src/assets/main.css'
import {store} from './store/items'

const app = createApp(App)
app.use(store)

app.mount('#app')
