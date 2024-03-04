<template>
  <div class="footer-item">
    <div class="container">
    <div class="footer" id="footer">
      <div class="footer-left">
        <div class="footer-contact">
        <a class="footer-contact__mail" href="mailto:alfavetpetshop@mail.ru"
          ><img src="../shared/images/common/mailSolid.svg" alt="mail" />alfavetpetshop@mail.ru</a
        >
        <a class="footer-contact__phone" href="tel:+78512272327"
          ><img src="../shared/images/common/phoneSolid.svg" alt="phone" />+7 (8512) 27‒23‒27</a
        >
        <p class="footer-contact__time">(9:00-19:00)</p>
        <p class="footer-contact__place">
          <img
            src="../shared/images/common/pointMapSolid.svg"
            alt="point map"
            style="margin-top: 24px"
          />г.Астрахань, ул.Победы 15/16
        </p>
        <p class="footer-contact__time">пн-вс 9:00-19:00</p>
        <p class="footer-contact__place">
          <img
            src="../shared/images/common/pointMapSolid.svg"
            alt="point map"
            style="margin-top: 9px"
          />г.Астрахань, ул. Наташи Качуевской, 16/15
        </p>
        <p class="footer-contact__time">пн-вс 9:00-19:00</p>
        <div class="footer-contact__social">
          <socialButtons size="large" />
        </div>
        <a class="footer-contact__politics">Политика конфиденциальности</a>
      </div>
      <div class="footer-middle">
        <div class="footer-list">
          <p class="footer-list__title">О компании</p>
          <router-link class="footer-list__link" to="/about" style="margin-top: 2px">О нас</router-link>
          <router-link class="footer-list__link" to="#">Магазин</router-link>
          <router-link class="footer-list__link" to="#">Контакты и реквизиты</router-link>
        </div>
        <div class="footer-list">
          <p class="footer-list__title">Каталог</p>
          <router-link class="footer-list__link" to="#" style="margin-top: 2px">Кошки</router-link>
          <router-link class="footer-list__link" to="#">Собаки</router-link>
          <router-link class="footer-list__link" to="#">Грызуны</router-link>
          <router-link class="footer-list__link" to="#">Птицы</router-link>
          <router-link class="footer-list__link" to="#">Рыбы</router-link>
          <router-link class="footer-list__link" to="#">Рептилии</router-link>
          <router-link class="footer-list__link" to="#">Ветаптека</router-link>
        </div>
      </div>
      </div>

      <div class="form">
        <p class="form__title">Возникли вопросы или предложения? Будем рады обратной связи!</p>
        <div class="form-inputs" style="margin-top: 16px">
          <input class="form-inputs__input" placeholder="Имя" />
          <input class="form-inputs__input" placeholder="Фамилия" />
        </div>
        <div class="form-inputs" style="margin-top: 8px">
          <input class="form-inputs__input" placeholder="Номер телефона" />
          <input class="form-inputs__input" placeholder="E-mail" />
        </div>
        <textarea class="form-inputs__area" placeholder="Ваш вопрос или предложение"></textarea>
        <div class="form-down">
          <img src="../shared/images/common/animalForm.png" alt="animal" />
          <div class="form-down__wrapper-button">
            <button class="form-down__button"><div></div>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import SocialButtons from '../features/socialButtons.vue'
</script>

<style lang="postcss" scoped>
.form {
  @apply bg-[#006DAB] rounded-[20px] w-[630px] pt-[24px] px-[24px];

  &__title {
    @apply text-[20px] font-bold text-[#FFF] max-w-[409px];
  }

  &-down {
    @apply flex flex-row mt-[12px];

    &__wrapper-button{
      @apply flex items-center;
    }
    &__button {
      transition: all 0.2s ease-in-out;
      @apply rounded-[8px] bg-[#FFF] font-semibold text-[var(--accent-color)] px-[30px] py-[10px] border-none w-[167px] h-[44px] flex items-center text-[16px];

      & div {
        background-image: url('@/shared/images/common/paw.svg');
        @apply w-[16px] h-[16px] mr-[6px];

      }

      &:hover {
        @apply bg-[#0073E6] text-[#FFF];

        & div {
          background-image: url('@/shared/images/common/pawWhite.svg');
          background-repeat: no-repeat;

          @apply z-[10]
        }
      }
    }
  }

  &-inputs {
    @apply flex gap-[12px];
    &__input {
      @apply w-[285px] h-[44px] bg-[#1E305033] rounded-[8px] border-none px-[20px] py-[10px] font-main leading-[150%];

      &::placeholder {
        @apply text-[#FFFFFF99] text-[16px] font-semibold font-main leading-[150%];
      }
      &:hover,
      &:active,
      &:focus,
      &:focus-visible,
      &:target {
        @apply text-[#FFFFFF] border-none outline-0;
      }
    }

    &__area {
      @apply h-[72px] text-[#FFFFFF99] w-full resize-none mt-[8px] rounded-[8px] py-[10px] px-[20px] bg-[#1E305033] border-none font-main leading-[150%];

      &::placeholder {
        @apply text-[#FFFFFF99] font-main font-semibold text-[16px] leading-[150%];
      }
      &:hover,
      &:active,
      &:focus,
      &:focus-visible,
      &:target {
        @apply text-[#FFFFFF] border-none outline-0;
      }
    }
  }
}

.footer {
  @apply flex justify-between;

  &-left{
    @apply flex gap-[75px];
  }
  &-item{
    @apply w-full bg-[#F5F5F5] pt-[32px] pb-[29px];
  }
  &-middle{
    @apply flex gap-[41px];
  }
  &-list {
    @apply flex flex-col gap-[8px] w-[97px];

    &__title {
      @apply text-[var(--accent-color)] font-extrabold text-[16px];
    }
    &__link {
      @apply font-semibold text-[16px] text-[var(--accent-color)];
    }
  }
  &-contact {
    @apply flex flex-col w-[260px];

    &__mail {
      @apply font-semibold text-[16px] text-[var(--accent-color)] flex items-center;

      & img {
        @apply w-[16px] h-[16px] mr-[8px];
      }
    }
    &__phone {
      @apply font-semibold text-[16px] text-[var(--accent-color)] flex items-center mt-[10px];

      & img {
        @apply w-[16px] h-[16px] mr-[8px];
      }
    }
    &__time {
      @apply opacity-30 text-[var(--accent-color)] text-[16px] font-semibold ml-[23px];
    }
    &__social{
      @apply mt-[32px];
    }
    &__place {
      @apply text-[16px] font-semibold text-[var(--accent-color)];

      & img {
        @apply w-[16px] h-[16px] mr-[8px];
      }
    }
    &__politics {
      @apply text-[var(--accent-color)] opacity-30 text-[16px] font-semibold mt-[45px] underline;
    }
  }
}
</style>
