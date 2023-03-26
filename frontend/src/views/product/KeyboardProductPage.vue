<template>
    <NavComp/>
    <div>
        <h1>키보드</h1>
        <div v-for="product in products" :key="product._id">
            <router-link :to="'/product/' + product._id">
            <p>상품명: {{ product.productName }}</p>
            <p>가격: {{ product.productPrice }}</p>
            <p>작성자: {{ product.userName }}</p>
            <p>작성일자: {{ product.productCreatedAt }}</p>
            </router-link>
        </div>
    </div>
    <a href="/product/post">글 작성하기</a>
</template>

<script>
import NavComp from "@/components/NavComp.vue";
import axios from "axios";

export default {
    name: "KeyboardProductPage",
    components: {NavComp},

    data() {
        return {
            products: [],
        };
    },

    created() {

        axios.get(`/product/keyboard`)
            .then(response => {
                this.products = response.data;  // axios 에서 받은 get 메소드로 얻은 값을, data 로 인식하여 이 파일의 products 리스트 안에 넣습니다
            })
            .catch(error => console.log(error));
    },
}
</script>

<style scoped>

</style>