<template>
  <NavComp />
  <div id="root">
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

@import'~bootstrap/dist/css/bootstrap.css';
</style>
