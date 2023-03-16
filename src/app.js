import express from "express";
import { API_PREFIX } from "./constants/router.constants";
import { defaultRouter } from "./routers/default.router";

import "./db/mongoose";

export const app = express();

app.use(express.json());
app.use(API_PREFIX, defaultRouter);
