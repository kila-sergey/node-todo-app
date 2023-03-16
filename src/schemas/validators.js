import validate from "mongoose-validator";

const FORBIDDEN_PASSWORD_WORDS = ["password", "pass"];

export const emailValidator = [
  validate({
    validator(val) {
      return val.length !== 0;
    },
    message: "Email is empty",
  }),
  validate({
    validator: "isEmail",
    message: "Email is not valid",
  }),
];

export const passwordValidator = [
  validate({
    validator(val) {
      return val.length > 6;
    },
    message: "Password should be more than 6 symbols",
  }),
  validate({
    validator(val) {
      const isContainForbidden = FORBIDDEN_PASSWORD_WORDS.some((word) => val
        .toLowerCase()
        .includes(word));

      return !isContainForbidden;
    },
    message: "Password contain not allowed words",
  }),
];
