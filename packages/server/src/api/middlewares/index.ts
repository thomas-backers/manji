import errorHandler from "@/api/middlewares/error-handler";
import httpLogger from "@/api/middlewares/http-logger";
import { type Express, json, urlencoded } from "express";

export const useMiddlewares = (api: Express): Express => {
  api.use(errorHandler);
  api.use(httpLogger());
  api.use(json());
  api.use(urlencoded({ extended: true }));
  return api;
};
