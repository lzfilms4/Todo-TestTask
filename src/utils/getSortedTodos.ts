import { itemsProps, sortTypeEnum } from "../redux/slices/todosSliceTypes";

export const getSortedTodos = (list: itemsProps[], sort: sortTypeEnum) => {
  if (sortTypeEnum.ALL === sort) return list;
  if (sortTypeEnum.ACTIVE === sort) return list.filter((item) => !item.checked);
  if (sortTypeEnum.COMPLETED === sort)
    return list.filter((item) => item.checked);
  return list;
};
