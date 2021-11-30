import React from "react";
import { localStorageAPI } from "../../localStorage/localStorage";
import { useNavigate, Outlet } from "react-router-dom";
import styles from "./head.module.scss";

export const Head: React.FC = () => {
  const navigate = useNavigate();
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
};
