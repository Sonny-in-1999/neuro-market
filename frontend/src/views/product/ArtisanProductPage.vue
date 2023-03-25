<template>
    <NavComp/>
    <div>
        <h1>아티산</h1>
        <div v-for="(product, index) in products" :key="index">
            <router-link :to="'/product/' + product._id"></router-link>
            <p>상품명: {{ product.productName }}</p>
            <p>가격: {{ product.productPrice }}</p>
            <p>작성자: {{ product.userName }}</p>
            <p>작성일자: {{ product.productCreatedAt }}</p>
        </div>
    </div>
  <br/>
  <br/>
  <div class="productContainer">
    <div>
      <img class='producing' alt="image" src="https://photo.coolenjoy.co.kr/data/editor/1712/Bimg_20171223140430_prxsfivr.jpg">
      <p>Product Name</p>
      <p>Product Price</p>
    </div>

  </div>

    <a href="/product/post">글 작성하기</a>

</template>

<script>
import NavComp from "@/components/NavComp.vue";
import axios from "axios";

export default {
    name: "ArtisanProductPage",
    components: {NavComp},

    data() {
        return {
            products: [],
        };
    },

    created() {

        axios.get(`/product/artisan`)
            .then(response => {
                this.products = response.data;  // axios 에서 받은 get 메소드로 얻은 값을, data 로 인식하여 이 파일의 products 리스트 안에 넣습니다
            })
            .catch(error => console.log(error));
    },
}
</script>

<style scoped>
.productContainer{
  display: flex;
  margin: 1rem;

}
.producing {
  width: 500px;
  height: 450px;
  border-radius: 30px;
}
</style>