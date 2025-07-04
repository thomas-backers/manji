<script setup lang="ts">
interface FormEmits {
  (eventName: "submit"): void;
}

const emit = defineEmits<FormEmits>();

const onSubmit = async (): Promise<void> => {
  emit("submit");
};
</script>

<template>
  <form class="w-full" @submit.prevent="onSubmit">
    <slot name="inputs"></slot>
    <slot name="buttons"></slot>
  </form>
</template>
