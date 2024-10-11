<template>
  <div class="login-page w-full flex flex-col justify-center" bis_skin_checked="1">
  <div class="flex flex-col w-full justify-center mx-auto px-2 md:px-0.5 my-6" style="max-width: 432px;" bis_skin_checked="1">
    <img src="/img/chibis.png" alt="chibi team" class="object-contain">
    <div class="text-lg font-semibold mt-6" bis_skin_checked="1">
      Đăng nhập tài khoản Lớp học Mật ngữ để được đọc truyện miễn phí nhé!
    </div>
    <div class="mt-6 flex items-center space-x-4" bis_skin_checked="1">
      <button class="login-with-google flex items-center space-x-2 w-full sm:w-auto">
        <img src="/img/gg.svg" width="25" height="25" alt="gg icon" class="inline-block mx-auto">
        <span class="hidden sm:block text-base font-normal">Google</span>
      </button>
      <button class="login-with-facebook flex items-center w-full sm:w-auto">
        <img src="/img/fb.svg" width="25" height="25" alt="gg icon" class="inline-block mx-auto sm:mr-2 mr-auto">
        <span class="hidden sm:block text-base font-normal">Facebook</span>
      </button>
    </div>
    
    <div class="or-create text-lg font-normal text-center mt-6" bis_skin_checked="1">
      - hoặc đăng nhập bằng tài khoản -
    </div> <span>
      <form class="form"><span>
  <div class="relative input-control empty" bis_skin_checked="1">
    <input id="email" type="email" class="h-full w-full pr-2 transition-all">
    <label for="email" class="absolute left-0 transition-all">
      Email
    </label></div> <!---->
</span> <span>
  <div class="relative input-control empty" bis_skin_checked="1">
    <input id="password" type="password" class="h-full w-full pr-2 transition-all">
    <label for="password" class="absolute left-0 transition-all">
      Mật khẩu
    </label></div> <!---->
</span></form>
    </span> <button class="submit w-full mt-6 py-3 text-center text-lg font-semibold text-white flex justify-center items-center"><span>Đăng nhập</span></button>
    <div class="text-lg font-normal text-center mt-6" bis_skin_checked="1">Bạn chưa có tài khoản?
      <a href="http://truyen.lophocmatngu.vn/dang-ky" class="text-secondary">Đăng ký ngay</a>
    </div>
  </div>
</div>
</template>

<style scoped>
@import '~/assets/styles/login.css';
</style>