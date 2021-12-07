import React from "react";
import TextField from "@mui/material/TextField";
import style from "../../components/login/login.module.scss";
import { FieldInputProps, FieldMetaState } from "react-final-form";

interface InputWithValidation {
  label: string;
  input: FieldInputProps<any, HTMLElement>;
  meta: FieldMetaState<any>;
  type: React.HTMLInputTypeAttribute | undefined;
  variant?: "filled" | "outlined" | "standard";
}

export const Input = (props: InputWithValidation) => {
  return (
    <>
      <TextField
        label={props.label}
        variant={props.variant ? props.variant : "outlined"}
        type={props.type}
        name={props.input.name}
        value={props.input.value}
        onChange={props.input.onChange}
      />
      {(props.meta.error && props.meta.touched && (
        <div className={style.error}>{props.meta.error}</div>
      )) || <div className={style.error}></div>}
    </>
  );
};
