import type { User } from "@/modules/database/schema/users";
import {
  getUserByEmail,
  getUserByUsername,
} from "@/modules/database/tables/users";
import { z } from "shared/validation";
import { signUpFormSchema as SchemaBase } from "shared/validation/schemas/sign-up";

export const signUpFormSchema = SchemaBase.refine(
  async ({ username }) => {
    const user: User | undefined = await getUserByUsername(username);
    return user === undefined;
  },
  {
    path: ["username"],
    error: "Not available",
  }
).refine(
  async ({ email }) => {
    const user: User | undefined = await getUserByEmail(email);
    return user === undefined;
  },
  {
    path: ["email"],
    error: "Not available",
  }
);

export type SignUpForm = z.infer<typeof signUpFormSchema>;
