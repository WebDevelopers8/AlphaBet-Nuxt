<template>
  <div class="modal" @click.stop.self="hideWindow">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

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
.modal {
  @apply bg-[#0000007a] fixed left-0 top-0 w-full h-full z-[1000] flex justify-center items-center px-3;
}
</style>