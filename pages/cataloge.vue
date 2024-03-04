<template>
  <headerCommon />
  <productBlock  v-if="modalState" v-model="modalState" />
  <div class="container">
    <div class="item">
      <div>
        <breadcrumsVue :text="['Главная', 'Товары для кошек']" :links="['/', '/cataloge']" />
        <div class="filter-wrapper">
          <div class="filter">
            <div class="filter-item filter__active">
              <button>
                Для кошек
                <img src="../shared/images/common/arrowDown.svg" alt="arrow" />
              </button>
            </div>
            <div class="filter-item">
              <button>
                Для cобак
                <img src="../shared/images/common/arrowDown.svg" alt="arrow" />
              </button>
            </div>
            <div class="filter-item">
              <button>
                Для грызунов
                <img src="../shared/images/common/arrowDown.svg" alt="arrow" />
              </button>
            </div>

            <div class="filter-item">
              <button>
                Для птиц
                <img src="../shared/images/common/arrowDown.svg" alt="arrow" />
              </button>
            </div>

            <div class="filter-item">
              <button>
                Для рыб
                <img src="../shared/images/common/arrowDown.svg" alt="arrow" />
              </button>
            </div>
            <div class="filter-item">
              <button>
                Для рептилий
                <img src="../shared/images/common/arrowDown.svg" alt="arrow" />
              </button>
            </div>
            <div class="filter-item">
              <button>
                Ветаптека
                <img src="../shared/images/common/arrowDown.svg" alt="arrow" />
              </button>
            </div>
          </div>
          <div class="filter" style="padding: 8px 0">
            <div class="filter-item">
              <button>
                Стоимость
                <img src="../shared/images/common/arrowDown.svg" alt="arrow" />
              </button>
            </div>
            <div class="filter-item">
              <button>
                Бренд
                <img src="../shared/images/common/arrowDown.svg" alt="arrow" />
              </button>
            </div>
          </div>
          <button class="filter__reset">Сбросить фильтр</button>
        </div>
      </div>
      <div class="goods">
        <div class="goods-upper">
          <div class="goods-upper__left">
            <p class="goods-upper__title">Товары для кошек</p>
            <p class="goods-upper__sum">1240 товаров</p>
          </div>
          <select class="goods-upper__select" name="filter">
            <option value="По популярности">По популярности</option>
          </select>
        </div>
        <div class="goods-down">
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="false" />
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г2" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="true" />
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="false" />
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г2" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="true" />
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="false" />
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г2" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="true" />
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <footerCommon />
  </div>
</template>

<script setup lang="ts">
import headerCommon from '../widgets/headerCommon.vue'
import footerCommon from '../widgets/footerCommon.vue'
import breadcrumsVue from '../widgets/breadcrumsVue.vue'
import productCard from "../features/productCard.vue";
import ProductBlock from "../widgets/productBlock.vue";
import {ref} from "vue";
import {useModalCard} from "@/entities/stores/modalCard";
import {storeToRefs} from "pinia";

const modalStore = useModalCard()
const { idProduct, modalState } = storeToRefs(modalStore)

</script>

<style lang="postcss" scoped>
.footer{
  @apply mt-[90px];
}
.item{
  @apply mt-[24px] pl-[16px] flex;
}

.goods{
  @apply pl-[20px] w-full;

  &-down{
    @apply mt-[20px] flex gap-[20px_14px] flex-wrap;
  }
  &-upper{

    @apply flex justify-between w-full items-center;

    &__left{
      @apply flex items-baseline gap-[16px];
    }

    &__title{
      @apply text-[30px] font-bold text-[var(--accent-color)];
    }
    &__sum{
      @apply text-[16px] font-semibold text-[var(--accent-color)] opacity-30;
    }

    &__select{
      background-image:  url("@/shared/images/common/arrow.svg");
      background-repeat: no-repeat;
      background-position: center right .5em;
      background-size: 18px 18px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      @apply text-[#1E3050] font-semibold font-main pl-[16px] pr-[10px] py-[8px] rounded-[10px] bg-[#1E30500D] border-none h-[44px] w-[215px] text-[14px];

      &:hover, &:target, &:focus{
        @apply outline-0
      }
      & option{
        @apply text-[#1E3050] pl-[15px] font-semibold font-main;
      }
    }
  }
}
.filter {
  box-shadow: 0px 3px 25px 0px rgba(0, 0, 0, 0.05) ;
  @apply w-[240px] rounded-[10px] mt-[16px] flex flex-col gap-[10px] items-center py-[18px];

  &-wrapper{
    @apply flex flex-col max-w-[240px];
  }
  &-item {
    @apply w-full px-[16px] py-[7px];

    & button {
      @apply flex justify-between items-center w-[208px] border-none bg-transparent text-[#000] font-bold text-[14px];
      & img {
        @apply w-[15px] h-[15px];
      }
    }
  }
  &__active {
    @apply bg-[#006DAB0D];
  }

  &__reset{
    @apply border-none bg-transparent text-[#006DAB] underline text-[13px] font-semibold mt-[16px];
  }
}
</style>
