import Main from "@/pages/MyMain";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    }
]


export const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})
