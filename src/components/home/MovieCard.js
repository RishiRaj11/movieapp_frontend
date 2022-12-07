import React from "react";
import { Card, Box, Typography, styled } from "@mui/material";

const StyledCard = styled(Card)`
  width:200px;
  height:auto;
  margin:20px;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const SubContainer=styled(Box)`

`;

const MovieCard = ({ item }) => {
  return (
    <StyledCard>
      <Box
        textAlign="center"
        style={{ padding: "25px 15px", marginBottom: "10px" }}
      >
        <Image alt="Movie Poster" src={item.posterurl} />
        <SubContainer >
          <Text style={{ fontWeight: 600, color: "#212121" }}>
            {item.title}
          </Text>
          <Text style={{ color: "green" }}>
            Release Date:{item.releaseDate}
          </Text>
          <Text style={{ color: "green" }}>
          Genres: {item.genres[0]}
          </Text>
          <Text style={{ color: "green" }}>
            IMDB Rating: {item.imdbRating}
          </Text>
          <Text style={{ color: "#212121", opacity: ".6" }}>
            Year: {item.year}
          </Text>
        </SubContainer>
      </Box>
    </StyledCard>
  );
};

export default MovieCard;
