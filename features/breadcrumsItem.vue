<template>
    <div class="item">
        <router-link :to="link">{{ text }}</router-link>
        <img v-if="!isLast" src="../shared/images/common/arrowRightBread.svg" alt="arrow">
    </div>
</template>

<script lang="ts" setup>

defineProps<{
    text: string,
    link: string,
    isLast: boolean
}>()

</script>

<style lang="postcss" scoped>

.item{
    @apply flex items-center;

    & a {
        @apply text-[var(--accent-color)] opacity-30 font-bold text-[14px];
    }
    & img{
        @apply w-[13px] h-[13px];
    }
}
</style>
