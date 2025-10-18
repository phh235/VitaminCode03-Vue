import "./assets/main.css"

import { createApp } from "vue"
// pinia
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)
// pinia
const pinia = createPinia()

app.use(router)
// pinia
app.use(pinia)

app.mount("#app")
