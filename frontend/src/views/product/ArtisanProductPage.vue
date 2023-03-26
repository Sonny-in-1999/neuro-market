<template>
    <NavComp/>
    <div>
        <h1>아티산</h1>
        <div v-for="(product, index) in products" :key="index">
            <router-link :to="'/product/' + product._id"></router-link>
            <p>상품명: {{ product.productName }}</p>
            <p>가격: {{ product.productPrice }}</p>
            <p>작성자: {{ getUserById(product.userId).userName }}</p>
            <p>작성일자: {{ product.productCreatedAt }}</p>
        </div>
    </div>

  <button class="postBtn" @click="redirectPostPage()">글 작성하기</button>
    <br/>
    <br/>

  <div class="artisanContainer">
    <div class="artisanProduct">
      <img class='artisanImg' alt="image" src="https://mblogthumb-phinf.pstatic.net/MjAyMTA2MTVfMTcx/MDAxNjIzNzE5MDQ0NTUw.JzDKTzkPdRU7wdIpPTITQ9ypHXLRX7CsprlXVfOQ3lYg.0-vUpg4LOumNgaT6HdZ_Afj6lfsfJtHMLb6ZM8T8hMkg.JPEG.mangokid/3uEH8Ps8SDC4MuBla2zS_CB5A4673-copy.jpg?type=w800">
      <p>Product Name</p>
      <p>Product Price</p>
    </div>
    <div class="artisanProduct">
      <img class='artisanImg' alt="image" src="https://ae01.alicdn.com/kf/HTB1UCNwXPzuK1Rjy0Fpq6yEpFXa6/artisan-keycap-sa-mx.jpg_.webp">
      <p>Product Name</p>
      <p>Product Price</p>
    </div>
    <div class="artisanProduct">
      <img class='artisanImg' alt="image" src="https://funkeys.co.kr/data/editor/2212/b1b135726c8adc5f00d2a92bfbf59dd5_1671006383_1357.jpg">
      <p>Product Name</p>
      <p>Product Price</p>
    </div>
  </div>
  <div class="artisanContainer">
    <div class="artisanProduct">
      <img class='artisanImg' alt="image" src="https://cdn.shopify.com/s/files/1/0463/5980/6101/products/image_db42ff08-30d9-454f-8a59-f665a7076ec7_1024x.jpg?v=1645953927">
      <p>테스트용 아티산 제품</p>
      <p>Product Price</p>
    </div>
    <div class="artisanProduct">
      <img class='artisanImg' alt="image" src="https://image.idus.com/image/files/80e2150016ee47e0bb0da55c40b38b43_720.jpg">
      <p>Product Name</p>
      <p>Product Price</p>
    </div>
    <div class="artisanProduct">
      <img class='artisanImg' alt="image" src="https://photo.coolenjoy.co.kr/data/editor/1812/Bimg_8060baeb3b76e3130c1832fdcbd499a9_3fjy.jpg">
      <p>Product Name</p>
      <p>Product Price</p>
    </div>
  </div>
  <div class="linkContainer">
  <button type="button">이전</button>
    <a>1</a>
    <a>2</a>
    <a>3</a>
    <a>4</a>
    <a>5</a>
  <button type="button">다음</button>
  </div>


</template>

<script>
import NavComp from "@/components/NavComp.vue";
import axios from "axios";
import router from "@/router";

export default {
    name: "ArtisanProductPage",
    components: {NavComp},

    data() {
        return {
            products: []
        };
    },

    created() {
        axios.get(`/product/artisan`)
            .then(response => {
                this.products = response.data;  // axios 에서 받은 get 메소드로 얻은 값을, data 로 인식하여 이 파일의 products 리스트 안에 넣습니다
            })
            .catch(error => console.log(error));
    },

    methods: {
        getUserById(id) {
            return this.users.find(user => user.id === id)  // comment collection 내의 userId Fk(user collection Pk)를 통해, userName 을 불러옵니다.
        },
        redirectPostPage:
          function(){
            router.push({path : "/product/post"})
          }



        }


}
</script>

<style scoped>

.postBtn{
  float: right;
  margin-right: 9.5rem;
  border-radius: 5px;
  background-color: #9a9a9a;
  color: white;
  border: none;
}

.postBtn:hover{
  background-color: #686868;
}

.artisanContainer{
  display:flex;
  justify-content: center;
  margin: 1rem;

}

.artisanProduct{
  margin: 15px; /*여기 넓이 좁아보이는지 넓어보이는지 의견 필요*/
}

.artisanProduct p{
  margin-top: 15px;
}

.artisanImg {
  width: 100%;
  height: auto;
  /*width: 550px;*/
  /*height: 450px;*/
  /*사용자가 제출한 사진파일을 위에 넓이,높이값으로 변경해서 받아와야함*/
  border-radius: 30px;

}


.linkContainer{
  display: flex;
  justify-content: center;
  margin: 1rem;
}

.linkContainer button{
  border : none;
  border-radius: 1rem;
}

.linkContainer button:hover{
  background-color: #555555;
}

.linkContainer a{
  margin : 0px 15px;
  border-radius: 15px;
  background-color: crimson;
  color: white;
  min-width: 30px;
}


</style>