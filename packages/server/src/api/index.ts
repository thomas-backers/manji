import { useMiddlewares } from "@/api/middlewares";
import { useRoutes } from "@/api/routes";
import express, { type Express } from "express";

const api: Express = express();
useMiddlewares(api);
useRoutes(api);

export default api;
