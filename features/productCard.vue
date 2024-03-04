<template>
  <div @click="() => modalState = true" class="button">
    <div class="card" :class="{cardnotAvailable: notAvailable}" >
      <div class="card__promotion" v-if="promotion.length != 0 && !notAvailable">{{promotion}}</div>
      <div class="card__notAvailable" v-if="notAvailable">Нет в наличии</div>
<!--      <img src="@/shared/images/mok/felix.png" alt="pic1">-->
      <cardCarousel />
      <p class="card__name">{{name}}</p>
      <p class="card__desc">{{desc}}</p>
      <select class="card__select" name="product">
        <option :value="size[0]">{{size[0]}}</option>
      </select>
      <div class="card-down">
        <div class="card-down__prices">
          <p class="card-down__price">{{price}}</p>
          <p class="card-down__price-without-discount">{{priceWithoutDiscount}}</p>
        </div>
        <div class="card-down__wrapper-buy">
          <button :disabled="notAvailable" @click.prevent="(e) => {console.log('buy')}" class="card-down__buy"><img src="../shared/images/common/cart.svg" alt="buy"></button>
        </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {storeToRefs} from "pinia";
import {useModalCard} from "~/entities/stores/modalCard";
import cardCarousel from "../widgets/cardCarousel.vue";

defineProps<{
  name: string,
  img?: Array<string>,
  desc: string,
  price: string,
  priceWithoutDiscount: string,
  promotion: string,
  size: Array<string>,
  notAvailable: boolean,
}>()

const modalStore = useModalCard()
const { idProduct, modalState } = storeToRefs(modalStore)

</script>

<style lang="postcss" scoped>
.button{
  @apply cursor-pointer border-none bg-transparent z-[3] relative;
  &:disabled{
    @apply cursor-auto;
  }
}
.card{
  box-shadow: 0 3px 25px 0 rgba(0, 0, 0, 0.05);
  @apply py-[24px] px-[12px] bg-[#FFF] rounded-[10px] w-[240px] flex flex-col items-center;

  &__promotion{
    @apply absolute z-10 ml-[-180px] mt-[-12px] bg-[#FF9D29] rounded-[7px] text-[#FFFFFF] w-[39px] h-[26px] flex items-center justify-center;
  }

  &__notAvailable{
    @apply absolute z-10 ml-[-100px] mt-[-18px] text-[12px] font-semibold leading-[18px] bg-[#B6B6B6] rounded-[7px] text-[#FFFFFF] w-[113px] h-[26px] flex items-center justify-center;
  }
  &notAvailable{
    @apply opacity-40;
  }

  &__name{
    @apply w-full text-start text-[#2D3E4F] font-extrabold text-[14px] leading-[20px] mt-[8px];
  }
  &__desc{
    @apply text-[#5C6E80] w-full leading-[18px] text-[13px] mt-[8px] text-start;
  }
  &__select{
    background-image:  url("@/shared/images/common/arrow.svg");
    background-repeat: no-repeat;
    background-position: center right .5em;
    background-size: 18px 18px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    @apply mt-[16px] text-[#1E3050] font-medium leading-[18px] font-main pl-[16px] pr-[10px] py-[8px] rounded-[10px] bg-[#1E30500D] border-none h-[34px] w-[215px] text-[14px];

    &:hover, &:target, &:focus{
      @apply outline-0
    }
    & option{
      @apply text-[#1E3050] pl-[15px] font-semibold font-main;
    }
  }

  &-down{
    @apply h-[36px] flex justify-between items-center w-full mt-[16px];

    &__prices{
      @apply flex gap-[12px];
    }
    &__price{
      @apply text-[#2D3E4F] font-extrabold text-[18px] leading-[21px];
    }
    &__price-without-discount{
      @apply text-[#2D3E4F] text-[18px] font-extrabold leading-[21px] opacity-20 line-through;
    }

    &-wrapper-buy{
      @apply z-[4] relative;
    }
    &__buy{
      transition: all .15s ease-in-out;
      @apply relative z-[4] w-[38px] h-[36px] border-none cursor-pointer rounded-[5px] bg-[#1E3050] flex items-center justify-center;

      & img{
        @apply w-[18px] h-[16px]
      }

      &:hover{
        @apply bg-[#0073E6];
      }
      &:active{
        @apply bg-[#B3B3B3]
      }
      &:disabled{
        @apply bg-[#1E3050] cursor-auto;
      }
    }
  }
  &__img{
    @apply w-full object-contain;
  }
}
</style>