import React from "react";
import TextField from "@mui/material/TextField";
import style from "../../components/login/login.module.scss";

interface IPasswordInput {
  label: string;
  input: any;
  meta: any;
  type: string;
}

export const InputPassword = (props: IPasswordInput) => {
  return (
    <>
      <TextField
        label="password"
        variant="outlined"
        type="password"
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
