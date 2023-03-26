<template>
  <NavComp />
  <div id="root">
</div>
  <div class="noticeContainer">
    <div class="noticeBox">
      <div class="noticeBoxHeader">
        <img alt='img' src="https://e7.pngegg.com/pngimages/28/155/png-clipart-computer-icons-megaphone-megaphone-grass-sports-equipment.png">
      </div>
    <div class="noticeBoxItem">
      <a>현재 공지사항 테스트 중입니다. 링크 클릭시 해당 공지사항 페이지로 이동합니다.</a>  <!-- 공지사항 제목의 글자 수 제한 필요-->
    </div>
  </div>
</div>

<div class="mainPageViewBox">
  <div class="keyboardBox">
    <div class="keyboardBoxHeader">
      키보드
    </div>
  <div class="keyboardBoxBoxItem">
    <ul>
      <li>notice test</li>
      <li>notice test</li>
      <li>notice test</li>
      <li>notice test</li>
    </ul>
  </div>
  </div>

  <div class="keyboardBox">
    <div class="keyboardBoxHeader">
      키캡
    </div>
    <div class="keyboardBoxBoxItem">
      <ul>
      <li>notice test</li>
      <li>notice test</li>
      <li>notice test</li>
      <li>notice test</li>
      </ul>
    </div>
  </div>

  <div class="keyboardBox">
    <div class="keyboardBoxHeader">
      아티산
    </div>
    <div class="keyboardBoxBoxItem">
      <ul>
        <li>notice test</li>
        <li>notice test</li>
        <li>notice test</li>
        <li>notice test</li>
      </ul>
    </div>
  </div>

  <div class="keyboardBox">
    <div class="keyboardBoxHeader">
      기타용품
    </div>
    <div class="keyboardBoxBoxItem">
      <ul>
      <li>notice test</li>
      <li>notice test</li>
      <li>notice test</li>
      <li>notice test</li>
      </ul>
    </div>
  </div>


</div>


</template>

<script>

import NavComp from "@/components/NavComp.vue";

export default {
  name: 'MainPage',
  components: {NavComp},
 // <== 부모 컴포넌트가 얘를 뭐라고 불러야 하나요?
  props: { //부모 컴포넌트한테 받아오는거

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.noticeContainer{
  display: flex;
  justify-content: center;
}
.noticeBox{
  margin: 1rem;
  display: flex;
  background: #f4f4f4;
  width: 800px;
  height: 30px;
  border-radius: 5px;
  align-items: center;

}

.noticeBoxHeader img{
  width: 25px;
  height: 25px;
  border-radius: 5px 0px 0px 5px;
  margin-left : 30px;
}

.noticeBoxItem{
  margin-left: 45px;
  margin-top: 2.5px;
}

.mainPageViewBox{
  display : flex;
  justify-content: center;

}

.keyboardBox{
  margin-left: 1rem;
  width:250px;
  height: 130px;
  background-color: #e7e7e7;
  color: black;
  border-radius : 11px 11px 5px 5px;

}

.keyboardBoxHeader{
  background-color:#d8d8d8;
  border-radius: 10px 10px 0px 0px;
  color: #1a1e21;
}



@import'~bootstrap/dist/css/bootstrap.css';
</style>
