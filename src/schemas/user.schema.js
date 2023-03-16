import mongoose from "mongoose";
import { emailValidator, passwordValidator } from "./validators";

export const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      validate: emailValidator,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: passwordValidator,
    },
    age: {
      type: Number,
      required: true,
      min: [0, "Value should be positive"],
      max: 100,
    },
  },
  {
    timestamps: true,
  },
);
