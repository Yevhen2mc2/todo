import React, { useState } from "react";
import style from "./authorization.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Field } from "react-final-form";
export const Authorization: React.FC = () => {
  const PASSWORD_MIN_LENGTH: number = 8;

  enum Styles {
    PASSWORD_ALERT_OFF_STYLE = "passwordAlertOff",
    PASSWORD_ALERT_ON_STYLE = "passwordAlertOn",
  }

  const [passwordAlertStyle, setPasswordAlertStyle] = useState<Styles>(
    Styles.PASSWORD_ALERT_OFF_STYLE
  );

  const onSubmit = (e) => {
    console.log("submit", e);
    if (e.password?.length < 8 || !e.password) {
      setPasswordAlertStyle(Styles.PASSWORD_ALERT_ON_STYLE);
      setTimeout(() => {
        setPasswordAlertStyle(Styles.PASSWORD_ALERT_OFF_STYLE);
      }, 3000);
    }
  };

  const onChangeForms = (values) => {
    // if (values.password?.length < 8 || values.password?.length) {
    // } else {
    // }
    return {};
  };

  return (
    <>
      <h1>Login at first</h1>
      <Form onSubmit={onSubmit} validate={(values) => onChangeForms(values)}>
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
