import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./features/display/colorModeSlice";

export const store = configureStore({
    reducer: {
        darkMode : colorReducer
    },
})

//defining types for the root state and store's dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;