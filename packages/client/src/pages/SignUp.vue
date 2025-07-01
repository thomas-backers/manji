<script setup lang="ts">
import {
  type SignUpForm,
  signUpFormSchema,
} from "shared/validation/schemas/sign-up";
import { reactive, ref } from "vue";

const form = reactive<SignUpForm>({
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
});

const errors = ref<Partial<Record<keyof SignUpForm, string[]>>>({});

const onSubmit = async (): Promise<void> => {
  const { success, data, error } = await signUpFormSchema.safeParseAsync(form);
  errors.value = {};
  if (!success) {
    for (const issue of error.issues) {
      const field = issue.path[0] as keyof SignUpForm;
      if (!errors.value[field]) {
        errors.value[field] = [];
      }
      errors.value[field].push(issue.message);
    }
    console.error("Validation errors:", errors.value);
    return;
  }
  console.log("Form submitted successfully:", data);
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="form.username" type="text" name="username" placeholder="" />
    <input v-model="form.email" type="email" name="email" placeholder="" />
    <input
      v-model="form.password"
      type="password"
      name="password"
      placeholder=""
    />
    <input
      v-model="form.passwordConfirmation"
      type="password"
      name="passwordConfirmation"
      placeholder=""
    />
    <button type="submit">sign up</button>
  </form>
</template>
