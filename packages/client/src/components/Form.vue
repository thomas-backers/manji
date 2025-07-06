<script setup lang="ts">
interface FormEmits {
  (eventName: "submit"): void;
}

const emit = defineEmits<FormEmits>();

const onSubmit = (): void => {
  emit("submit");
};
</script>

<template>
  <form class="w-full" @submit.prevent="onSubmit">
    <slot></slot>
  </form>
</template>
