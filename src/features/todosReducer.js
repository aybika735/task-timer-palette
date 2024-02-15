import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
  openedColorPicker: null,
 
}

export const addColor = createAction("addColor");
export const removeColor = createAction("removeColor");
export const editColor = createAction("editColor");
export const openColorPicker = createAction("openColorPicker");
export const closeColorPicker = createAction("closeColorPicker");
export const mouseEnter = createAction("mouseEnter");
export const mouseLeave = createAction("mouseEnter");



const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addColor, (state, action) => {
      console.log(state.colors)
      state.colors.push({ id: Date.now(), color: action.payload, pickerOpen: true});
    })

    .addCase(removeColor, (state, action) => {
   
      state.colors = state.colors.filter((color) => color.id !== action.payload);
    })
 
    .addCase(editColor,(state, action) => {
     
      const { colorId, newColor } = action.payload;
      const colorToUpdate = state.colors.find((color) => color.id === colorId);
      if (colorToUpdate) {
        colorToUpdate.color = newColor;
     
      }
      
    
    })
    .addCase(openColorPicker, (state, action) => {
      const { colorId } = action.payload;
      const colorToOpen = state.colors.find((color) => color.id === colorId);
      if (colorToOpen) {
        colorToOpen.pickerOpen = true;
      }
    })
    .addCase(closeColorPicker, (state, action) => {
      state.colors.forEach((color) => {
        color.pickerOpen = false;
      });
  
    })
});

export default todosReducer;
