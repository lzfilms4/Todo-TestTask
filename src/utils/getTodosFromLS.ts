import { itemsProps } from "../redux/slices/todosSliceTypes";

export const getTodosFromLS = () => {
  const data = localStorage.getItem("todos");
  const items = data ? JSON.parse(data) : [];

  return items as itemsProps[];
};
