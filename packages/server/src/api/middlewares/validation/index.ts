import { z } from "@/modules/validation";
import type { Request, Response, NextFunction } from "express";

const validation = (schema: z.ZodType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body: unknown = req.body;
    const { success, data, error } = await schema.safeParseAsync(body);
    if (!success) {
      return;
    }
    next();
  };
};

export default validation;
