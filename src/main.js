import { createApp } from 'vue'
import App from './App.vue'
import Table from "./components/Table.vue"

const app = createApp(App)
app.component('Table', Table)
app.mount('#app')
