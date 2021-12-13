import Input from "../Input/input";
import List from "../List/list";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Edit from "../edit/edit";
import { Login } from "../login/login";
import { localStorageAPI } from "../../shared/service/localStorage/localStorage";
import { Head } from "../head/head";
import { useEffect } from "react";
import { setUser } from "../../redux/user/actions/actions";
import { url } from "../../shared/utils";
import { IUser } from "../../redux/store/reducers/userSlice";
import { useAppSelector } from "../../shared/hooks";

const App = () => {
  // const dsf = useAppSelector(state => state.userReducer.email)
  console.log(">>>>>");
  console.log(useAppSelector((state) => state.userReducer.email));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user: IUser | boolean = localStorageAPI.getUser();

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
