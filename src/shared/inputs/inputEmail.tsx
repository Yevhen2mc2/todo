import React from "react";
import TextField from "@mui/material/TextField";
import style from "../../components/login/login.module.scss";
import { FieldInputProps, FieldMetaState } from "react-final-form";

interface IEmailInput {
  label: string;
  input: FieldInputProps<any, HTMLElement>;
  meta: FieldMetaState<any>;
  type: string;
}

export const InputEmail = (props: IEmailInput) => {
  return (
    <>
      <TextField
        label="email"
        variant="outlined"
        type="text"
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
