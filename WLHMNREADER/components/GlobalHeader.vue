<template>
<nav>
  <div class="header-main bg-primary xl:px-0 px-2" bis_skin_checked="1">
    <div class="wrapper h-full flex justify-between items-center" bis_skin_checked="1">
      <a href="/" aria-current="page" class="block router-link-exact-active router-link-active">
        <img src="/img/logo.png" width="92px" height="58px" alt="logo">
      </a>
      <div class="flex items-center text-white" bis_skin_checked="1">
        <a  href="/dang-nhap" class="login inline-block"> Đăng nhập </a>
        <a  href="/dang-ky" class="register hidden sm:inline-block"> Đọc truyện miễn phí </a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'GlobalHeader'
}
</script>

<style scoped>
  @import '@/assets/styles/header.css';
</style>