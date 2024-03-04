<template>
  <div class="card">
    <div class="card-input">
      <label class="checkbox">
        <input type="checkbox">
      </label>
    </div>
    <img class="card__image" src="@/shared/images/mok/felix.png" alt="image">
    <div class="card-content">
      <div class="card-info">
        <p class="card-info__name">{{ name }}</p>
        <div class="card-info__other">
          <p class="card-info__size">Вес: {{ size }}</p>
          <p class="card-info__article">Артикуль: {{ article }}</p>
        </div>
        <div class="card-col">
          <button @click="() => {col--}"><img src="@/shared/images/common/minus.svg" alt="minus"></button>
          <p>{{ col }}</p>
          <button @click="() => {col++}"><img src="@/shared/images/common/plus.svg" alt="plus"></button>
        </div>
      </div>
      <div class="card-right">
        <div class="card-right__costs">
          <p class="card-right__price">{{ price }}</p>
          <p class="card-right__priceDiscount" v-if="priceWithoutDiscount != null">{{ priceWithoutDiscount }}</p>
        </div>
        <button>
          <img src="@/shared/images/common/delete.svg" alt="delete product">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

defineProps<{
  name: string,
  image: string,
  size: string,
  article: string,
  price: string,
  priceWithoutDiscount: string | null,
}>()

let col = ref(1)

</script>

<style lang="postcss" scoped>

.checkbox{
  @apply bg-[#F3F4F6] rounded-[4px] cursor-pointer w-[18px] h-[18px] mr-[8px];

  & input{
    @apply opacity-0 z-[-1] absolute w-[18px] h-[18px];
  }

  &:hover{
    @apply bg-[var(--accent-color)] cursor-pointer;
  }
}

.card {
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.05);
  @apply w-full rounded-[10px] flex items-center h-[148px];

  &__image{
    @apply w-[116px] h-[116px] py-[16px] ml-[8px] object-cover;
  }

  &-input{
    @apply flex flex-col ml-[16px] mt-[16px] h-full;
  }

  &-right{
    @apply flex flex-col mr-[16px] justify-between pb-[16px] items-end w-[392px];

    &__costs{
      @apply flex flex-col;
    }

    &__price{
      @apply font-extrabold text-[18px] text-[#2D3E4F] leading-[21.8px];
    }
    &__priceDiscount{
      @apply text-[#D5D8DC] text-[18px] font-bold line-through leading-[18px];
    }

    & button{
      @apply w-[30px] h-[32px] rounded-[4px] flex justify-center items-center bg-[#E9EBEE] border-none cursor-pointer ;

      & img{
        @apply w-[14px] h-[16px];
      }
    }
  }

  &-info{
    @apply flex flex-col ml-[36px];

    &__name{
      @apply w-[400px] font-semibold text-[13px] text-[var(--accent-color)] leading-[18px];
    }

    &__other{
      @apply flex gap-[16px] mt-[8px];
    }

    &__size{
      @apply font-semibold text-[13px] text-[#A5ACB9] leading-[18px];
    }
    &__article{
      @apply font-semibold text-[13px] text-[#A5ACB9] leading-[18px];
    }
  }

  &-col{
    @apply flex mt-[18px] gap-[12px] items-center;

    & button{
      @apply w-[30px] h-[30px] flex justify-center items-center border-none bg-[#F3F4F6] cursor-pointer;

      & img{
        @apply w-[18px] h-[18px];
      }
    }
    & p{
      @apply text-[var(--accent-color)] font-semibold text-[13px] leading-[18px] w-[12px];
    }
  }
  &-content{
    @apply flex justify-between w-[81%] h-full pt-[16px];
  }
}
</style>