<script setup lang="ts">
import { ref } from "vue";

interface ButtonProps {
  disabled?: boolean;
  label: string;
  type: "button" | "reset" | "submit";
}

interface ButtonEmits {
  (eventName: "click"): void;
}

const { disabled = false, label, type } = defineProps<ButtonProps>();

const emit = defineEmits<ButtonEmits>();

const loading = ref<boolean>(false);

const onClick = (): void => {
  loading.value = true;
  emit("click");
  loading.value = false;
};
</script>

<template>
  <button
    class="block w-full bg-black text-white"
    :disabled="disabled"
    :type="type"
    @click="onClick"
  >
    <span v-if="loading">loading...</span>
    <span v-else>{{ label }}</span>
  </button>
</template>
