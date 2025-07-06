<script setup lang="ts">
interface FormInputProps {
  errors?: string[];
  label?: string;
  modelValue: string;
  name: string;
  placeholder?: string;
  type: "text" | "email" | "password";
}

interface FormInputEmits {
  (eventName: "update:modelValue", value: string): void;
}

const {
  errors,
  label = "",
  modelValue,
  name,
  placeholder = "",
  type,
} = defineProps<FormInputProps>();

const emit = defineEmits<FormInputEmits>();

const onInput = ({ target }: Event): void => {
  const { value } = target as HTMLInputElement;
  emit("update:modelValue", value.trim());
};
</script>

<template>
  <div class="w-full">
    <label class="w-full" :for="name">
      {{ label }}
      <input
        class="w-full"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        @input="onInput"
      />
    </label>
    <ul v-if="errors && errors.length > 0" class="w-full">
      <li v-for="error of errors" class="w-full">
        {{ error }}
      </li>
    </ul>
  </div>
</template>
