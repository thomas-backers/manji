import { success } from "@/modules/helper/status";
import type { Response } from "express";
import type { ApiMessage } from "shared/types";

export const ok = <Data extends ApiMessage>(
  res: Response,
  data: Data
): void => {
  success(res, 200, data);
};
