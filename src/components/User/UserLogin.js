import React from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material";
import AddMovie from "./AddMovie";
import { useState } from "react";
import AllCreatedMovie from "./AllCreatedMovie";
import UpdateMovie from "./UpdateMovie";

const Container = styled(Box)`
  margin-top: 75px;
`;
const UserLogin = () => {
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState({});
  const [updateToggle, setUpdateToggle] = useState(false);

  const addHandler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const DashboardHandler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <Container>
      {updateToggle ? (
        <UpdateMovie update={update} setToggle={setToggle} />
      ) : (
        <Box>
          <Button
            onClick={addHandler}
            style={{
              background: "rgb(29, 69, 107)",
              color: "white",
              marginRight: "10px",
            }}
          >
            AddNew movie
          </Button>
          <Button
            onClick={DashboardHandler}
            style={{ background: "rgb(29, 69, 107)", color: "white" }}
          >
            My Movie Dashboard
          </Button>
          {toggle ? <AddMovie /> : <AllCreatedMovie setUpdateToggle={setUpdateToggle} setUpdate={setUpdate} />}
        </Box>
      )}
    </Container>
  );
};

export default UserLogin;
