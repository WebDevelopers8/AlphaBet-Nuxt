<template>
  <headerCommon />
    <div class="container">
      <div class="carousel">
        <homeCarousel />
      </div>
      <div class="popular">
        <p class="popular__title">Популярные товары</p>
        <div class="popular-content">
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="false" />
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="false" />
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="false" />
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="false" />
          <productCard  name="FELIX" desc="Пауч Felix для взрослых кошек, кусочки в желе с лососем, Аппетитные кусочки, 75 г" price="56 ₽" priceWithoutDiscount="72 ₽" :size="['75 г']" promotion="2+1" :notAvailable="false" />

        </div>
      </div>
      <div class="stock">
        <p class="stock__title">Акции</p>
        <div class="stock-content">
            <div class="stock-content-card">
                <img src="../shared/images/mok/firstStock.png" alt="stock">
                <div class="stock-content-card__down">
                  <div>
                    <p>До 24 декабря</p>
                  </div>
                  <p class="stock-content-card__down-name">2+1 На все виды корма 75г от Felix</p>
                </div>
            </div>
          <div class="stock-content-card">
            <img src="../shared/images/mok/secondStock.png" alt="stock">
            <div class="stock-content-card__down">
              <div>
                <p>До 20 декабря</p>
              </div>
              <p class="stock-content-card__down-name">Скидки на кошачьи наполнители</p>
            </div>
          </div>
          <div class="stock-content-card">
            <img src="../shared/images/mok/thirdStock.png" alt="stock">
            <div class="stock-content-card__down">
              <div>
                <p>До 31 декабря</p>
              </div>
              <p class="stock-content-card__down-name">Скидки на любимые лакомтсва вашего друга!</p>
            </div>
          </div>
          <div class="stock-content-card">
            <img src="../shared/images/mok/fourthStock.png" alt="stock">
            <div class="stock-content-card__down">
              <div>
                <p>До 9 декабря</p>
              </div>
              <p class="stock-content-card__down-name">Модный сезон: 2+1 наряд для
                питомца в подарок</p>
            </div>
          </div>
        </div>
      </div>

      <div class="products">
        <p class="products__title">Товары по разделам</p>
        <div class="products-content">
          <div class="products-content__upper">
            <router-link to="/cataloge"><img src="../shared/images/common/firstProducts.png" alt="products"></router-link>
            <router-link to="/cataloge"><img src="../shared/images/common/secondProducts.png" alt="products"></router-link>
            <router-link to="/cataloge"><img src="../shared/images/common/thirdProducts.png" alt="products"></router-link>
          </div>
          <div class="products-content__down">
            <router-link to="/cataloge"><img src="../shared/images/common/fourthProducts.png" alt="products"></router-link>
            <router-link to="/cataloge"><img src="../shared/images/common/fivethProducts.png" alt="products"></router-link>
            <router-link to="/cataloge"><img src="../shared/images/common/sixthProducts.png" alt="products"></router-link>
            <router-link to="/cataloge"><img src="../shared/images/common/seventhProducts.png" alt="products"></router-link>
          </div>
        </div>
      </div>

      <div class="brends">
        <p class="brends__title">Популярные бренды</p>
        <div class="brends-content">
          <div class="brends-content__upper">
              <div class="brends-card__big">
                  <img src="../shared/images/brends/royalCanin.png" alt="royal canin">
              </div>
              <div class="brends-content__upper-small">
                <div class="brends-card__small">
                  <img src="../shared/images/brends/abba.png" alt="abba">
                </div>
                <div class="brends-card__small">
                  <img src="../shared/images/brends/inspector.png" alt="inspector">
                </div>
                <div class="brends-card__small">
                  <img src="../shared/images/brends/wellKiss.png" alt="well kiss">
                </div>
                <div class="brends-card__small">
                  <img src="../shared/images/brends/krka.png" alt="krka">
                </div>
              </div>
          </div>
          <div class="brends-content__down">
            <div class="brends-content__upper-small">
              <div class="brends-card__small">
                <img src="../shared/images/brends/monge.png" alt="monge">
              </div>
              <div class="brends-card__small">
                <img src="../shared/images/brends/Farmina.png" alt="Farmina">
              </div>
              <div class="brends-card__small">
                <img src="../shared/images/brends/grandin.png" alt="grandin">
              </div>
              <div class="brends-card__small">
                <img src="../shared/images/brends/mealfeel.png" alt="mealfeel">
              </div>
            </div>
            <div class="brends-card__big">
              <img src="../shared/images/brends/proPlan.png" alt="royal canin">
            </div>
          </div>
        </div>
      </div>
    </div>
  <footerCommon />
</template>

<script setup lang="ts">
import headerCommon from '../widgets/headerCommon.vue';
import footerCommon from "../widgets/footerCommon.vue";
import homeCarousel from "../widgets/homeCarousel.vue";
import ProductCard from "../features/productCard.vue";
</script>

<style lang="postcss" scoped>
.carousel{
  @apply mt-[32px];
}
.brends{
  @apply my-[80px];

  &__title{
   @apply font-bold text-[30px] text-[var(--accent-color)] leading-[120%];
  }
  &-content{
    @apply mt-[24px] flex flex-col gap-[20px];

    &__down{
      @apply flex flex-row gap-[20px];
    }
    &__upper{
      @apply flex flex-row gap-[20px];

      &-small{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        width: 630px;
      }
    }
  }
  &-card{
    &__big{
      @apply w-[630px] h-[320px] bg-[#F3F4F6] rounded-[10px] flex items-center justify-center;
    }
    &__small{
      @apply w-[305px] h-[150px] bg-[#F3F4F6] rounded-[10px] flex items-center justify-center;
    }
  }
}

.products{
  @apply mt-[83px];

  &__title{
    @apply font-bold text-[30px] text-[var(--accent-color)];
  }
  &-content{
    @apply flex flex-col mt-[24px];
    &__upper{
      @apply flex gap-[20px];
    }
    &__down{
      @apply flex gap-[20px] mt-[10px];
    }
  }
}

.stock{
  @apply mt-[90px];

  &__title{
    @apply font-bold leading-[120%] text-[30px] text-[var(--accent-color)];
  }

  &-content{
    @apply mt-[24px] flex flex-row gap-[20px];


    &-card{
      box-shadow: 0 3px 25px rgba(0, 0, 0, 0.05);

      @apply rounded-[10px] w-[305px] h-[297px];

      &__down{
        @apply px-[16px] py-[8px] flex flex-col items-start;

        &-name{
          @apply text-[18px] font-bold leading-[120%] text-[#1D364B] mt-[8px];
        }
        & div{
          @apply rounded-[10px] bg-[#F3F4F6] p-[10px];

          & p{
          @apply text-[var(--accent-color)] text-[12px] font-semibold leading-[150%];
          }
        }
      }
    }
  }
}

.popular{
  margin-top: 60px;

  &-content{
    @apply mt-[24px] flex gap-[20px];
  }

  &__title{
   @apply text-[var(--accent-color)] leading-[120%] font-bold text-[30px] ;
  }
}
</style>
