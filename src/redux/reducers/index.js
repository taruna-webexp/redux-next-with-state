import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";
// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
    // Map your reducers to the state properties they manage
  todos: toDoReducer,
});

export default rootReducer;
