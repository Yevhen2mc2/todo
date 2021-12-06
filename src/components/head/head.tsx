import React from "react";
import { localStorageAPI } from "../../localStorage/localStorage";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import styles from "./head.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { logoutUser } from "../../redux/user/actions/actions";
import { Loading } from "../../shared/system/loading/loading";
import { Error } from "../../shared/system/error/error";
import { getUserEmail } from "../../redux/user/selectors/selectors";
import { url } from "../../shared/utils";

export const Head: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [value, setValue] = React.useState<string>(pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onClickLogout = () => {
    localStorageAPI.logOut();
    dispatch(logoutUser());
    navigate(url.login, { replace: true });
  };

  const email: string = useSelector(getUserEmail());
  const isLogin: boolean = !email.length;

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
