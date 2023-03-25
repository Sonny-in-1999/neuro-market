<template>
    <NavComp/>
    <router-link :to="'/user/' + user._id + '/detail'">User Detail</router-link>
    <form>
        <div>
            <h1>회원정보 수정</h1>
            <p>아이디: {{ user.userLogin }}</p>
            <p>닉네임: {{ user.userName }}</p>
            <p>전화번호: {{ user.userPhone }}</p>
            <p>이메일: {{ user.userEmail }}</p>
        </div>
    </form>
</template>

<script>
import NavComp from "@/components/NavComp.vue";
import axios from "axios";


export default {
    name: "UserDetailPage",
    components: {NavComp},

    data() {
        return {
            user: {},
        };
    },
    created() {
        ;
        axios.get(`/user/${userId}/detail`)
            .then(response => {
                this.user = response.data.user;
            })
            .catch(error => console.log(error));
    }

}
</script>

<style scoped>

</style>