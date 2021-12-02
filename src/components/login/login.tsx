import React from "react";
import style from "./login.module.scss";
import Button from "@mui/material/Button";
import { Form, Field } from "react-final-form";
import { localStorageAPI } from "../../localStorage/localStorage";
import { useNavigate } from "react-router-dom";
import { url } from "../head/head";
import { User } from "../../redux/user/types/types";
import { checkEmail, isValidPassword } from "../../shared/validate";
import { InputEmail } from "../../shared/inputs/inputEmail";
import { InputPassword } from "../../shared/inputs/inputPassword";

interface Value {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = (values: Value) => {
    const user: User = {
      email: values.email,
    };
    localStorageAPI.setUser(user);
    navigate(url.list);
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
                  <Field name="email" validate={checkEmail}>
                    {(props) => {
                      return (
                        <InputEmail
                          input={props.input}
                          meta={props.meta}
                          label="email"
                          type="outline"
                        />
                      );
                    }}
                  </Field>
                </div>
              </div>

              <div className={style.containerPassword}>
                <div className={style.textPassword}>Input your password:</div>
                <div className={style.inputPassword}>
                  <Field name="password" validate={isValidPassword}>
                    {(props) => {
                      return (
                        <InputPassword
                          input={props.input}
                          meta={props.meta}
                          label="password"
                          type="outline"
                        />
                      );
                    }}
                  </Field>
                </div>
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
