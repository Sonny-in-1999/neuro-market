<template>
    <NavComp/>
    <div>
        <h1>기타용품</h1>
        <div v-for="(product, index) in products" :key="index">
            <router-link :to="'/product/' + product._id"></router-link>
            <p>상품명: {{ product.productName }}</p>
            <p>가격: {{ product.productPrice }}</p>
            <p>작성자: {{ getUserById(product.userId).userName }}</p>
            <p>작성일자: {{ product.productCreatedAt }}</p>
        </div>
    </div>
    <a href="/product/post">글 작성하기</a>
</template>

<script>
import NavComp from "@/components/NavComp.vue";
import axios from "axios";

export default {
    name: "EtcProductPage",
    components: {NavComp},

    data() {
        return {
            products: []
        };
    },

    created() {
        axios.get(`/product/etc`)
            .then(response => {
                this.products = response.data;  // axios 에서 받은 get 메소드로 얻은 값을, data 로 인식하여 이 파일의 products 리스트 안에 넣습니다
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