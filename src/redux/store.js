import { createStore } from "redux";
import rootReducer from "./reducers";
// Initialize the Redux store only on the client side
let store;
if (typeof window !== "undefined") {
  store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default store;
