import { success } from "@/modules/helper/status";
import type { Response } from "express";
import type { ApiData } from "shared/types";

export const ok = <Data extends ApiData>(res: Response, data: Data): void => {
  success(res, 200, data);
};
