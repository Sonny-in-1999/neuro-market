import {createWebHistory, createRouter} from "vue-router";
import MainPage from "@/views/MainPage.vue";
import NoticeBoardPage from "@/views/board/NoticeBoardPage.vue";
import CommunityBoardPage from "@/views/board/CommunityBoardPage.vue";
import KeyboardProductPage from "@/views/product/KeyboardProductPage.vue";
import KeycapProductPage from "@/views/product/KeycapProductPage.vue";
import ArtisanProductPage from "@/views/product/ArtisanProductPage.vue";
import EtcProductPage from "@/views/product/EtcProductPage.vue";
import PostCommunityBoardPage from "@/views/board/PostCommunityBoardPage.vue";
import PostUserPage from "@/views/user/PostUserPage.vue";
import DetailUserPage from "@/views/user/DetailUserPage.vue";
import PostProductPage from "@/views/product/PostProductPage.vue";
import PostCommentBoardPage from "@/views/comment/PostCommentBoardPage.vue";


const routes = [
    {
        path: "/", //메인 페이지
        name: MainPage,
        component: MainPage,
    },
    {
        path: "/board/community/post", //커뮤니티 게시글 등록 페이지
        name: PostCommunityBoardPage,
        component: PostCommunityBoardPage,
    },
    {
        path: "/board/notice", //공지사항 페이지
        name: NoticeBoardPage,
        component: NoticeBoardPage,
    },
    {
        path: "/board/community", //커뮤니티 페이지
        name: CommunityBoardPage,
        component: CommunityBoardPage,
    },
    {
        path: "/product/keyboard", //키보드 상품 목록 페이지
        name: KeyboardProductPage,
        component: KeyboardProductPage,
    },
    {
        path: "/product/post", //상품 등록 페이지
        name: PostProductPage,
        component: PostProductPage
    },
    {
        path: "/product/keycap", //키캡 상품 목록 페이지
        name: KeycapProductPage,
        component: KeycapProductPage,
    },
    {
        path: "/product/artisan", //아티산 상품 목록 페이지
        component: ArtisanProductPage,
    },
    {
        path: "/product/etc", //기타용품 상품 목록 페이지
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
    {
        path: "/comment/post",
        component: PostCommentBoardPage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;