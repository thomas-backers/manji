import { failure } from "@/modules/helper/status";
import type { Response } from "express";

export const internalServerError = (res: Response): void => {
  failure(res, 500, {
    origin: "server",
    message: "Internal error",
  });
};
