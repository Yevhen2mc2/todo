import React from "react";
import TextField from "@mui/material/TextField";
import style from "../../components/login/login.module.scss";
import { FieldInputProps, FieldMetaState } from "react-final-form";

interface IEmailInput {
  label: string;
  input: FieldInputProps<any, HTMLElement>;
  meta: FieldMetaState<any>;
  type: React.HTMLInputTypeAttribute | undefined;
}

export const Input = (props: IEmailInput) => {
  return (
    <>
      <TextField
        label={props.label}
        variant="outlined"
        type={props.type}
        name={props.input.name}
        value={props.input.value}
        onChange={props.input.onChange}
      />
      {props.meta.error && props.meta.touched && (
        <div className={style.error}>{props.meta.error}</div>
      )}
    </>
  );
};
