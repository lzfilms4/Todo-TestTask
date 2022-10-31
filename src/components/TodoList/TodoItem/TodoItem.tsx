import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import { useDispatch } from "react-redux";
import { makeCompleted } from "../../../redux/slices/todoItemsSlice";
import { itemsProps } from "../../../redux/slices/todosSliceTypes";

const TodoItem: React.FC<itemsProps> = ({ id, description, checked }) => {
  const dispatch = useDispatch();

  const onClick = (id: number) => {
    dispatch(makeCompleted(id));
  };
  return (
    <Paper
      elevation={2}
      sx={{
        marginTop: "15px",
        width: "100%",
        padding: "20px 20px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        gap: 2,
        color: checked ? "#e0e0e0" : "",
      }}
    >
      <Box display="flex" alignContent="space-between" sx={{ height: "40px" }}>
        <IconButton onClick={() => onClick(id)} data-testid="Complete-Btn">
          {checked ? (
            <CheckCircleOutlineIcon
              sx={{ color: checked ? "#26a69a" : "", cursor: "pointer" }}
            />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>
      </Box>
      <Typography
        sx={{
          paddingTop: "3px",
          fontSize: 25,
          width: "90%",
          textAlign: "left",
          wordWrap: "break-word",
          textDecorationLine: checked ? "line-through" : "none",
        }}
        variant="h2"
        component="h2"
      >
        {description}
      </Typography>
    </Paper>
  );
};

export default TodoItem;
