import React from "react";
import { Card, Button, Box, Typography, styled } from "@mui/material";

import axios from "axios";

const StyledCard = styled(Card)`
  width:200px;
  height:auto;
  margin-button:20px:
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const SubContainer = styled(Box)``;

const URL="https://rishimovieapp-api.onrender.com";

//const URL="http://localhost:5000" ;

const UserMovieCard = ({ item, setUpdateToggle, setUpdate }) => {
  const { _id } = item;

  const deleteHandler = async () => {
    await axios.delete(`{URL}/user/deletemovie/${_id}`);
  };
  const updateHandler = () => {
    setUpdateToggle(true);
    setUpdate({ ...item });
  };

  return (
    <StyledCard>
      <Box
        textAlign="center"
        style={{ padding: "25px 15px", marginBottom: "10px" }}
      >
        <Image alt="Movie Poster" src={item.posterurl} />
        <SubContainer>
          <Text style={{ fontWeight: 600, color: "#212121" }}>
            {item.title}
          </Text>
          <Text style={{ color: "green" }}>
            Release Date:{item.releaseDate}
          </Text>
          <Text style={{ color: "#212121", opacity: ".6" }}>
            IMDB Rating {item.imdbRating}
          </Text>
        </SubContainer>
        <Button
          style={{
            background: "rgb(29, 69, 107)",
            color: "white",
            marginRight: "10px",
          }}
          onClick={updateHandler}
        >
          Update
        </Button>
        <Button
          style={{
            background: "rgb(29, 69, 107)",
            color: "white",
            marginRight: "10px",
          }}
          onClick={deleteHandler}
        >
          Delete
        </Button>
      </Box>
    </StyledCard>
  );
};

export default UserMovieCard;
