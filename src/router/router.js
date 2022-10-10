import MyMain from "@/pages/MyMain";
import {createRouter, createWebHistory} from "vue-router";
import AboutPage from "@/pages/AboutPage";
import PostsPage from "@/pages/PostsPage";
import PostPage from "@/pages/PostPage";

const routes = [
    {
        path: '/',
        component: MyMain
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: PostPage
    }
]


export const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})
