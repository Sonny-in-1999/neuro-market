<template>
  <NavComp/>
  <div>커뮤니티 게시판</div>
  <a href="/board/community/post">글 작성하기</a>
</template>

<script>



import NavComp from "@/components/NavComp.vue";

export default {
  name: "CommunityBoardPage",
  components: {NavComp}
}
</script>

<style scoped>

</style>