import React from "react";
import style from "./authorization.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Authorization: React.FC = () => {
  return (
    <div>
      <h1>Login at first</h1>
      <div className={style.loginContainer}>
        <div className={style.containerEmail}>
          <div className={style.textEmail}>Input your email:</div>
          <div className={style.inputEmail}>
            <TextField label="email" variant="outlined" type="email" />
          </div>
        </div>

        <div className={style.containerPassword}>
          <div className={style.textPassword}>Input your password:</div>
          <div className={style.inputPassword}>
            <TextField label="password" variant="outlined" type="password" />
          </div>
        </div>
        <Button disabled={true} variant="contained" color="success">
          Ok
        </Button>
      </div>
    </div>
  );
};
