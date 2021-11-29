import React from "react";
import style from "./authorization.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Field } from "react-final-form";

export const Authorization: React.FC = () => {
  const onSubmit = (e) => {
    console.log("submit", e);
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
              <Button
                disabled={false}
                variant="contained"
                color="success"
                type="submit"
              >
                Ok
              </Button>
            </div>
          </form>
        )}
      </Form>
    </>
  );
};
