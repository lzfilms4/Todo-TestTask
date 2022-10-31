import React from "react";
import { Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Typography
      sx={{ marginTop: "30px", marginBottom: "10px" }}
      variant="h4"
      component="h1"
    >
      Todos
    </Typography>
  );
};

export default Header;
