<script setup lang="ts">
import Spinner from "@/components/Spinner.vue";

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  type: "button" | "reset" | "submit";
}

interface ButtonEmits {
  (eventName: "click"): void;
}

const { disabled = false, loading = false, type } = defineProps<ButtonProps>();

const emit = defineEmits<ButtonEmits>();

const onClick = (): void => {
  emit("click");
};
</script>

<template>
  <button
    class="flex w-full bg-black text-white cursor-pointer disabled:cursor-default"
    :disabled="disabled || loading"
    :type="type"
    @click="onClick"
  >
    <span class="mx-auto">
      <Spinner v-if="loading" />
      <slot v-else></slot>
    </span>
  </button>
</template>
