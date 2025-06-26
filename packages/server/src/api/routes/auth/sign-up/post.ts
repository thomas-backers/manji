import { SignUpForm } from "@/modules/validation/sign-up";
import type { Request, Response } from "express";

const post = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password, passwordConfirmation }: SignUpForm =
    req.body;
};

export default post;
