import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, acions) => {
      state.list.push({ id: Date.now(), list: acions.payload });
    },
    deleteTodo: (state, action) => {
      //   debugger;
      console.log(state.list);

      state.list = state.list.filter(
        (element) => element.id !== action.payload
      );
      console.log(state.list);
    },
    editTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
