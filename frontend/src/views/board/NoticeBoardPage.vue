<template>
  <NavComp/>
  <div>공지사항 게시판</div>
  <p>공지사항 글은 어드민 페이지에서 작성 가능합니다.</p>
    <div>
        <h1>공지사항</h1>
        <div v-for="(board, index) in boards" :key="index">
            <router-link :to="'/product/' + board._id"></router-link>
            <p>제목: {{ board.boardTitle }}</p>
            <p>작성자: {{ board.userName }}</p>
            <p>작성일자: {{ board.productCreatedAt }}</p>
        </div>
    </div>
</template>

<script>

import NavComp from "@/components/NavComp.vue";
import axios from "axios";

export default {
  name: "NoticeBoardPage",
  components: {NavComp},

    data() {
        return {
            boards: [],
        };
    },

    created() {
        axios.get(`/board/notice`)
            .then(response => {
                this.boards = response.data;  // axios 에서 받은 get 메소드로 얻은 값을, data 로 인식하여 이 파일의 products 리스트 안에 넣습니다
            })
            .catch(error => console.log(error));
    },
}
</script>

<style scoped>

</style>