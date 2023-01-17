import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootState } from "../store";

//custom hooks created for dispatching the state action and selecting the state value
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//custom hook which uses JavaScript fetch api to get data from an external url, this can be reused wherever required overall in the application
export const useFetch = (url: string) => {
  const response = fetch(url);
  return response;
};
