<template>
  <headerCommon/>

  <modalCard v-if="false" :modelValue="false">
    <div class="offence">
        <button class="offence__close"><img alt="close" src="../shared/images/common/closeButton.svg"></button>
      <div class="offence-content">
        <p class="offence-content__title">Ваш заказ успешно оформлен!</p>
        <p class="offence-content__desc">Вся информация о заказе была выслана на почтовый адрес, который вы указали при оформлении заказа (<a>test@mail.ru</a>). В ближайшее время с вами свяжется наш менеджер для подтверждения заказа и согласования деталей по доставке. Спасибо за заказ!</p>
        <button class="offence-content__button"><img src="../shared/images/common/pawWhite.svg" alt="paw">Понятно</button>
      </div>
    </div>
  </modalCard>
  <div class="container">
    <div class="breadcrums">
      <breadcrumsVue  :links="['/', '/cart']" :text="['Главная', 'Корзина']"/>
    </div>
    <div v-if="!isEmpty" class="cart">
      <div class="cart-left">
        <div class="control">
          <label for="allCheckbox" class="control__checkbox">
          <input name="allCheckbox" id="allCheckbox" type="checkbox">
          </label>
          <button class="control__take">Выбрать все товары</button>
          <button class="control__delete">Удалить выбранные</button>
        </div>
        <div class="cart-left__cards">
          <cartCard name="Пауч Felix для взрослых кошек,кусочки в желе с лососем, Аппетитные кусочки, 75 г" size="0,075 кг" article="5689074" image="/" price="56 ₽"  :priceWithoutDiscount="null" />
          <cartCard name="Wellkiss Kitten Delicate Корм сухой для котят с чувствительным пищеварением, с индейкой, 400 гр." size="0,4 кг" article="5689074" image="/" price="359 ₽"  priceWithoutDiscount="450 ₽" />
        </div>
      </div>
      <div class="cart-right">
        <div class="cart-right__stats">
          <p class="cart-right__stats-col">2 товара</p>
          <p class="cart-right__stats-size">Вес заказа: 0,475 кг</p>
        </div>
        <div class="cart-right__cost">
          <p class="cart-right__cost-text">Цена без скидки</p>
          <p class="cart-right__cost-price">506 ₽</p>
        </div>
        <div class="cart-right__discount">
          <p class="cart-right__discount-text">Скидка</p>
          <p class="cart-right__discount-cost">41 ₽</p>
        </div>
        <div class="cart-right__line"></div>
        <div class="cart-right__total">
          <p class="cart-right__total-text">Итого</p>
          <p class="cart-right__total-price">415 ₽</p>
        </div>
        <div class="cart-right__button">
          <button>
            Перейти к оформлению
            <img src="../shared/images/common/arrowRightWhite.svg" alt="arrow">
          </button>
        </div>
      </div>
    </div>
    <div v-if="isEmpty" class="cart-empty">
      <router-link to="/cataloge">
      <div class="cart-empty__content">
        <img alt="cart" src="../shared/images/common/emptyCart.png">
        <p class="cart-empty__content-title">Ваша корзина пуста</p>
        <p class="cart-empty__content-desc">Выбирайте товары, добавляйте в корзину и поскорей возвращайтесь!</p>
      </div>
      </router-link>
    </div>
  </div>
  <div class="footer">
    <footerCommon/>
  </div>
</template>

<script setup lang="ts">

import headerCommon from "../widgets/headerCommon.vue";
import footerCommon from "../widgets/footerCommon.vue";
import breadcrumsVue from "../widgets/breadcrumsVue.vue";
import cartCard from "../features/cartCard.vue";
import {ref} from "vue";
import ModalCard from "../widgets/modalCard.vue";

let isEmpty = ref(true)
</script>

<style lang="postcss" scoped>
.footer{
  @apply mt-[80px];
}
.breadcrums{
  @apply mt-[24px];
}
.offence{
  @apply bg-[#FFF] w-[622px] rounded-[20px] flex flex-col items-end;

  &__close{
    @apply bg-transparent border-none p-[24px];
  }
  &-content{
    @apply flex flex-col px-[80px];

    &__title{
      @apply text-center mt-[12px] text-[var(--accent-color)] text-[24px] font-bold leading-[120%];
    }
    &__desc{
      @apply mt-[16px] text-[16px] font-medium text-[#5C6E80] leading-[120%];

      & a{
        @apply text-[#0073E6] ;
      }
    }

    &__button{
      @apply mb-[60px] bg-[var(--accent-color)] border-none mt-[32px] text-[#FFF] font-semibold text-[16px] leading-[150%] flex items-center justify-center py-[10px] rounded-[10px];

      & img{
        @apply mr-[6px];
      }

      &:hover{
        @apply bg-[#0073E6];
      }
      &:active{
        @apply bg-[#B3B3B3]
      }
    }
  }
}

.cart{
  @apply flex gap-[20px] mt-[16px];

  &-empty{
    @apply flex items-center justify-center mt-[80px] mb-[121px];

    &__content{
      @apply flex justify-center items-center flex-col;

      & img{
        @apply w-[260px];
      }

      &-title{
        @apply text-[24px] text-[var(--accent-color)] leading-[120%] font-bold mt-[20px];
      }
      &-desc{
        @apply text-[13px] text-[#5C6E80] leading-[140%] font-medium mt-[8px] w-[265px] text-center;
      }
    }
  }

  &-left{
    @apply flex flex-col gap-[8px] w-[860px];

    &__cards{
      @apply flex flex-col gap-[8px];
    }
  }

  &-right{
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.05);
    @apply w-[400px] h-[268px] rounded-[10px];

    &__stats{
      @apply mt-[24px] px-[24px] flex items-center justify-between;

      & p{
        @apply font-semibold text-[13px] leading-[18px];
      }

      &-col{
        @apply text-[#1E3050];
      }
      &-size{
        @apply text-[#A5ACB9];
      }
    }

    &__cost{
      @apply mt-[16px] px-[24px] flex items-center justify-between;

      & p{
        @apply font-semibold text-[16px] leading-[18px] text-[#1E3050];
      }
    }

    &__discount{
      @apply mt-[8px] px-[24px] flex items-center justify-between;

      & p{
        @apply font-semibold text-[16px] leading-[18px] text-[#FF9D29];
      }
    }
    &__line{
      @apply w-full h-[1px] bg-[#F3F4F6] mt-[24px];
    }

    &__total{
      @apply mt-[16px] px-[24px] flex items-center justify-between;

      &-text{
        @apply font-bold text-[20px] text-[#000] leading-[135%];
      }
      &-price{
        @apply font-extrabold text-[24px] text-[#000] leading-[21.8px];
      }
    }
    &__button{
      @apply flex items-center justify-center mt-[24px] px-[24px];

      & button{
        transition: all .15s ease-in-out;
        @apply flex items-center w-full justify-center py-[16px] border-none rounded-[10px] bg-[#1E3050] text-[16px] font-semibold text-[#FFF] cursor-pointer;

        & img{
          @apply w-[18px] h-[18px] ml-[4px] mt-[1px];
        }

        &:hover{
          @apply bg-[#0073E6];
        }

        &:active{
          @apply bg-[#B3B3B3]
        }
      }
    }
  }
}

.control{
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.05);
  @apply w-full rounded-[8px] py-[16px] pl-[16px] flex items-center h-[52px];

  &__checkbox{

    @apply bg-[#F3F4F6] rounded-[4px] cursor-pointer w-[18px] h-[18px] mr-[8px];

    & input{
      @apply opacity-0 z-[-1] absolute w-[18px] h-[18px];
    }

    &:hover{
      @apply bg-[var(--accent-color)] cursor-pointer;
    }
  }


  &__take{
    @apply border-none bg-transparent font-medium text-[13px] leading-[150%] text-[#000] cursor-pointer mr-[16px];
  }
  &__delete{
    @apply border-none bg-transparent font-medium text-[13px] text-[#FA5A65] leading-[150%] cursor-pointer;
  }
}
</style>