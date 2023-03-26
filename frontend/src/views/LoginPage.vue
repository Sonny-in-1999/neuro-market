<template>
    <NavComp/>
    <form @submit.prevent="createLogin">
        <div>
            <div class="input-group mb-3">
                <span id="userLogin" class="input-group-text">아이디</span>
                <input type="text" v-model="userLogin" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="input-group mb-3">
                <span id="userPw" class="input-group-text">비밀번호</span>
                <input type="text" v-model="userPw" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <br>
            <br>
            <button type="submit" class="btn btn-danger">로그인</button>
        </div>
    </form>
</template>

<script>

import NavComp from "@/components/NavComp.vue";
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
    name: "LoginPage",
    components: {NavComp},

    data() {
        return {
            logins: [],
            userLogin: '',
            userPw: '',
        }
    },

    methods: {
        createLogin() {

            const loginUser = {
                uLogin: this.userLogin,
                uPw: this.userPw,
            };
            axios.post('/login', loginUser)
                .then(response => {
                    this.logins = response.data
                    const cookies = response.headers['set-cookie'];
                    if (cookies) {
                        cookies.forEach(cookie => {
                            document.cookie = cookie;
                            if (cookie.includes('accessToken')) {
                                const accessToken = cookie.split('=')[1];
                                localStorage.setItem('accessToken', accessToken);
                            }
                        });
                    }
                })
        }
    },
};
</script>