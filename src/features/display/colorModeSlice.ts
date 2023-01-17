import { createSlice } from "@reduxjs/toolkit";

type ColorState = boolean;

const colorLocalStorage = !!localStorage.getItem("movies-theme");

const initialState: ColorState = colorLocalStorage;

const colorModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeMode: (state) => {
      if (state) {
        localStorage.removeItem("movies-theme");
      } else {
        localStorage.setItem("movies-theme", "_");
      }

      return (state = !state);
    },
  },
});

export const { changeMode } = colorModeSlice.actions;
export default colorModeSlice.reducer;
