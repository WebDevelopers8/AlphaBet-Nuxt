<template>
  <div class="socials" v-if="size == 'small'">
    <a class="socials__buttons-small"><img src="../shared/images/social/whatsapp.svg" alt="whatsapp"></a>
    <a class="socials__buttons-small"><img src="../shared/images/social/telegram.svg" alt="telegram"></a>
    <a class="socials__buttons-small"><img src="../shared/images/social/vk.svg" alt="vk"></a>
    <a class="socials__buttons-small"><img src="../shared/images/social/viber.svg" alt="viber"></a>
  </div>
  <div class="socials" v-if="size == 'large'">
    <a class="socials__buttons-large"><img src="../shared/images/social/whatsapp.svg" alt="whatsapp"></a>
    <a class="socials__buttons-large"><img src="../shared/images/social/telegram.svg" alt="telegram"></a>
    <a class="socials__buttons-large"><img src="../shared/images/social/vk.svg" alt="vk"></a>
    <a class="socials__buttons-large"><img src="../shared/images/social/viber.svg" alt="viber"></a>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  size: string
}>()
</script>

<style lang="postcss" scoped>
.socials{
  @apply flex items-center gap-[4px];

  &__buttons-small{
    cursor: pointer;
    @apply w-[26px] h-[26px];

    & img{
      @apply w-[26px] h-[26px]
    }
  }
  &__buttons-large{
    cursor: pointer;
    @apply w-[35px] h-[35px];

    & img{
      @apply w-[35px] h-[35px]
    }
  }
}
</style>