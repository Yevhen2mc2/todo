import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/todo";

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
