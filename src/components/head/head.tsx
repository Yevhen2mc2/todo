import React from "react";
import { localStorageAPI } from "../../localStorage/localStorage";
import { useNavigate, Outlet } from "react-router-dom";
import styles from "./head.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

export const Head: React.FC = () => {
  const navigate = useNavigate();
  const login: boolean = useSelector((state: RootState) => !!state.todo.user);
  if (login) {
    return (
      <>
        <div className={styles.header}>
          head...
          <button
            onClick={() => {
              localStorageAPI.logOut();
              navigate("login");
            }}
          >
            Logout
          </button>
        </div>
        <Outlet />
      </>
    );
  } else {
    return <Outlet />;
  }
};
