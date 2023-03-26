import {createWebHistory, createRouter} from "vue-router";
/* root */
import MainPage from "@/views/MainPage.vue";
import LoginPage from "@/views/LoginPage.vue";
/* user */
import PostUserPage from "@/views/user/PostUserPage.vue";
import DetailUserPage from "@/views/user/DetailUserPage.vue";
/* board */
import PostCommunityBoardPage from "@/views/board/PostBoardPage.vue";
import DetailBoardPage from "@/views/board/DetailBoardPage.vue";
import NoticeBoardPage from "@/views/board/NoticeBoardPage.vue";
import CommunityBoardPage from "@/views/board/CommunityBoardPage.vue";
/* product */
import PostProductPage from "@/views/product/PostProductPage.vue";
import DetailProductPage from "@/views/product/DetailProductPage.vue";
import KeyboardProductPage from "@/views/product/KeyboardProductPage.vue";
import KeycapProductPage from "@/views/product/KeycapProductPage.vue";
import ArtisanProductPage from "@/views/product/ArtisanProductPage.vue";
import EtcProductPage from "@/views/product/EtcProductPage.vue";

const routes = [
    {
        path: "/", //메인 페이지
        name: MainPage,
        component: MainPage,
    },
    {
        path: "/login", //로그인 페이지
        name: LoginPage,
        component: LoginPage,
    },
    {
        path: "/user/post", // 회원 가입 페이지
        component: PostUserPage,
    },
    {
        path: "/user",   // 유저 상세 페이지
        component: DetailUserPage,
    },
    {
        path: "/board/post", //커뮤니티 게시글 등록 페이지
        name: PostCommunityBoardPage,
        component: PostCommunityBoardPage,
    },
    {
        path: "/board/:board_id", // 게시물 상세 페이지
        name: DetailBoardPage,
        component: DetailBoardPage,
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
        path: "/product/post", //상품 등록 페이지
        name: PostProductPage,
        component: PostProductPage
    },
    {
        path: "/product/:productId", // 상품 목록 페이지
        name: DetailProductPage,
        component: DetailProductPage,
    },
    {
        path: "/product/keyboard", // 키보드 상품 목록 페이지
        name: KeyboardProductPage,
        component: KeyboardProductPage,
    },
    {
        path: "/product/keycap", // 키캡 상품 목록 페이지
        name: KeycapProductPage,
        component: KeycapProductPage,
    },
    {
        path: "/product/artisan", // 아티산 상품 목록 페이지
        component: ArtisanProductPage,
    },
    {
        path: "/product/etc", // 기타용품 상품 목록 페이지
        component: EtcProductPage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;