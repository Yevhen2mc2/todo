import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./saga/watchers";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootWatcher);

export default store;
