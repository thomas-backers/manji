import validation from "@/api/middlewares/validation";
import signUp from "@/api/routes/auth/sign-up/post";
import { signUpFormSchema } from "@/modules/validation/sign-up";
import { Router } from "express";

const router: Router = Router();

router.post("/sign-up", validation("body", signUpFormSchema), signUp);

export default router;
