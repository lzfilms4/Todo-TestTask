import React from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCompleted,
  changeSort,
  getList,
  getCompletedCount,
  getActiveCount,
} from "../redux/slices/todoItemsSlice";
import { sortTypeEnum } from "../redux/slices/todosSliceTypes";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const countActive = useSelector(getActiveCount);
  const countCompleted = useSelector(getCompletedCount);

  const { sort } = useSelector(getList);

  const onClickClear = () => {
    dispatch(clearCompleted());
  };
  const onClickChangeSortType = (type: sortTypeEnum) => {
    dispatch(changeSort(type));
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "15px",
      }}
    >
      <Typography sx={{ fontSize: 20 }} variant="h5" component="h3">
        {countActive} items left
      </Typography>
      <Box
        sx={{
          width: "80%",
          height: "50px",
        }}
      >
        <ButtonGroup variant="text" aria-label="outlined primary button group">
          <Button
            variant={sort === sortTypeEnum.ALL ? "outlined" : "text"}
            size="small"
            onClick={() => onClickChangeSortType(sortTypeEnum.ALL)}
          >
            All
          </Button>
          <Button
            disabled={countActive === 0}
            variant={sort === sortTypeEnum.ACTIVE ? "outlined" : "text"}
            size="small"
            onClick={() => onClickChangeSortType(sortTypeEnum.ACTIVE)}
          >
            Active
          </Button>
          <Button
            disabled={countCompleted === 0}
            variant={sort === sortTypeEnum.COMPLETED ? "outlined" : "text"}
            size="small"
            onClick={() => onClickChangeSortType(sortTypeEnum.COMPLETED)}
          >
            Completed
          </Button>
        </ButtonGroup>
        <Box sx={{ paddingTop: "10px" }}>
          <Button
            disabled={countCompleted === 0}
            size="small"
            variant="outlined"
            onClick={onClickClear}
          >
            Clear Completed
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
