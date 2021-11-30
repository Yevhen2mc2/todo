import React, { useState } from "react";
import style from "./login.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Field } from "react-final-form";
import isEmail from "validator/lib/isEmail";
import { localStorageAPI, User } from "../../localStorage/localStorage";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const PASSWORD_MIN_LENGTH: number = 8;
  let validEmail: boolean = false;
  let validPassword: boolean = false;

  enum Styles {
    PASSWORD_ERROR_OFF = "passwordErrorOff",
    PASSWORD_ERROR_ON = "passwordErrorOn",
    EMAIL_ERROR_OFF = "emailErrorOff",
    EMAIL_ERROR_ON = "emailErrorOn",
  }

  const [passwordErrorStyle, setPasswordErrorStyle] = useState<Styles>(
    Styles.PASSWORD_ERROR_OFF
  );

  const [emailErrorStyle, setEmailErrorStyle] = useState<Styles>(
    Styles.EMAIL_ERROR_OFF
  );

  const isValidPassword = (p: string | undefined): boolean => {
    return !!(p && p.length >= PASSWORD_MIN_LENGTH);
  };

  const onSubmit = (e) => {
    if (e.email) validEmail = isEmail(e.email);
    validPassword = isValidPassword(e.password);

    if (!validEmail) {
      setEmailErrorStyle(Styles.EMAIL_ERROR_ON);
      setTimeout(() => {
        setEmailErrorStyle(Styles.EMAIL_ERROR_OFF);
      }, 3000);
    }

    if (!validPassword) {
      setPasswordErrorStyle(Styles.PASSWORD_ERROR_ON);
      setTimeout(() => {
        setPasswordErrorStyle(Styles.PASSWORD_ERROR_OFF);
      }, 3000);
    }

    if (validEmail && validPassword) {
      console.log("success login");
      const user: User = {
        email: e.email,
        password: e.password,
      };
      localStorageAPI.setUser(user);
      navigate("/");
    }
  };

  return (
    <>
      <h1>Login at first</h1>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          //console.log("validate:", values);
          return {};
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className={style.loginContainer}>
              <div className={style.containerEmail}>
                <div className={style.textEmail}>Input your email:</div>
                <div className={style.inputEmail}>
                  <Field name="email">
                    {(props) => (
                      <TextField
                        label="email"
                        variant="outlined"
                        type="text"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                      />
                    )}
                  </Field>
                  <div className={style[emailErrorStyle]}>
                    Введите корректный email!
                  </div>
                </div>
              </div>

              <div className={style.containerPassword}>
                <div className={style.textPassword}>Input your password:</div>
                <div className={style.inputPassword}>
                  <Field name="password">
                    {(props) => (
                      <TextField
                        label="password"
                        variant="outlined"
                        type="password"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                      />
                    )}
                  </Field>
                </div>
              </div>
              <div className={style[passwordErrorStyle]}>
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
