import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getTodosFromLS } from "../../utils/getTodosFromLS";
import { itemsProps, listProps, sortTypeEnum } from "./todosSliceTypes";

const list = getTodosFromLS();
const initialState: listProps = {
  list,
  sort: sortTypeEnum.ALL,
};

const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<itemsProps>) {
      state.list.push(action.payload);
    },
    makeCompleted(state, action: PayloadAction<number>) {
      const findItem = state.list.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.checked = !findItem.checked;
      }
    },
    clearCompleted(state) {
      state.list = state.list.filter((item) => item.checked !== true);
    },
    changeSort(state, action: PayloadAction<sortTypeEnum>) {
      state.sort = action.payload;
    },
  },
});

export const getCompletedCount = (state: RootState) =>
  state.itemsList.list.filter((item) => item.checked === true).length;

export const getActiveCount = (state: RootState) =>
  state.itemsList.list.filter((item) => item.checked !== true).length;
export const getList = (state: RootState) => state.itemsList;

export const { addItem, makeCompleted, clearCompleted, changeSort } =
  todoList.actions;

export default todoList.reducer;
