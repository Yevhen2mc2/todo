import React, { useEffect } from "react";
import style from "./login.module.scss";
import { Form, Field } from "react-final-form";
import { localStorageAPI } from "../../shared/service/localStorage/localStorage";
import { useNavigate } from "react-router-dom";
import { User } from "../../redux/user/types/types";
import { checkEmail, isValidPassword } from "../../shared/validate";
import { Input } from "../../shared/inputs/input";
import { url } from "../../shared/utils";
import { useSelector } from "react-redux";
import { getUserEmail } from "../../redux/user/selectors/selectors";
import { CommonButton } from "../../shared/buttons/buttons";

interface Value {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const email = useSelector(getUserEmail());
  const isLogin: boolean = !!email.length;

  useEffect(() => {
    if (isLogin) navigate(url.list, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const onSubmit = (values: Value) => {
    const user: User = {
      email: values.email.trim(),
    };
    localStorageAPI.setUser(user);
    navigate(url.list, { replace: true });
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
                        <Input
                          input={props.input}
                          meta={props.meta}
                          label="email"
                          type="text"
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
                        <Input
                          input={props.input}
                          meta={props.meta}
                          label="password"
                          type="password"
                        />
                      );
                    }}
                  </Field>
                </div>
              </div>
              <CommonButton variant="contained" color="success" type="submit">
                login
              </CommonButton>
            </div>
          </form>
        )}
      </Form>
    </>
  );
};
