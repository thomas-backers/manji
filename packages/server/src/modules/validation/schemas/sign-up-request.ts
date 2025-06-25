import type { User } from "@/modules/database/schema/users";
import {
  getUserByEmail,
  getUserByUsername,
} from "@/modules/database/tables/users";
import { z } from "@/modules/validation";
import { signUpFormSchema } from "shared/validation/schemas/sign-up-form";

export const signUpRequestSchema = signUpFormSchema
  .refine(
    async ({ username }) => {
      const user: User | undefined = await getUserByUsername(username);
      return user === undefined;
    },
    {
      path: ["username"],
      error: "Not available",
    }
  )
  .refine(
    async ({ email }) => {
      const user: User | undefined = await getUserByEmail(email);
      return user === undefined;
    },
    {
      path: ["email"],
      error: "Not available",
    }
  );

export type SignUpRequest = z.infer<typeof signUpRequestSchema>;
