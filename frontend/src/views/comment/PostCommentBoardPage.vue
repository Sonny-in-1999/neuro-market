<template>
    <NavComp/>
    <br/>
    <div>게시글 작성</div>
    <br/>
    <br/>
    <form @submit.prevent="createComment">
        <div class="mb-3">
            <label for="textCommentDetail" class="form-label">내용</label>
            <textarea class="form-control" id="textCommentDetail" rows="10" name="detail" v-model="commentDetail"></textarea>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <button type="submit" class="btn btn-primary">등록</button>
        </div>
    </form>
</template>

<script>
import NavComp from "@/components/NavComp.vue";
import axios from "axios";

export default {
    name: "PostCommentBoardPage",
    components: {NavComp},

    data() {
        return {
            comments: [],
            commentDetail: ''
        }
    },

    methods: {
        createComment() {

            const newComment = {
                cDetail: this.commentDetail
            };
            axios.post('/comment/post/upload', newComment)
                .then(response => this.comment = response.data)
                .catch((err) => console.log(err));
        }
    }
}
</script>

<style scoped>

</style>