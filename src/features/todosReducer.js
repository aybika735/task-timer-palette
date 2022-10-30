import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = [
  {
    text: "Купить бананы",
    favorite: false,
  },
  {
    text: "Продать квартиру",
    favorite: true,
  },
  {
    text: "Выучить уроки по JS",
    favorite: false,
  },
];
export const add = createAction("add");
export const deleted = createAction("deleted");
export const favorite = createAction("favorite");

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(add, (state, action) => {
      state.push(action.payload);
    })

    .addCase(deleted, (state, action) => {
      const index = action.payload;
      return state.filter((todo, i) => {
        if (i === index) return false;
        return true;
      });
    })
    .addCase(favorite, (state, action) => {
      const todo = state[action.payload];
      const index = action.payload;
      state[index].favorite = !todo.favorite;
    });
});

export default todosReducer;
