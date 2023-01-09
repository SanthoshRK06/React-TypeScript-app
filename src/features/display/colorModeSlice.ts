import { createSlice } from "@reduxjs/toolkit";


type ColorState = boolean;

const initialState: ColorState = false;

const colorModeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        changeMode: (state) => state = !state
    }
});

export const {changeMode } = colorModeSlice.actions;
export default colorModeSlice.reducer;