import styles from "./App.module.scss";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import { Provider } from "react-redux";
import store from "./redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./routes/edit";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="list" element={<List />} />
          <Route path="edit/:id" element={<Edit />} />
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
