import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import itemsList from "./slices/todoItemsSlice";

export const store = configureStore({
  reducer: {
    itemsList,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
