<template>
  <div style="width: 240px">
    <Swiper
        :spaceBetween="30"
        :pagination="true"
        :loop="true"
        :modules="[Pagination]"
    >
      <swiper-slide>
          <img src="@/shared/images/mok/felix.png" alt="image" >
      </swiper-slide>
      <swiper-slide>
        <img src="@/shared/images/mok/felix.png" alt="image" >
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
</script>

<style lang="postcss">

.swiper-pagination{

  bottom: 0px !important;

  & .swiper-pagination-bullet{
    @apply bg-[#1E3050] opacity-10;
  }
  & .swiper-pagination-bullet-active{
    @apply opacity-100;
  }
}
</style>