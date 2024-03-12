import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
let app = createApp(App)
const router = createRouter({
history: createWebHistory(),
routes: routes,
})
app.use(router);
app.mount("#app")
