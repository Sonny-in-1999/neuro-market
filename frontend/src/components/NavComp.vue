<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">금수의 왕국</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/board/notice">공지사항</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              장터
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/product/keyboard">키보드</a></li>
              <li><a class="dropdown-item" href="/product/keycap">키캡</a></li>
              <li><a class="dropdown-item" href="/product/artisan">아티산</a></li>
              <li><a class="dropdown-item" href="/product/etc">기타용품</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/board/community">커뮤니티</a>
          </li>
        </ul>
      </div>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/login">로그인</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/register">회원가입</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComp",
  props: {

  }
}
</script>

<style scoped>

</style>