import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todosReducer";
export const store = configureStore({
  reducer: todosReducer,
});
