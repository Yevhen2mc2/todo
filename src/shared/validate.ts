import isEmail from "validator/lib/isEmail";

export const PASSWORD_MIN_LENGTH: number = 8;

export const checkEmail = (value) => {
  if (value) {
    return isEmail(value) ? undefined : "enter correct email";
  }
  return "required";
};

export const isValidPassword = (p: string | undefined): string | undefined => {
  if (!p) {
    return "required field";
  }
  if (p.length < PASSWORD_MIN_LENGTH)
    return `min length ${PASSWORD_MIN_LENGTH}`;
  return undefined;
};
