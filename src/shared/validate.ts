import isEmail from "validator/lib/isEmail";

export const checkEmail = (value) => {
  if (value) {
    return isEmail(value) ? undefined : "enter correct email";
  }
  return "required";
};

export const PASSWORD_MIN_LENGTH: number = 8;
export const isValidPassword = (
  value: string | undefined
): string | undefined => {
  if (!value) {
    return "required field";
  }
  if (value.length < PASSWORD_MIN_LENGTH)
    return `min length ${PASSWORD_MIN_LENGTH}`;
  return undefined;
};

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
