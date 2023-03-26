<template>
    <NavComp/>
    <div>회원가입</div>
    <br/>
    <br/>
    <form @submit.prevent="createUser">
        <div>
            <div class="input-group mb-3">
                <span id="userLogin" class="input-group-text">아이디</span>
                <input type="text" v-model="userLogin" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="input-group mb-3">
                <span id="userPw" class="input-group-text">비밀번호</span>
                <input type="text" v-model="userPw" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="input-group mb-3">
                <span id="userName" class="input-group-text">이름</span>
                <input type="text" v-model="userName" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="input-group mb-3">
                <span id="userPhone" class="input-group-text">전화번호</span>
                <input type="text" v-model="userPhone" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="input-group mb-3">
                <span id="userEmail" class="input-group-text">이메일</span>
                <input type="text" v-model="userEmail" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">등급</label>
                <select class="form-select" id="inputGroupSelect01" v-model="userGrade">
                    <option selected></option>
                    <option value="common">common</option>
                    <option value="contributor">contributor</option>
                    <option value="admin">admin</option>
                </select>
            </div>
            <button type="submit" class="btn btn-danger">가입</button>
        </div>
    </form>
</template>

<script>
import NavComp from "@/components/NavComp.vue";
import axios from 'axios';

export default {
    name: "PostUserPage",
    components: {NavComp},

    data() {
        return {
            users: [],
            userLogin: '',
            userName: '',
            userPw: '',
            userPhone: '',
            userEmail: '',
            userGrade: '',
        }
    },

    methods: {
        createUser() {

            const newUser = {
                uLogin: this.userLogin,
                uName: this.userName,
                uPw: this.userPw,
                uPhone: this.userPhone,
                uEmail: this.userEmail,
                uGrade: this.userGrade
            };
            axios.post('/user/post/upload', newUser)
                .then(response => this.users = response.data)
                .catch((err) => console.log(err));
        }
    },
}

</script>

<style scoped>

</style>