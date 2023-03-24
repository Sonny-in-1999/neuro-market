<template>
  <NavComp/>
  <div>공지사항 게시판</div>
  <p>공지사항 글은 어드민 페이지에서 작성 가능합니다.</p>
</template>

<script>

import NavComp from "@/components/NavComp.vue";

export default {
  name: "NoticeBoardPage",
  components: {NavComp}
}
</script>

<style scoped>

</style>