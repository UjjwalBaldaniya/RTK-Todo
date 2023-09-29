import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter(
        (element, index) => index !== action.payload
      );
      console.log(state.list);
    },
    editTodo: (state, action) => {
      const UpdateValue = state.list;
      UpdateValue.splice(
        action.payload.todoIndex,
        1,
        action.payload.inputField
      );
      state.list = [...UpdateValue];
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
