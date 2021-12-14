import React from "react";
import { localStorageAPI } from "../../shared/service/localStorage/localStorage";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./head.module.scss";
import { Box, Button, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { Loading } from "../../shared/system/loading/loading";
import { Error } from "../../shared/system/error/error";
import { url } from "../../shared/utils";
import { userSlice } from "../../redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";

export const Head: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [value, setValue] = React.useState<string>(pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onClickLogout = () => {
    localStorageAPI.logOut();
    dispatch(userSlice.actions.logout);
    navigate(url.login, { replace: true });
  };

  const email: string = useAppSelector((state) => state.userReducer.email);
  const isLogin: boolean = !!email.length;

  if (isLogin) {
    return (
      <>
        <Error />
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              className={styles.header}
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="Add new task"
                  value={url.input}
                  onClick={() => navigate(url.input)}
                />
                <Tab
                  label="My tasks list"
                  value={url.list}
                  onClick={() => navigate(url.list)}
                />
              </TabList>
              <Button onClick={onClickLogout} className={styles.logout}>
                Logout
              </Button>
            </Box>
          </TabContext>
        </Box>
        <Loading />
        <Outlet />
      </>
    );
  } else {
    return <Outlet />;
  }
};
