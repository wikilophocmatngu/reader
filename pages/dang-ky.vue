<template>
  <div class="register-page" bis_skin_checked="1">
	 <img src="/img/headbg4.png" alt="chibi team" class="object-cover w-full" style="height: 321px;">
	 <div class="flex flex-col w-full justify-center mx-auto px-2 md:px-0.5 my-6" style="max-width: 432px;" bis_skin_checked="1">
		<div class="text-lg font-semibold" bis_skin_checked="1">Đăng kí tài khoản Lớp học Mật ngữ để được đọc truyện miễn phí nhé!</div>
		<div class="mt-6 flex items-center space-x-4" bis_skin_checked="1">
		<button class="login-with-google flex space-x-2 w-full sm:w-auto">
			<img src="/img/gg.svg" width="25" height="25" alt="gg icon" class="inline-block mx-auto">
			<span class="hidden sm:block text-base font-normal">Google</span>
		</button>
		<button class="login-with-facebook flex w-full sm:w-auto">
			<img src="/img/fb.svg" width="25" height="25" alt="gg icon" class="inline-block mx-auto sm:mr-2 mr-auto">
			<span class="hidden sm:block text-base font-normal">Facebook</span>
		</button>
		</div>
		<div class="or-create text-lg font-normal text-center mt-6" bis_skin_checked="1"> - hoặc tạo tài khoản mới -</div>
		<span>
		  <form class="form">
			 <span>
				<div class="relative input-control empty" bis_skin_checked="1">
				  <input id="fullname" type="text" class="h-full w-full pr-2 transition-all">
				  <label for="fullname" class="absolute left-0 transition-all">Họ và tên</label>
				</div>
			 </span>
			 <span>
				<div class="relative input-control empty" bis_skin_checked="1">
				  <input id="email" type="email" class="h-full w-full pr-2 transition-all">
				  <label for="email" class="absolute left-0 transition-all">Email</label>
				</div>
			 </span>
			 <span>
				<div class="relative input-control empty" bis_skin_checked="1">
				  <input id="password" type="password" class="h-full w-full pr-2 transition-all">
				  <label for="password" class="absolute left-0 transition-all">Mật khẩu</label>
				</div>
			 </span>
			 <span>
				<div class="select-box relative" style="margin-top: 27px;" bis_skin_checked="1">
				  <input readonly type="text" class="h-full w-full pr-2 transition-all">
				  <label class="absolute left-0 transition-all">Cung hoàng đạo của bạn?</label>
				  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-2">
					  <path d="M6.36603 9C5.98113 9.66667 5.01887 9.66667 4.63397 9L0.73686 2.25C0.35196 1.58333 0.833086 0.749999 1.60289 0.749999L9.39712 0.75C10.1669 0.75 10.648 1.58333 10.2631 2.25L6.36603 9Z" fill="#C4C4C4"></path>
				  </svg>
				</div>
			 </span>
		  </form>
		</span> <button class="  submit  w-full  mt-6  py-3  text-center text-lg  font-semibold  text-white"><span>Đăng ký</span></button>
	 <div class="text-lg font-normal text-center mt-6" bis_skin_checked="1"> Bạn đã có tài khoản? <a href="http://truyen.lophocmatngu.vn/dang-nhap" class="text-secondary">Đăng nhập</a></div>
  </div>
</div>
</template>

<style scoped>
@import '~/assets/styles/login.css';
</style>