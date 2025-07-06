<script setup lang="ts">
import Button from "@/components/Button.vue";
import Form from "@/components/Form.vue";
import FormInput from "@/components/FormInput.vue";
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
    return;
  }
  console.log("Form submitted successfully:", data);
};
</script>

<template>
  <Form @submit="onSubmit">
    <FormInput
      v-model="form.username"
      :errors="errors.username"
      label="Username:"
      name="username"
      placeholder="Type your username"
      type="text"
    />
    <FormInput
      v-model="form.email"
      :errors="errors.email"
      label="Email:"
      name="email"
      placeholder="Type your email"
      type="email"
    />
    <FormInput
      v-model="form.password"
      :errors="errors.password"
      label="Password:"
      name="password"
      placeholder="Type your password"
      type="password"
    />
    <FormInput
      v-model="form.passwordConfirmation"
      :errors="errors.passwordConfirmation"
      label="Password confirmation:"
      name="passwordConfirmation"
      placeholder="Confirm your password"
      type="password"
    />
    <Button label="sign up" type="submit" />
  </Form>
</template>
