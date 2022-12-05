import React from "react";
import { Box, AppBar, Toolbar } from "@mui/material";
import { Theaters } from "@mui/icons-material";
import Search from "./Search";
import CustomButton from "./CustomButton";
const Header = ({ searchFunction }) => {
  return (
    <AppBar style={{ backgroundColor: " rgb(29, 69, 107)" }}>
      <Toolbar>
        <Box style={{ display: "flex" }}>
          <Theaters />
          <Box style={{ fontSize: "30px", textAlign: "center" }}>Movie App</Box>
        </Box>
        <Search searchFunction={searchFunction} />
        <CustomButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
