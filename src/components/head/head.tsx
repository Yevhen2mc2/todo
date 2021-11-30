import React from "react";
import { localStorageAPI } from "../../localStorage/localStorage";
import { useNavigate, Outlet } from "react-router-dom";
import styles from "./head.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { logoutUser } from "../../redux/todo/actions/actions";
import { Box, Button, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";

export const Head: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onClickLogout = () => {
    localStorageAPI.logOut();
    dispatch(logoutUser());
    navigate("login");
  };

  const login: boolean = useSelector((state: RootState) => !!state.todo.user);
  if (login) {
    return (
      <>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="Add new task"
                  value="input"
                  onClick={() => navigate("input")}
                />
                <Tab
                  label="My tasks list"
                  value="/"
                  onClick={() => navigate("/")}
                />
              </TabList>
              <Button className={styles.exit} onClick={onClickLogout}>
                Logout
              </Button>
            </Box>
          </TabContext>
        </Box>
        <Outlet />
      </>
    );
  } else {
    return <Outlet />;
  }
};
