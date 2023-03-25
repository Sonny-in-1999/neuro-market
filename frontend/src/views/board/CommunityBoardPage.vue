<template>
  <NavComp/>
    <div>
        <h1>커뮤니티</h1>
        <div v-for="(board, index) in boards" :key="index">
            <router-link :to="'/board/' + board._id"></router-link>
            <p>제목: {{ board.boardTitle }}</p>
            <p>작성자: {{ getUserById(board.userId).userName }}</p>
            <p>작성일자: {{ board.boardCreatedAt }}</p>
        </div>
    </div>
  <a href="/board/post">글 작성하기</a>
</template>

<script>



import NavComp from "@/components/NavComp.vue";
import axios from "axios";

export default {
  name: "CommunityBoardPage",
  components: {NavComp},

    data() {
        return {
            boards: []
        };
    },

    created() {
        axios.get(`/board/community`)
            .then(response => {
                this.boards = response.data;  // axios 에서 받은 get 메소드로 얻은 값을, data 로 인식하여 이 파일의 products 리스트 안에 넣습니다
            })
            .catch(error => console.log(error));
    },

    methods: {
        getUserById(id) {
            return this.users.find(user => user.id === id)  // comment collection 내의 userId Fk(user collection Pk)를 통해, userName 을 불러옵니다.
        }
    }
}
</script>

<style scoped>

</style>