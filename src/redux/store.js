import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";

const initialState = {
  user: undefined,
  token: undefined,
};

const Red = combineReducers({
  user: authReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  authReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
