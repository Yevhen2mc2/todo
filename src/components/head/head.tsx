import React from "react";
import { localStorageAPI } from "../../localStorage/localStorage";
import { useNavigate, Outlet } from "react-router-dom";
import styles from "./head.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { logoutUser } from "../../redux/user/actions/actions";
import { Loading } from "../../shared/system/loading/loading";
import { Error } from "../../shared/system/error/error";
import { getLoginState } from "../../redux/user/selectors/selectors";
import { url } from "../../shared/utils";

export const Head: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>(url.list);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onClickLogout = () => {
    localStorageAPI.logOut();
    dispatch(logoutUser());
    navigate(url.login, { replace: true });
  };

  const login: boolean = useSelector(getLoginState());
  if (login) {
    return (
      <>
        <Loading />
        <Error />
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
                  onClick={() => navigate(url.input)}
                />
                <Tab
                  label="My tasks list"
                  value="/"
                  onClick={() => navigate(url.list)}
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
