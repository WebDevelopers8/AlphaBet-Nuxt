<template>
    <div class="breadcrums" v-if="text.length != 0">
        <breadcrumsItem v-for="(item, index) in text" :key="index" :text="item" :link="links[index]" :isLast="text.length == index + 1" />
    </div>
</template>

<script setup lang="ts">
import breadcrumsItem from "../features/breadcrumsItem.vue";

defineProps<{
    text: Array<string>,
    links: Array<string>
}>()
</script>

<style lang="postcss" scoped>
    .breadcrums{
        @apply flex items-center;
    }
</style>