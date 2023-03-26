<template>
    <NavComp/>
    <div>
        <router-link :to="'/board/' + board._id"></router-link>
        <h1>{{ board.boardTitle }}</h1>
        <p>{{ board.boardDetail }}</p>
        <p>{{ board.userId }}</p>
    </div>
<!--    CommentBoardPage.vue    -->
</template>

<script>
import NavComp from "@/components/NavComp.vue";
import axios from "axios";

export default {
    name: "DetailBoardPage",
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
}
</script>

<style scoped>

</style>