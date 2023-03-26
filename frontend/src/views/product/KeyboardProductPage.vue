<template>
    <NavComp/>
    <div>
        <h1>키보드</h1>
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

  <div class="keyboardContainer">
  <div class="keyboardProduct">
    <img class="keyboardImg" alt="image" src="https://img2.quasarzone.com/editor/2021/01/15/0f75672cca31b0e05c1ec7540766e91a.jpg">
    <p>ProductName</p>
    <p>ProductPrice</p>
  </div>

    <div class="keyboardProduct">
      <img class="keyboardImg" alt="image" src="https://img2.joongna.com/cafe-article-data/live/2022/08/03/933466859/1659502335271000TZj_GPz43.jpg?impolicy=DoubleWtmk&ftext={0}">
      <p>ProductName</p>
      <p>ProductPrice</p>
    </div>

    <div class="keyboardProduct">
      <img class="keyboardImg" alt="image" src="http://ccimg.hellomarket.com/images/2022/item/11/27/20/1502843_5630276_1.jpg?size=s4">
      <p>ProductName</p>
      <p>ProductPrice</p>
    </div>
   </div>
  <div class="keyboardProductPage">
    <div class="keyboardContainer">
    <div class="keyboardProduct">
      <img class="keyboardImg" alt="image" src="https://img2.joongna.com/cafe-article-data/live/2023/02/11/971864204/1676086421882002tz8_8rSPj.jpg?impolicy=resizeWatermark3&ftext=%EC%A4%91%EA%B3%A0%EB%82%98%EB%9D%BC%237250085">
      <p>ProductName</p>
      <p>ProductPrice</p>
    </div>
    <div class="keyboardProduct">
      <img class="keyboardImg" alt="image" src="https://photo.coolenjoy.co.kr/data/editor/1907/Bimg_e048599566317336b5660efaa59f64f3_asil.jpg">
      <p>ProductName</p>
      <p>ProductPrice</p>
    </div>
    <div class="keyboardProduct">
      <img class="keyboardImg" alt="image" src="https://photo.coolenjoy.co.kr/data/editor/2301/thumb-6208485d083bb4edc5a7ba7223a8db5c7e5ea2ad.jpg">
      <p>ProductName</p>
      <p>ProductPrice</p>
    </div>
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
    name: "KeyboardProductPage",
    components: {NavComp},

    data() {
        return {
            products: []
        };
    },

    created() {
        axios.get(`/product/keyboard`)
            .then(response => {
                this.products = response.data;  // axios 에서 받은 get 메소드로 얻은 값을, data 로 인식하여 이 파일의 products 리스트 안에 넣습니다
            })
            .catch(error => console.log(error));
    },

    methods: {
        getUserById(id) {
            return this.users.find(user => user.id === id)  // comment collection 내의 userId Fk(user collection Pk)를 통해, userName 을 불러옵니다.
        },
      redirectPostPage :
          function() {
            router.push({path:'/product/post'})
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

.keyboardContainer{
  display : flex;
  justify-content: center;
  margin : 1rem;
}

.keyboardProduct {
  margin : 5px;
}
.keyboardProduct p{
  margin-top: 15px ;
}

.keyboardImg{
  width: 100%;
  height: auto;
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