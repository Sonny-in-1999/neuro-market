<template>
    <NavComp/>
    <div>
        <router-link :to="'/board/' + board._id"></router-link>
        <h1>{{ board.boardTitle }}</h1>
        <p>{{ board.boardDetail }}</p>
        <p>{{ getUserById(board.userId).userName }}</p>
    </div>
<!--    CommentBoardPage.vue    -->
</template>

<script>
import NavComp from "@/components/NavComp.vue";
import axios from "axios";

export default {
    name: "BoardDetailPage",
    components: {NavComp},

    data() {
        return {
            board: {}
        };
    },

    created() {
        const boardId = this.$route.params.id;

        axios.get(`/board/${boardId}`)
            .then(response => {
                this.board = response.data;  // axios 에서 받은 get 메소드로 얻은 값을, data 로 인식하여 이 파일의 boards 리스트 안에 넣습니다
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