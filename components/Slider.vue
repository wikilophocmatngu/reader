<template>
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="slide in 4" :key="slide">
        <div class="swiper-slide">
          <img
            :src="`/img/headbg${slide}.png`"
            alt="slide"
            class="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </template>

<script>
export default {
  name: 'Slider',
}
</script>