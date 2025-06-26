import { internalServerError } from "@/modules/helper/status/error/server";
import logger from "@/modules/logging";
import type { Request, Response, NextFunction } from "express";

const errorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    next();
  } catch (error: unknown) {
    logger.error(error);
    return internalServerError(res);
  }
};

export default errorHandler;
