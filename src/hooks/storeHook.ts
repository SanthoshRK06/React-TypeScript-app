import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootState } from "../store";

//custom hooks created for dispatching the state action and selecting the state value
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;