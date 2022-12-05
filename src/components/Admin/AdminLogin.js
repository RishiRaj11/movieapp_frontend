import React,{useState} from "react";
import { Box,Button, styled } from "@mui/material";
import MovieDashBoard from './MovieDashBoard';
import UserDashBoard from './UserDashBoard';

const Container = styled(Box)`
  margin-top: 75px;
`;
const AdminLogin = () => {
  const [toggle, setToggle] = useState(false);

  const addHandler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const DashboardHandler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <Container>
      <Box>
        <Button
          onClick={addHandler}
          style={{
            background: "rgb(29, 69, 107)",
            color: "white",
            marginRight: "10px",
          }}
        >
         Movies Dashboard
        </Button>
        <Button
          onClick={DashboardHandler}
          style={{ background: "rgb(29, 69, 107)", color: "white" }}
        >
          User Dashboard
        </Button>
        {toggle ? <MovieDashBoard /> : <UserDashBoard />}
      </Box>
    </Container>
  );
};

export default AdminLogin;
