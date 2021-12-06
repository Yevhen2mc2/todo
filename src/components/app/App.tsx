import Input from "../input/input";
import List from "../list/list";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Edit from "../edit/edit";
import { Login } from "../login/login";
import { localStorageAPI } from "../../localStorage/localStorage";
import { Head } from "../head/head";
import { useEffect } from "react";
import { setUser } from "../../redux/user/actions/actions";
import { User } from "../../redux/user/types/types";
import { url } from "../../shared/utils";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user: User | boolean = localStorageAPI.getUser();

  useEffect(() => {
    if (!user) navigate(url.login, { replace: true });
    else if (user instanceof Object) dispatch(setUser(user));
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
