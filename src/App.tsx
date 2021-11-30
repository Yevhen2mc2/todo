import Input from "./components/Input/Input";
import List from "./components/List/List";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Edit from "./components/edit/edit";
import { Login } from "./components/login/login";
import { localStorageAPI, User } from "./localStorage/localStorage";
import { Head } from "./components/head/head";
import { useEffect } from "react";
import { setUser } from "./redux/todo/actions/actions";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user: User | boolean = localStorageAPI.getUser();
  //const login: boolean = useSelector((state: RootState) => !!state.todo.user);

  useEffect(() => {
    if (!user) {
      navigate("login");
    } else {
      if (user instanceof Object) dispatch(setUser(user));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Head />}>
        <Route index element={<List />} />
        <Route path="login" element={<Login />} />
        <Route path="input" element={<Input />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Page absent</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
