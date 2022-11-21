import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "./features";

const store = configureStore({
  reducer: {
    todoSlice: TodoSlice,
  },
});

export default store;