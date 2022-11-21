import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
  isloadingFirst: false,
  todo: {},
  pageSize: 0,
  count: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },

    setTodo: (state, action) => {},

    editTodo: (state, action) => {},

    deleteTodo: (state, action) => {},
  },
});

export const { setTodo, addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;