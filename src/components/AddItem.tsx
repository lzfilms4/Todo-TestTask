import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { addItem, getList } from "../redux/slices/todoItemsSlice";

const AddItem: React.FC = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(getList);

  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    const json = JSON.stringify(list);
    localStorage.setItem("todos", json);
  }, [list]);

  const onClick = () => {
    dispatch(
      addItem({ id: list.length, description: inputValue, checked: false })
    );
    setInputValue("");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        padding: "25px 20px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        gap: 2,
      }}
    >
      <TextField
        label="What needs to be done?"
        variant="outlined"
        value={inputValue}
        onChange={onChange}
        fullWidth
      />
      <Button variant="outlined" onClick={onClick} startIcon={<Add />}>
        Add
      </Button>
    </Paper>
  );
};

export default AddItem;
