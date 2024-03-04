<template>
  <div class="modal" @click.stop.self="hideWindow">
    <div class="card">
      <div class="card-left">
        <div class="card-left__images">
          <button @click="() => {imageModal = '@/shared/images/mok/wellkissFirst.png'}" class="card-left__selected">
            <img alt="image" src="@/shared/images/mok/wellkissFirst.png"></button>
          <button @click="() => {imageModal = '@/shared/images/mok/wellkissFirst.png'}"><img
              src="@/shared/images/mok/wellkissSecond.png" alt="image"></button>
        </div>
        <img class="card-left__image" src="@/shared/images/mok/wellkissFirst.png" alt="image">
      </div>
      <div class="card-right">
        <div class="card-right__action">
          <p>-15%</p>
        </div>
        <p class="card-right__article">Артикул: 5689074</p>
        <p class="card-right__name">Wellkiss Kitten Delicate Корм сухой для котят с чувствительным пищеварением, с
          индейкой, 400 гр.</p>
        <div class="card-right__prices">
          <p>349 ₽</p>
          <p>450 ₽</p>
        </div>
        <select class="card-right__select" name="product">
          <option value="400 г">400 г</option>
        </select>
        <button class="card-right__button"><img alt="cart" src="@/shared/images/common/cart.svg">Добавить в корзину
        </button>
        <p class="card-right__check"><img alt="check" src="@/shared/images/common/checkBlue.svg">Товар в наличии</p>
        <div class="card-right__points">
          <p><img alt="shop" src="@/shared/images/common/shopBlue.svg">Самовывоз из <a>2 магазинов</a></p>
          <p>через 1 час</p>
        </div>
        <div class="card-right__delivery">
          <p><img src="@/shared/images/common/truckBlue.svg" alt="truckpoints">Доставка курьером</p>
          <p>завтра</p>
        </div>
        <p class="card-right__title">О товаре</p>
        <p class="card-right__desc">
          Wellkiss Корм для котят с индейкой – полноценный, сбалансированный рацион для котят. В состав рациона входят
          все необходимые для здорового роста котенка компоненты. Корм не содержит пшеницу, снижая таким образом риск
          аллергических реакций. <br><br>Состав: индейка (23%, в том числе дегидрированная — 13%, свежая — 10%), ячмень,
          кукуруза, горох, кукурузный глютен,Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
          Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
          безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
          образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
          электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem
          Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
          которых используется Lorem Ipsum.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

let imageModal = ref('/_nuxt/shared/images/mok/wellkissFirst.png')
let selectedButton = ref(0)


const emit = defineEmits(['update:modelValue'])
const displayState = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
const hideWindow = function () {
  displayState.value = false
}
</script>

<style lang="postcss" scoped>
.card {
  @apply gap-[50px] w-[890px] max-h-[620px] bg-[#FFF] flex flex-row rounded-[20px] pl-[20px] pt-[32px];


  &-right {
    @apply pb-[12px] overflow-y-scroll flex flex-col mr-[24px] w-[525px];

    &::-webkit-scrollbar {
      @apply w-[4px];

    }
    &::-webkit-scrollbar-track {
      @apply bg-[#F3F4F6] rounded-[100px];
    }
    &::-webkit-scrollbar-thumb {
      @apply bg-[#1E3050] rounded-[100px];
    }
    &__check {
      @apply flex items-center font-medium text-[12px] text-[var(--accent-color)] leading-[18px] mt-[16px];

      & img {
        @apply mr-[4px]
      }
    }

    &__points {
      @apply mt-[5px] flex justify-between items-center flex-row pr-[23px];

      & p {
        &:first-child {
          @apply flex items-center font-medium text-[12px] leading-[18px] text-[var(--accent-color)];

          & img {
            @apply mr-[6px];
          }

          & a {
            @apply ml-[4px] text-[#FDAF17] underline;
          }
        }

        &:last-child {
          @apply text-[#006DAB] font-medium text-[12px] leading-[18px];
        }
      }
    }

    &__delivery {
      @apply mt-[5px] flex flex-row justify-between items-center pr-[23px];

      & p {
        @apply flex items-center text-[12px] font-medium text-[var(--accent-color)] leading-[18px];

        & img {
          @apply mr-[6px]
        }

        &:last-child {
          @apply text-[#006DAB] ;
        }
      }
    }

    &__title {
      @apply font-extrabold text-[14px] text-[#1E3050] leading-[135%] mt-[24px];
    }

    &__desc {
      @apply pr-[23px] mt-[4px] font-medium text-[13px] text-[#5C6E80] leading-[18px];
    }

    &__action {
      @apply bg-[#FF9D29] px-[10px] py-[7px] rounded-[7px] w-[48px] h-[32px];

      & p {
        @apply font-semibold text-[12px] text-[#FFF] leading-[150%];
      }
    }

    &__article {
      @apply mt-[8px] font-medium text-[12px] text-[#1E3050] opacity-30 leading-[18px];
    }

    &__name {
      @apply font-bold text-[16px] leading-[135%] text-[#000] mt-[8px] max-w-[331px];
    }

    &__prices {
      @apply flex flex-row mt-[20px] gap-[8px];

      & p {
        &:first-child {
          @apply font-extrabold leading-[135%] text-[24px] text-[#1E3050];
        }

        &:last-child {
          @apply font-bold leading-[135%] text-[24px] text-[#D2D6DC] line-through;
        }
      }
    }

    &__select {
      background-image: url("@/shared/images/common/arrow.svg");
      background-repeat: no-repeat;
      background-position: center right .5em;
      background-size: 18px 18px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      @apply text-[#1E3050] font-medium font-main pl-[12px] pr-[8px] py-[8px] mt-[20px] rounded-[5px] bg-[#1E30500D] border-none h-[34px] w-[234px];
    }

    &__button {
      @apply border-none rounded-[8px] font-semibold text-[16px] leading-[150%] bg-[#1E3050] flex justify-center items-center w-[239px] h-[50px] text-[#FFF] mt-[16px] py-[13px] px-[30px];

      & img {
        @apply mr-[6px];
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

  &-left {
    @apply flex flex-row gap-[16px];

    &__images {
      @apply flex flex-col gap-[6px];

      & button {
        @apply w-[65px] h-[65px] border-[1px] border-transparent border-solid bg-transparent;

        & img {
          @apply w-[62px] h-[62px] object-contain;
        }

        &:hover {
          @apply border-[#0073E6] border-solid border-[1px];
        }
      }
    }

    &__image {
      @apply w-[309px] h-[309px];
    }

    &__selected {
      border: #006DAB solid 1px !important;
    }
  }
}

.modal {
  @apply bg-[#0000007a] fixed left-0 top-0 w-full h-full z-[1000] flex justify-center items-center px-3;
}
</style>