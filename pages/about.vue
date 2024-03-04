<template>
  <headerCommon/>
  <div class="container">
    <div class="breadcrums">
      <breadcrumsVue :text="[`Главная`, `О компании`]" :links="['/', '/about']"/>
    </div>

    <div class="about">
      <img class="about__upper-line" src="../shared/images/about/upperLine.svg" alt="line">
      <img class="about__down-line" src="../shared/images/about/downLine.svg" alt="line">
      <div class="about__button"><img src="../shared/images/common/paw.svg" alt="paw"></div>
      <div class="about-left">
        <p class="about-left__title">О нас</p>
        <p class="about-left__subtitle">
          Более 20 лет на рынке!
          Мы предлагаем большой ассортимент ветеринарных препаратов для продуктивных и непродуктивных животных.
          Высококвалифицированные специалисты, имеющие высшее ветеринарное образование, обеспечат индивидуальный
          подход в решении возникших проблем.<br><br>
          Широкий спектр качественных кормов сохранит здоровье и красоту ваших питомцев, подарит им активное
          долголетие, а, при необходимости, обеспечит их диетическим питанием.
          Оптимальное сочетание цены и качества порадует вас!
          Ждём вас в нашем интернет-магазине!
        </p>
        <p class="about-left__quote">
          «Забота о ваших питомцах - наш приоритет!» <br>
          <span>- Альфавет</span>
        </p>
      </div>
      <img class="about-right" src="../shared/images/about/about.png" alt="image">
    </div>

    <div class="shops">
      <p class="shops__title">Магазины</p>
      <iframe class="shops-map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab90756eeaff5c92a704d867d9252a176028ecf96cc16dba9c63e2c7d2696bc66&amp;source=constructor"
              width="100%" height="450" frameborder="0"></iframe>
    </div>

    <div class="contact">
      <p class="contact__title">Контакты и реквизиты</p>
      <div class="contact-info">
        <div>
          <a href="mailto:alfavetpetshop@mail.ru" class="contact-left__mail"><img
              src="../shared/images/common/mailSolid.svg" alt="mail">alfavetpetshop@mail.ru</a>
          <a href="tel:+78512272327" class="contact-left__phone"><img alt="phone"
                                                                      src="../shared/images/common/phoneSolid.svg">+7
            (8512) 27‒23‒27</a>
          <p class="contact-left__time">Принимаем звонки с 9:00 до 19:00</p>

          <p class="contact-left__social">Мы в соцсетях</p>
          <div class="contact-left__social-block">
            <socialButtons size="large"/>
          </div>
          <div class="contact-left__wrapper-button">
            <a class="contact-left__button" href="#footer">Форма обратной связи</a>
          </div>
        </div>
        <div>
          <p class="contact-right__title">Индивидуальный предприниматель</p>
          <p class="contact-right__subtitle">
            Удочкина Елена Николаевна<br>
            Юр.адрес:414004 г. Астрахань, ул. В.Барсовой, д.16, кв.26<br>
            Фак.адрес:414000 г. Астрахань, ул. Победы, д.15<br>
            414041 г.Астрахань Минусинская 8<br>
            ИНН 301510045351 ОГРНИП 309301533100032<br>
            Действующая на основании:<br>
            Свидетельства серии 30 № 001214841 выданного ИФНС по Кировскому району <br>г. Астрахани 27.11.2009
            года<br>
            Банк: АСТРАХАНСКОЕ ОТДЕЛЕНИЕ N8625<br>
            ПАО СБЕРБАНКГ.АСТРАХАНЬ<br>
            БИК 041203602 рас.счет 40802810005000020451<br>
            кор.счет 30101810500000000602<br>
            ОКПО 0168067005 ОКВЭД 85.2<br>
            раб.тел.: <a href="tel:51-57-47">51-57-47</a> моб.тел.: <a
              href="tel:89054807776">89054807776</a><br>
            Е-mail: <a href="mailto:vet-laska@mail.ru">vet-laska@mail.ru</a></p><br>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <footerCommon/>
  </div>
</template>

<script setup lang="ts">
import breadcrumsVue from '../widgets/breadcrumsVue.vue'
import headerCommon from '../widgets/headerCommon.vue'
import footerCommon from '../widgets/footerCommon.vue'
import socialButtons from "../features/socialButtons.vue";
</script>

<style lang="postcss" scoped>
.breadcrums{
  @apply mt-[24px];
}
.footer{
  @apply mt-[80px];
}
.about {
  @apply flex justify-between mt-[16px] bg-[#004D79] pl-[40px] h-[450px] rounded-[12px];

  &__upper-line {
    @apply absolute ml-[428px];
  }

  &__down-line {
    @apply absolute mt-[363px] ml-[524px];
  }

  &__button {
    transform: rotate(-15deg);
    @apply absolute mt-[347px] ml-[520px] rounded-[100px] bg-[#FFF] w-[70px] h-[70px] flex justify-center items-center;

    & img {
      @apply w-[32px] h-[32px];
    }
  }

  &-right {
    @apply z-[1];
  }

  &-left {

    @apply py-[50px] w-[449px];

    &__title {
      @apply text-[30px] text-[#FFF] font-bold leading-[36px];
    }

    &__subtitle {
      @apply text-[#B8E5FF] text-[16px] leading-[18px] font-medium mt-[16px];
    }

    &__quote {
      @apply text-[#B8E5FF] text-[16px] leading-[18px] font-medium mt-[16px];

      & span {
        @apply text-[#FFF] text-[16px] font-medium leading-[18px] font-main;
      }
    }
  }
}

.shops {
  @apply w-full mt-[80px];

  &-map{
    @apply mt-[16px] rounded-[12px];
  }
  &__title {
    @apply text-[var(--accent-color)] text-[30px] font-bold leading-[36px];
  }
}

.contact {

  @apply mt-[89px];

  &-info {
    @apply mt-[10px] flex justify-between;
  }

  &-left {
    @apply flex flex-col;

    &__mail {
      @apply text-[var(--accent-color)] text-[16px] font-semibold leading-[24px] flex items-center;

      & img {
        @apply w-[16px] h-[16px] mr-[8px];
      }
    }

    &__phone {
      @apply text-[var(--accent-color)] text-[16px] font-semibold leading-[24px] flex items-center mt-[10px];

      & img {
        @apply w-[16px] h-[16px] mr-[8px];
      }
    }

    &__time {
      @apply text-[var(--accent-color)] opacity-30 font-semibold text-[16px] ml-[23px];
    }

    &__social {
      @apply text-[14px] text-[var(--accent-color)] font-bold leading-[18.9px] mt-[24px];
      &-block{
        @apply mt-[8px];
      }
    }
    &__wrapper-button{
      @apply mt-[74px];
    }
    &__button {
      @apply flex items-center justify-center bg-[#006DAB1A] text-[16px] font-semibold text-[var(--accent-color)] leading-[19.2px] py-[16px] px-[30px] w-[352px] h-[51px] rounded-[8px] mt-[74px];
    }
  }

  &-right {
    @apply flex flex-col;

    &__title {
      @apply text-[var(--accent-color)] text-[14px] leading-[18.9px] font-bold;
    }

    &__subtitle {
      @apply text-[13px] leading-[18.2px] font-medium text-[#5C6E80];

      & a {
        @apply text-[#5C6E80] text-[13px] font-medium font-main;
      }
    }
  }

  &__title {
    @apply text-[#1E3050] text-[30px] font-bold leading-[36px];
  }


}</style>