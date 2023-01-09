import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./features/display/colorModeSlice";
import movieReducer from "./features/movies/movieSlice";


export const store = configureStore({
    reducer: {
        darkMode : colorReducer,
        movies : movieReducer
    },
})

//defining types for the root state and store's dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;