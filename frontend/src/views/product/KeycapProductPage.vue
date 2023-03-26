<template>
  <NavComp/>
    <div>
        <h1>키캡</h1>
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
  <div class="keycapContainer">
    <div class="keycapProduct">
      <img class="keycapImg" alt="img"
           src="https://blog.kakaocdn.net/dn/zbb1h/btq4Y6nMjYf/6LS1aQEMbd8Ax5XzMPOte1/img.png"/>
      <p>ProductName</p>
      <p>ProductPrice</p>
    </div>
    <div class="keycapProduct">
      <img class="keycapImg" alt="img"
           src="https://photo.coolenjoy.co.kr/data/editor/1801/Bimg_20180126030116_obmgvvpl.jpg"/>
      <p>ProductName</p>
      <p>ProductPrice</p>
    </div>
    <div class="keycapProduct">
      <img class="keycapImg" alt="img"
           src="https://blog.kakaocdn.net/dn/cS3Lvp/btqVdM8JXXK/fsbyVT7r02cHRYQR5pKt01/img.png"/>
      <p>ProductName</p>
      <p>ProductPrice</p>
    </div>
  </div>
  <div class="keycapContainer">
    <div class="keycapProduct">
      <img class="keycapImg" alt="img"
           src="https://photo.coolenjoy.co.kr/data/editor/1707/Bimg_20170728125524_xsocdqzq.jpg"/>
      <p>ProductName</p>
      <p>ProductPrice</p>
    </div>
    <div class="keycapProduct">
      <img class="keycapImg" alt="img"
           src="http://img.danawa.com/cms/img/images/000330/20170809101858925_8A8UJ2UF.png"/>
      <p>ProductName</p>
      <p>ProductPrice</p>
    </div>
    <div class="keycapProduct">
      <img class="keycapImg" alt="img"
           src="https://cdn.imweb.me/thumbnail/20220404/2e96348c01b8d.jpg"/>
      <p>ProductName</p>
      <p>ProductPrice</p>
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
  name: "KeycapProductPage",
  components: {NavComp},

    data() {
        return {
            products: []
        };
    },

    created() {
        axios.get(`/product/keycap`)
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
            router.push({path:"/product/post"})

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


.keycapContainer{
  display : flex;
  margin: 1rem;
  justify-content: center;
}

.keycapProduct {
  margin:15px;
}

.keycapProduct p{
  margin-top:15px;
}

.keycapImg{
  width: 100%;
  height: auto;
  border-radius: 30px;
}

.linkContainer {
  display: flex;
  justify-content: center;
  margin:1rem;
}

.linkContainer button{
  border-radius: 15px;
  border: none;
}

.linkContainer a{
  margin : 0px 15px;
  background: crimson;
  border-radius: 15px;
  min-width: 30px;
  color: white;
}
</style>