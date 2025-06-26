import { badRequest } from "@/modules/helper/status/error/client";
import type { Request, Response, NextFunction } from "express";
import { z } from "shared/validation";

export type ValidationTarget = "body" | "params" | "query";

const validation = <Schema extends z.ZodType>(
  target: ValidationTarget,
  schema: Schema
) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    let unsafe: unknown;
    switch (target) {
      case "body":
        unsafe = req.body;
        break;
      case "params":
        unsafe = req.params;
        break;
      case "query":
        unsafe = req.query;
        break;
    }
    const { success, error } = await schema.safeParseAsync(unsafe);
    if (!success) {
      return badRequest(
        res,
        ...error.issues.map(({ path, message }) => ({
          origin: path[0]?.toString() ?? target,
          message,
        }))
      );
    }
    next();
  };
};

export default validation;
