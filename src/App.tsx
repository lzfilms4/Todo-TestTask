import React from "react";
import "./App.css";
import { Box } from "@mui/material";

import Header from "./components/Header";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList/TodoList";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Box display="flex" flexDirection="column" width="490px">
        <Header />
        <AddItem />
        <TodoList />
        <Navigation />
      </Box>
    </div>
  );
}

export default App;
