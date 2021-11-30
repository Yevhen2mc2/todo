import Input from "./components/Input/Input";
import List from "./components/List/List";
import { Provider } from "react-redux";
import store from "./redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Edit from "./components/edit/edit";
import { Login } from "./components/login/login";
import { localStorageAPI } from "./localStorage/localStorage";
import { Head } from "./components/head/head";
import { useEffect } from "react";

const App = () => {
  const login: boolean = !!localStorageAPI.getUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) navigate("login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
