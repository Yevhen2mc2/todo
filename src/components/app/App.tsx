import Input from "../Input/input";
import List from "../List/list";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Edit from "../edit/edit";
import { Login } from "../login/login";
import { localStorageAPI } from "../../shared/service/localStorage/localStorage";
import { Head } from "../head/head";
import { useEffect } from "react";
import { url } from "../../shared/utils";
import { IUser, userSlice } from "../../redux/user/userSlice";
import { useAppDispatch } from "../../shared/hooks";

const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user: IUser | boolean = localStorageAPI.getUser();

  useEffect(() => {
    if (!user) navigate(url.login, { replace: true });
    else if (user instanceof Object)
      dispatch(userSlice.actions.setUser(user.email));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!user]);
  return (
    <Routes>
      <Route path={url.login} element={<Login />} />
      <Route path={url.list} element={<Head />}>
        <Route index element={<List />} />
        <Route path={url.input} element={<Input />} />
        <Route path={url.edit.path} element={<Edit />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Page absent</p>
              <button onClick={() => navigate(url.list)}>Go to main</button>
            </main>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
