import { failure } from "@/modules/helper/status";
import type { Response } from "express";
import type { ApiError } from "shared/types";

export const badRequest = (res: Response, ...errors: ApiError[]): void => {
  failure(res, 400, ...errors);
};
