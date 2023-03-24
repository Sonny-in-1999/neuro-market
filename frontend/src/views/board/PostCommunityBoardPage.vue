<template>
  <NavComp/>
  <br/>
  <div>게시글 작성</div>
  <br/>
  <br/>
  <form method="post" action="/board/community/post/upload">
    <div class="mb-3">
      <label for="selectPostSort" class="form-label">게시판을 선택해주세요</label>
      <select id="selectPostSort" class="form-select" aria-label="Default select example" name="sort" required>
        <option selected>게시판 선택</option>
        <option value="자유게시판">자유게시판</option>
        <option value="정보/리뷰">정보/리뷰</option>
        <option value="나눔">나눔</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="inputPostName" class="form-label">제목</label>
      <input type="text" class="form-control" id="inputPostName" aria-describedby="emailHelp" name="title" required>
      <div id="emailHelp" class="form-text">제목이나 내용에 비속어가 포함되어 있을 경우, 제재를 받으실 수 있습니다.</div>
    </div>
    <div class="mb-3">
      <label for="textPostDetail" class="form-label">내용</label>
      <textarea class="form-control" id="textPostDetail" rows="10" name="detail"></textarea>
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
  name: "BoardPostPage",
  components: {NavComp}
}
</script>

<style scoped>

</style>