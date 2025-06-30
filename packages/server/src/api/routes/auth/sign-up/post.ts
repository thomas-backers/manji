import { User } from "@/modules/database/schema/users";
import { createUser } from "@/modules/database/tables/users";
import { sendVerificationMail } from "@/modules/email";
import { ok } from "@/modules/helper/status/success";
import logger from "@/modules/logging";
import { SignUpForm } from "@/modules/validation/sign-up";
import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import { ApiMessage } from "shared/types";

const post = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password }: SignUpForm = req.body;
  const passwordHash: string = await bcrypt.hash(password, 12);
  const user: User | undefined = await createUser(
    username,
    email,
    passwordHash
  );
  if (user === undefined) {
    throw Error(`SQL insert seemed to fail for user ${username}`);
  }
  logger.info(`User ${user.publicId} created successfully`);
  await sendVerificationMail(user.email, user.publicId);
  return ok<ApiMessage>(res, {
    message:
      "User created successfully, please check your email to verify your account",
  });
};

export default post;
