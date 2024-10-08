<template>
    <footer class="global-footer">
      <div class="footer-mainflex items-center text-white bg-primary md:py-6 py-0 xl:px-0 px-2">
        <div class="wrapper">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="mx-auto md:mx-0 my-2 md:my-0">
              <a href="/" aria-current="page" class="router-link-exact-active router-link-active">
                <img src="/img/logo.png" width="92px" height="58px" alt="logo" />
              </a>
            </div>
            <div class="socials space-x-5 inline-flex items-center justify-center mb-2 sm:mb-0">
              <a href="https://www.facebook.com/lophocmatngu" class="block">
                <img src="/img/social-icon-fb.svg" alt="facebook" />
              </a>
              <a href="https://www.youtube.com/c/lophocmatngu" class="block">
                <img src="/img/social-icon-youtube.svg" alt="youtube" />
              </a>
              <a href="https://www.tiktok.com/@lophocmatngu_official" class="block">
                <img src="/img/social-icon-tiktok.svg" alt="tiktok" />
              </a>
            </div>
            <div class="flex items-center sm:justify-end justify-center mb-2 sm:mb-0">
              <a href="/dieu-khoan-su-dung" class="md:mr-11 mr-5 text-sm md:text-base">Điều khoản sử dụng</a>
              <a href="/chinh-sach-bao-mat" class="text-sm md:text-base">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'GlobalFooter'
  }
  </script>
  
  <style scoped>
    @import '@/assets/styles/footer.css';
  </style>