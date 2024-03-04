<template>
  <div style="height: 474px">
    <Swiper

        :spaceBetween="30"
        :pagination="true"
        :navigation="true"
        :loop="true"
        :speed="1000"
        :effect="'fade'"
        :autoplay="{delay: 3000, disableOnInteraction: false,}"
        :modules="[Pagination, Navigation, Autoplay]"
    >
      <swiper-slide>
        <router-link to="/cataloge">
          <img src="../shared/images/mok/carouselImage.png" alt="image" >
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/cataloge">
          <img src="../shared/images/mok/carouselImage.png" alt="image" >
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/cataloge">
          <img src="../shared/images/mok/carouselImage.png" alt="image" >
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/cataloge">
          <img src="../shared/images/mok/carouselImage.png" alt="image" >
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/cataloge">
          <img src="../shared/images/mok/carouselImage.png" alt="image" >
        </router-link>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


</script>

<style lang="postcss">

.swiper{

  height: 100%;
  & .swiper-button-prev, & .swiper-button-next{

    background-image: url("@/shared/images/common/carouselButton.svg");
    top: 47% !important;
    @apply w-[60px] h-[60px];
    &::after{
      content: '';
    }
  }
  & .swiper-button-next{
    transform: rotate(180deg);
    right: 20px !important;
  }
  & .swiper-button-prev{
    left: 20px !important;
  }
}

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