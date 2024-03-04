<template>
    <div class="container">
        <div class="header-upper">
            <div class="header-item">
                <router-link to="/" class="header-item__logo"><img src="../shared/images/common/logo.png" alt="logo"></router-link>
                <select class="header-item__place" name="place">
                  <option value="г.Астрахань, ул.Победы 15">г.Астрахань, ул.Победы 15</option>
                </select>
                <router-link to="/about" class="header-item__about">О компании</router-link>
            </div>
            <div class="header-item">
                <a class="header-item__mail" href="mailto:alfavetpetshop@mail.ru "><img src="../shared/images/common/mail.svg" alt="mail">alfavetpetshop@mail.ru </a>
                <a class="header-item__phone" href="tel:78512272327">
                    <img src="../shared/images/common/phone.svg" alt="phone">
                    +7 (8512) 27‒23‒27
                </a>
                <span class="header-item__time">(9:00-19:00)</span>
                <socialButtons size="small" />
            </div>
        </div>
        <div class="header-down">
            <div class="header-down__left">
                <router-link to="/cataloge" class="header-down__category"><img src="../shared/images/animal/cat.svg" alt="cat" style="width: 18px; height: 16px;">Кошки</router-link>
                <a href="" class="header-down__category"><img src="../shared/images/animal/dog.svg" alt="dog" style="width: 18px; height: 16px;">Собаки</a>
                <a href="" class="header-down__category"><img src="../shared/images/animal/humster.svg" alt="humster" style="width: 16px; height: 15px; margin-right: 2px">Грызуны</a>
                <a href="" class="header-down__category"><img src="../shared/images/animal/crow.svg" alt="crow" style="width: 20px; height: 16px;">Птицы</a>
                <a href="" class="header-down__category"><img src="../shared/images/animal/fish.svg" alt="fish" style="width: 18px; height: 16px;">Рыбы</a>
                <a href="" class="header-down__category"><img src="../shared/images/animal/frog.svg" alt="frog" style="width: 18px; height: 16px;">Рептилии</a>
                <a href="" class="header-down__category"><img src="../shared/images/animal/med.svg" alt="med" style="width: 17px; height: 17px;">Ветаптека</a>
            </div>
            <div class="header-down__right">
              <input class="header-down__search" placeholder="Поиск">
              <router-link class="header-down__cart" to="/cart"><img src="../shared/images/common/cart.svg" alt="cart"><div class="header-down__number">0</div></router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import socialButtons from "../features/socialButtons.vue";
</script>

<style lang="postcss" scoped>
.header{

    &-upper{
        @apply flex items-center justify-between;

    }
    &-down{
        @apply flex items-center bg-[#F7F7F8] rounded-[10px] justify-between h-[60px] mt-[0px] pl-[16px] pr-[24px];

      &__category{
        @apply flex items-center gap-[4px] text-[var(--accent-color)] font-semibold text-[16px];
      }
      &__number{
        @apply ml-[42px] mt-[-35px] text-[12px] font-semibold text-[#FFF] absolute bg-[var(--action-color)] rounded-[100px] w-[24px] h-[19px] flex items-center justify-center;
      }
      &__left{
        @apply flex gap-[24px];
      }
      &__right{
        @apply flex gap-[8px];
      }

      &__search{
        transition: all .2s ease-in-out;
        background-image: url("@/shared/images/common/search.svg");
        background-repeat: no-repeat;
        background-position: center left 10px;
        background-size: 20px 20px;
        @apply text-[#000000] border-none rounded-[10px] text-[16px] pl-[40px] font-semibold w-[222px] bg-[rgba(30,_48,_80,_0.05)];

        &::placeholder{
          @apply text-[#1E30504D] font-semibold font-main;
        }
        &:focus, &:active, &:target, &:focus-visible{
          border: none;
          outline: none;
          background-image: url("@/shared/images/common/search-active.svg");
          background-repeat: no-repeat;
          background-position: center left 10px;
          background-size: 20px 20px;
        }
      }
      &__cart
      {
        transition: all .15s ease-in-out;
        @apply flex justify-center items-center bg-[#1E3050] w-[44px] h-[44px] rounded-[8px];

        &:hover{
          @apply bg-[#0073E6];
        }
        &:active{
          @apply bg-[#B3B3B3]
        }
      }
    }
    &-item{
        @apply flex items-center;

        &__logo{
            @apply w-[73px] h-[69px] mr-[20px];

            & img{
                @apply w-[73px] h-[69px];
            }
        }
        &__place{
            background-image: url("@/shared/images/common/pointMap.svg"), url("@/shared/images/common/arrow.svg");
            background-repeat: no-repeat, no-repeat;
            background-position: center left 10px, center right .5em;
            background-size: 12px 16px, 18px 18px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            @apply text-[#8992A3] font-semibold font-main pl-[27px] pr-[10px] py-[8px] mr-[24px] rounded-[10px] bg-[#1E30500D] border-none h-[44px] w-[295px];

            & option{
                @apply text-[#1E3050] pl-[15px] font-semibold font-main;
            }
        }
        &__about{
            @apply text-[16px] text-[var(--text-header)] font-semibold;
        }
        &__mail{
            @apply text-[16px] font-semibold text-[#1E3050] flex items-center gap-[8px] pr-[24px];
        }
        &__phone{
            @apply text-[16px] font-semibold text-[#1E3050] flex items-center gap-[8px] pr-[10px];
        }
        &__time{
            @apply text-[16px] font-semibold text-[#1E3050] opacity-30 pr-[23px]
        }
    }
}
</style>