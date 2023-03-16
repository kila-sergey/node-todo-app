import { Router } from "express";
import { userRouter } from "./user.router";

export const defaultRouter = Router();

defaultRouter.use(userRouter);
