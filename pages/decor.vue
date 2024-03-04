<template>
  <div>
    <headerCommon/>

    <div class="container">
      <div class="breadcrums">
        <breadcrumsVue :links="['/', '/cart', '/decor']" :text="['Главная', 'Корзина', 'Оформление заказа']"/>
      </div>
      <div class="cart">
        <div class="cart-left">
          <p class="cart-left__title">Оформление заказа</p>

          <p class="cart-left__delivery">Способ доставки</p>
          <div class="delivery">
            <div class="delivery-card delivery-card__active">
              <img class="delivery-card__image-truck" src="../shared/images/common/truckBlue.svg" alt="truck">
              <div>
                <p class="delivery-card__name">Курьерская доставка</p>
                <p class="delivery-card__desc">Бесплатно при заказе от 1000 ₽ </p>
              </div>
            </div>
            <div class="delivery-card">
              <img class="delivery-card__image-shop" src="../shared/images/common/shopBlue.svg" alt="truck">
              <div>
                <p class="delivery-card__name">Самовывоз</p>
                <p class="delivery-card__desc">Самовывоз из магазина От 0 ₽</p>
              </div>
            </div>
            <div class="delivery-card">
              <img class="delivery-card__image-cdek" src="../shared/images/common/cdek.svg" alt="truck">
              <div>
                <p class="delivery-card__name">CDEK</p>
                <p class="delivery-card__desc">Оформление через менеджера</p>
              </div>
            </div>
          </div>

          <div class="cart-line"></div>

          <p class="title">Адрес доставки</p>
          <div class="address">
            <input class="address__first" placeholder="Улица">
            <div class="address__item">
              <input placeholder="Дом" type="text">
              <input placeholder="Корпус" type="text">
            </div>
            <div class="address__item">
              <input placeholder="Подъезд" type="text">
              <input placeholder="Домофон" type="text">
            </div>
            <div class="address__item">
              <input placeholder="Квартира или офис" type="text">
              <input placeholder="Домофон" type="text">
            </div>
          </div>
          <div class="cart-line"></div>

          <p class="title">Дата доставки</p>
          <div class="date">
            <div class="date-day">
              <div class="date-day__item">
                <p class="date-day__upper">13 дек</p>
                <p class="date-day__down">ср</p>
              </div>
              <div class="date-day__item date-day__active">
                <p class="date-day__upper">14 дек</p>
                <p class="date-day__down">чт</p>
              </div>
              <div class="date-day__item">
                <p class="date-day__upper">15 дек</p>
                <p class="date-day__down">пт</p>
              </div>
            </div>

            <div class="date-time">
              <div class="date-time__item">
                <input type="radio" name="color" value="#00ffff" id="first"/>
                <label for="first" class="first">
                  <div></div>
                </label>
                <p class="date-time__time">9:00-12:00</p>
                <p class="date-time__cost">(бесплатно)</p>
              </div>
              <div class="date-time__item">
                <input type="radio" name="color" value="#00ffff" id="second"/>
                <label for="second" class="second">
                  <div></div>
                </label>
                <p class="date-time__time">12:00-15:00</p>
                <p class="date-time__cost">(бесплатно)</p>
              </div>
              <div class="date-time__item">
                <input type="radio" name="color" value="#00ffff" id="third"/>
                <label for="third" class="third">
                  <div></div>
                </label>
                <p class="date-time__time">16:00-19:00</p>
                <p class="date-time__cost">(бесплатно)</p>
              </div>
            </div>
          </div>

          <div class="cart-line"></div>

          <p class="title">Данные получателя</p>

          <div class="info">
            <input placeholder="Имя" type="text">
            <input placeholder="Телефон" type="text">
            <input placeholder="Почта" type="email">
          </div>

          <div class="cart-line"></div>

          <p class="title">Способы оплаты</p>

          <div class="payment">
            <div class="payment-cards">
              <div class="payment-cards__item payment-cards__active">
                <img src="../shared/images/common/wallet.svg" alt="wallet">
                <p>Наличными</p>
              </div>
              <div class="payment-cards__item">
                <img src="../shared/images/common/creditCard.svg" alt="wallet">
                <p>Картой при получении</p>
              </div>
              <div class="payment-cards__item">
                <img src="../shared/images/common/creditCard.svg" alt="wallet">
                <p>Картой онлайн</p>
              </div>
              <div class="payment-cards__item">
                <img src="../shared/images/common/SBP.svg" alt="wallet">
                <p>Система быстрых
                  платежей</p>
              </div>
            </div>
            <div class="payment-change">
              <p class="payment-change__title">Нужна сдача с,₽</p>
              <input class="payment-change__input" placeholder="Сумма">
            </div>
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
          <p class="cart-right__offer">После оформления заказа с вами свяжется наш менеджер, чтобы подтвердить заказ и
            согласовать детали по доставке и оплате.</p>
        </div>
      </div>
    </div>
    <footerCommon/>
  </div>
</template>

<script setup lang="ts">
import headerCommon from "../widgets/headerCommon.vue";
import footerCommon from "../widgets/footerCommon.vue";
import breadcrumsVue from "../widgets/breadcrumsVue.vue";

</script>

<style lang="postcss" scoped>

.breadcrums {
  @apply mt-[24px];
}

input[type="radio"] {
  display: none;
}

label {
  @apply mr-[10px] w-[18px] h-[18px] border-solid border-[1px] border-[#F3F4F6] block rounded-[100px] bg-[#F3F4F6];

  & div {
    @apply bg-transparent;
  }
}

input[type="radio"]:checked + label {
  @apply flex items-center justify-center border-solid border-[1px] border-[#1E3050];

  & div {
    @apply w-[8px] h-[8px] bg-[#1E3050] rounded-[100px];
  }
}

.title {
  @apply text-[var(--accent-color)] text-[18px] font-bold mt-[24px];
}

.payment {
  @apply flex flex-col gap-[16px];

  &-cards {
    @apply flex flex-row gap-[6px] mt-[16px];

    &__item {
      @apply flex flex-row items-center w-[180px] rounded-[8px] bg-[#F2F7FB] border-[1px] border-solid border-[#FFF] py-[24px] pl-[16px] pr-[14px];

      & img {
        @apply mr-[16px]
      }

      & p {
        @apply text-[#303132] font-semibold text-[13px] leading-[120%];
      }

      &:hover {
        @apply border-[#006DAB];
      }
    }

    &__active {
      @apply border-[#006DAB];
    }
  }

  &-change {
    @apply w-[293px] mb-[76px] flex flex-col gap-[4px];

    &__title {
      @apply text-[#303132] font-medium text-[13px] leading-[150%];
    }

    &__input {
      @apply w-full bg-[#F7F7F8] font-semibold rounded-[4px] border-none pl-[14px] py-[10px];

      &::placeholder {
        @apply text-[#C3C3C3];
      }
    }
  }
}

.info {
  @apply mt-[16px] flex flex-col w-[293px] gap-[8px];

  & input {
    @apply w-full bg-[#F7F7F8] font-semibold rounded-[4px] border-none pl-[14px] py-[10px];

    &::placeholder {
      @apply text-[#C3C3C3];
    }
  }
}

.date {
  @apply mt-[16px] flex flex-col;

  &-day {
    @apply flex flex-row gap-[6px];

    &__item {
      @apply rounded-[6px] bg-[#F2F7FB] border-[1px] border-solid border-[#FFF] py-[8px] pl-[8px] pr-[23px];

      &:hover {
        @apply border-[#006DAB];
      }
    }

    &__active {
      @apply border-[#006DAB];
    }

    &__upper {
      @apply text-[13px] text-[#303132] leading-[120%] font-semibold;
    }

    &__down {
      @apply text-[#9DA7B7] font-medium text-[12px] leading-[120%] mt-[2px];
    }
  }

  &-time {
    @apply mt-[16px] flex flex-col;

    &__item {
      @apply flex flex-row items-center;

    }

    &__input {
      @apply mr-[10px];
    }

    &__time {
      @apply w-[73px] font-medium mr-[14px] text-[13px] leading-[150%] text-[#333333];
    }

    &__cost {
      @apply font-medium text-[12px] leading-[120%] text-[#A5ACB9];
    }
  }
}

.address {
  @apply flex flex-col gap-[8px] w-[594px];

  & input {
    @apply w-full bg-[#F7F7F8] font-semibold rounded-[4px] border-none pl-[14px] py-[10px];

    &::placeholder {
      @apply text-[#C3C3C3];
    }
  }

  &__first {
    @apply mt-[16px];
  }

  &__item {
    @apply flex flex-row gap-[8px];
  }
}

.delivery {
  @apply flex flex-row gap-[8px] mt-[16px];

  &-card {
    @apply border-[#fff] border-solid border-[1px] w-[242px] flex flex-row items-center bg-[#F2F7FB] rounded-[8px] pl-[16px] pt-[17px] pb-[15px] pr-[46px] gap-[16px];

    &:hover {
      @apply border-[#006DAB] border-solid border-[1px];
    }

    &__active {
      @apply border-[#006DAB] border-solid border-[1px];
    }

    &__image {
      &-truck {
        @apply w-[24px] h-[20px];
      }

      &-shop {
        @apply w-[23px] h-[19px];
      }

      &-cdek {
        @apply w-[42px] h-[27px];
      }
    }

    &__name {
      @apply text-[#303132] text-[13px] font-semibold leading-[120%] ;
    }

    &__desc {
      @apply text-[12px] text-[#9DA7B7] leading-[120%] mt-[2px] font-medium;
    }
  }
}

.cart {
  @apply mb-[84px] flex gap-[20px] mt-[16px];

  &-line {
    @apply w-full bg-[#F3F4F6] h-[1px] mt-[24px];
  }

  &-left {
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.05);
    @apply rounded-[10px] flex flex-col w-[860px] px-[24px];


    &__title {
      @apply text-[var(--accent-color)] text-[24px] font-bold leading-[120%] mt-[32px];
    }

    &__delivery {
      @apply mt-[32px] text-[var(--accent-color)] text-[18px] font-bold;
    }

  }

  &-right {
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.05);
    @apply w-[400px] h-[338px] rounded-[10px];

    &__stats {
      @apply mt-[24px] px-[24px] flex items-center justify-between;

      & p {
        @apply font-semibold text-[13px] leading-[18px];
      }

      &-col {
        @apply text-[#1E3050];
      }

      &-size {
        @apply text-[#A5ACB9];
      }
    }

    &__cost {
      @apply mt-[16px] px-[24px] flex items-center justify-between;

      & p {
        @apply font-semibold text-[16px] leading-[18px] text-[#1E3050];
      }
    }

    &__discount {
      @apply mt-[8px] px-[24px] flex items-center justify-between;

      & p {
        @apply font-semibold text-[16px] leading-[18px] text-[#FF9D29];
      }
    }

    &__line {
      @apply w-full h-[1px] bg-[#F3F4F6] mt-[24px];
    }

    &__total {
      @apply mt-[16px] px-[24px] flex items-center justify-between;

      &-text {
        @apply font-bold text-[20px] text-[#000] leading-[135%];
      }

      &-price {
        @apply font-extrabold text-[24px] text-[#000] leading-[21.8px];
      }
    }

    &__button {
      @apply flex items-center justify-center mt-[24px] px-[24px];

      & button {
        transition: all .15s ease-in-out;
        @apply flex items-center w-full justify-center py-[16px] border-none rounded-[10px] bg-[#1E3050] text-[16px] font-semibold text-[#FFF] cursor-pointer;

        & img {
          @apply w-[18px] h-[18px] ml-[4px] mt-[1px];
        }

        &:hover {
          @apply bg-[#0073E6];
        }

        &:active {
          @apply bg-[#B3B3B3]
        }
      }
    }

    &__offer {
      @apply px-[26px] mt-[16px] text-[#788396] text-[14px] font-medium leading-[130%];
    }
  }
}
</style>