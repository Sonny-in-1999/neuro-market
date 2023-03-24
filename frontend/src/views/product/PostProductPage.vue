<template>
  <NavComp/>
  <br/>
  <div>상품 등록</div>
  <br/>
  <br/>
  <form method="post" action="/product/keyboard/post/upload">
    <div class="mb-3">
      <label for="selectTradeSort" class="form-label">매매 형식을 선택해주세요</label>
      <select id="selectTradeSort" class="form-select" aria-label="Default select example" name="sort" required>
        <option selected>매매 형식</option>
        <option value="buy">삽니다</option>
        <option value="sell">팝니다</option>
        <option value="trade">교환합니다</option>
      </select>
    </div>
    <br/>
    <div class="mb-3">
      <label for="selectProductSort" class="form-label">상품 종류를 선택해주세요</label>
      <select id="selectProductSort" class="form-select" aria-label="Default select example" name="sort" required>
        <option selected>상품 종류</option>
        <option value="keyboard">키보드</option>
        <option value="keycap">키캡</option>
        <option value="artisan">아티산</option>
        <option value="etc">기타용품</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="inputProductName" class="form-label">상품명</label>
      <input type="text" class="form-control" id="inputProductName" aria-describedby="emailHelp" name="name" required>
      <div id="emailHelp" class="form-text">정확한 상품명을 기재해주세요</div>
    </div>
    <div>
      <label for="inputProductPrice" class="form-label">가격</label>
      <input type="text" class="form-control" id="inputProductPrice" aria-describedby="emailHelp" name="price" required>
    </div>
    <br/>
    <br/>
    <div class="mb-3">
      <label for="textProductDetail" class="form-label">내용</label>
      <textarea class="form-control" id="textProductDetail" rows="10" name="detail"></textarea>
    </div>
    <br/>
    <br/>
    <br/>
    <div>
      <button type="submit" class="btn btn-primary">등록</button>
    </div>
  </form>
</template>

<script>
import NavComp from "@/components/NavComp.vue";

export default {
  name: "ProductPostPage",
  components: {NavComp}
}
</script>

<style scoped>

</style>