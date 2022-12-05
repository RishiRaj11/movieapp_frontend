import React, { useState, useEffect } from "react";

import UserCard from "./UserCard";
import axios from "axios";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const URL="https://rishimovieapp-api.onrender.com";

const UserDashBoard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/login`)
      .then((data) => setUser(data.data.data));
  }, []);

  return (
    <>
      <Container>
        {user
          .filter((item) => {
            return item.userType === "User";
          })
          .map((item) => (
            <UserCard item={item} key={item._id} />
          ))}
      </Container>
    </>
  );
};

export default UserDashBoard;
