<script setup lang="ts">
import {
  type SignUpForm,
  signUpFormSchema,
} from "shared/validation/schemas/sign-up";
import { reactive } from "vue";

const form: SignUpForm = reactive({
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
});

const onSubmit = () => {
  const { success, data, error } = signUpFormSchema.safeParse(form);
  if (!success) {
    console.error("Validation failed:", error);
    return;
  }
  console.log("Form submitted successfully:", data);
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="form.username" type="text" name="username" placeholder="" />
    <input
      v-model="form.email"
      type="email"
      name="email"
      id="email"
      placeholder=""
    />
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
