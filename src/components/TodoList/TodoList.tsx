import React from "react";
import { Box, Paper } from "@mui/material";
import TodoItem from "./TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { getList } from "../../redux/slices/todoItemsSlice";
import { getSortedTodos } from "../../utils/getSortedTodos";
import { sortTypeEnum } from "../../redux/slices/todosSliceTypes";

const TodoList: React.FC = () => {
  const { list, sort } = useSelector(getList);
  const sortedTodos = getSortedTodos(list, sort);
  return (
    <Box data-testid="Tasks-List">
      {sortedTodos?.length ? (
        sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            checked={todo.checked}
          />
        ))
      ) : (
        <div>
          {sort === sortTypeEnum.ALL ? (
            <Paper
              sx={{
                marginTop: "15px",
                padding: "20px 20px",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              Совсем нету задач(
            </Paper>
          ) : (
            <Paper
              sx={{
                marginTop: "15px",
                padding: "20px 20px",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              В этой вкладке ничего нету
            </Paper>
          )}
        </div>
      )}
    </Box>
  );
};

export default TodoList;
