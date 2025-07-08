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
  <div class="w-full p-1">
    <button
      class="flex w-full py-2 rounded-md bg-slate-950 text-slate-50 font-medium tracking-wider cursor-pointer uppercase disabled:cursor-default dark:bg-slate-100 dark:text-slate-950"
      :disabled="disabled || loading"
      :type="type"
      @click="onClick"
    >
      <span class="mx-auto">
        <Spinner v-if="loading" />
        <slot v-else></slot>
      </span>
    </button>
  </div>
</template>
