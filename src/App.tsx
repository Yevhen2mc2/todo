import Input from "./components/Input/Input";
import List from "./components/List/List";
import { Provider } from "react-redux";
import store from "./redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./components/edit/edit";
import { Login } from "./components/login/login";
import { localStorageAPI } from "./localStorage/localStorage";
import { Head } from "./components/head/head";

const App = () => {
  const login: boolean = !!localStorageAPI.getUser();

  const mainApplication = () => {
    if (login) {
      return (
        <>
          <Route path="/" element={<List />} />
          <Route path="input" element={<Input />} />
          <Route path="edit/:id" element={<Edit />} />
        </>
      );
    }
    return <Route path="login" element={<Login />} />;
  };

  return (
    <Provider store={store}>
      {login && <Head />}
      <BrowserRouter>
        <Routes>
          {mainApplication()}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page absent</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
