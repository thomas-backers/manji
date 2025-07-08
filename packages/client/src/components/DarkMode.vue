<script setup lang="ts">
import { ref } from "vue";

const enabled = ref<boolean>(false);

const onClick = (): void => {
  enabled.value = document.documentElement.classList.toggle("dark");
};
</script>

<template>
  <button
    aria-label="Toggle dark mode"
    :aria-pressed="enabled"
    class="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-300 transition-colors dark:bg-slate-700 cursor-pointer"
    @click="onClick"
  >
    <span
      class="inline-block h-4 w-4 transform rounded-full bg-slate-50 dark:bg-slate-100 transition-transform translate-x-1 dark:translate-x-6"
    ></span>
  </button>
</template>
