import {createWebHistory, createRouter} from "vue-router";
import MainPage from "@/views/MainPage.vue";
import NoticeBoardPage from "@/views/board/NoticeBoardPage.vue";
import EventBoardPage from "@/views/board/EventBoardPage.vue";
import CommunityBoardPage from "@/views/board/CommunityBoardPage.vue";
import KeyboardProductPage from "@/views/product/KeyboardProductPage.vue";
import KeycapProductPage from "@/views/product/KeycapProductPage.vue";
import ArtisanProductPage from "@/views/product/ArtisanProductPage.vue";
import EtcProductPage from "@/views/product/EtcProductPage.vue";
import PostBoardPage from "@/views/board/PostBoardPage.vue";
import PostProductPage from "@/views/product/PostProductPage.vue";
import PostUserPage from "@/views/user/PostUserPage.vue";
import DetailUserPage from "@/views/user/DetailUserPage.vue";

const routes = [
    {
        path: "/",
        name: MainPage,
        component: MainPage,
    },
    {
        path: "/board/post",
        name: PostBoardPage,
        component: PostBoardPage,
    },
    {
        path: "/board/notice",
        name: NoticeBoardPage,
        component: NoticeBoardPage,
    },
    {
        path: "/board/event",
        name: EventBoardPage,
        component: EventBoardPage,
    },
    {
        path: "/board/community",
        name: PostProductPage,
        component: PostProductPage,
    },
    {
        path: "/board/community",
        name: CommunityBoardPage,
        component: CommunityBoardPage,
    },
    {
        path: "/product/keyboard",
        name: KeyboardProductPage,
        component: KeyboardProductPage,
    },
    {
        path: "/product/keycap",
        name: KeycapProductPage,
        component: KeycapProductPage,
    },
    {
        path: "/product/artisan",
        component: ArtisanProductPage,
    },
    {
        path: "/product/etc",
        component: EtcProductPage,
    },
    {
        path: "/user/post",
        component: PostUserPage,
    },
    {
        path: "/user/detail",
        component: DetailUserPage,
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;