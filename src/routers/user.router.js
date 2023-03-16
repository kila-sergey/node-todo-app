import express from "express";
import { StatusCodes } from "http-status-codes";

import { User } from "../models/user.model";

export const userRouter = express.Router();

userRouter.post("/users", async (req, res) => {
  try {
    const userData = req.body;

    const user = new User(userData);

    await user.save();

    res.send(user);
  } catch (err) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ error: err.message });
  }
});
