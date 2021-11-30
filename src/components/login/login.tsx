import React, { useState } from "react";
import style from "./login.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Field } from "react-final-form";
import isEmail from "validator/lib/isEmail";
import { localStorageAPI, User } from "../../localStorage/localStorage";

export const Login: React.FC = () => {
  const PASSWORD_MIN_LENGTH: number = 8;

  enum Styles {
    PASSWORD_ERROR_OFF = "passwordErrorOff",
    PASSWORD_ERROR_ON = "passwordErrorOn",
  }

  const [passwordAlertStyle, setPasswordAlertStyle] = useState<Styles>(
    Styles.PASSWORD_ERROR_OFF
  );

  const isValidPassword = (p: string | undefined): boolean => {
    return !!(p && p.length >= PASSWORD_MIN_LENGTH);
  };

  const onSubmit = (e) => {
    const validEmail: boolean = isEmail(e.email);
    const validPassword: boolean = isValidPassword(e.password);

    if (!validPassword) {
      setPasswordAlertStyle(Styles.PASSWORD_ERROR_ON);
      setTimeout(() => {
        setPasswordAlertStyle(Styles.PASSWORD_ERROR_OFF);
      }, 3000);
    }

    if (validEmail && validPassword) {
      console.log("success login");
      const user: User = {
        email: e.email,
        password: e.password,
      };
      localStorageAPI.setUser(user);
    }
  };

  return (
    <>
      <h1>Login at first</h1>
      <Form onSubmit={onSubmit}>
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className={style.loginContainer}>
              <div className={style.containerEmail}>
                <div className={style.textEmail}>Input your email:</div>
                <div className={style.inputEmail}>
                  <Field name="email">
                    {(props) => (
                      <div>
                        <TextField
                          label="email"
                          variant="outlined"
                          type="email"
                          name={props.input.name}
                          value={props.input.value}
                          onChange={props.input.onChange}
                        />
                      </div>
                    )}
                  </Field>
                </div>
              </div>

              <div className={style.containerPassword}>
                <div className={style.textPassword}>Input your password:</div>
                <div className={style.inputPassword}>
                  <Field name="password">
                    {(props) => (
                      <div>
                        <TextField
                          label="password"
                          variant="outlined"
                          type="password"
                          name={props.input.name}
                          value={props.input.value}
                          onChange={props.input.onChange}
                        />
                      </div>
                    )}
                  </Field>
                </div>
              </div>
              <div className={style[passwordAlertStyle]}>
                Минимум {PASSWORD_MIN_LENGTH} символов для пароля!
              </div>
              <Button variant="contained" color="success" type="submit">
                Ok
              </Button>
            </div>
          </form>
        )}
      </Form>
    </>
  );
};
