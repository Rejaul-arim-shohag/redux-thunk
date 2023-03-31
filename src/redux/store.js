import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
const store = createStore(rootReducer,(applyMiddleware(thunkMiddleware)))
export default store;
