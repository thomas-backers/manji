import { User } from "@/modules/database/schema/users";
import { addUser } from "@/modules/database/tables/users";
import logger from "@/modules/logging";
import { SignUpForm } from "@/modules/validation/sign-up";
import bcrypt from "bcryptjs";
import type { Request, Response } from "express";

const post = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password }: SignUpForm = req.body;
  const passwordHash: string = await bcrypt.hash(password, 12);
  const user: User | undefined = await addUser(username, email, passwordHash);
  if (user === undefined) {
    logger.warn(`Insert seemed to fail for user ${username}`);
    return;
  }
  logger.info(`User ${user.publicId} created successfully`);
};

export default post;
