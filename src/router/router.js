import MyMain from "@/pages/MyMain";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";

const routes = [
    {
        path: '/',
        component: MyMain
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    }
]


export const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})
