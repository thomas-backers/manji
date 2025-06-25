import { username, email, password } from "./fields";
import { z } from "zod/v4";

export const signUpFormSchema = z
  .object({
    username,
    email,
    password,
    passwordConfirmation: password,
  })
  .refine(
    ({ password, passwordConfirmation }) => password === passwordConfirmation,
    {
      path: ["passwordConfirmation"],
      error: "Must be identical to password",
    }
  );

export type SignUpForm = z.infer<typeof signUpFormSchema>;
