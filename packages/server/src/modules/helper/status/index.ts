import type { ApiData, ApiError, ApiFailure, ApiSuccess } from "shared/types";
import type { Response } from "express";

export const success = <Data extends ApiData>(
  res: Response,
  code: number,
  data: Data
) => {
  const response: ApiSuccess<Data> = {
    success: true,
    data,
  };
  res.status(code).json(response);
};

export const failure = (res: Response, code: number, ...errors: ApiError[]) => {
  const failure: ApiFailure = {
    success: false,
    errors,
  };
  res.status(code).json(failure);
};
