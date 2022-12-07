import React, { useState } from "react";
import axios from "axios";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  margin: 5%;
  width: auto;
  height: auto;
`;
const InnerContainer = styled(Box)`
  width: auto;
  height: auto;
  border-radius: 10px;
`;
const DivBox = styled(Box)`
  padding: 1px;
`;

const StyledButton = styled("button")({
  padding: "4px",
  borderRadius: "5px",
  fontSize: "medium",
  border: "none",
});

const Input = styled("input")({
  padding: "6px",
  borderRadius: "5px",
  fontSize: "large",
  width: "80%",
});

//const URL="https://rishimovieapp-api.onrender.com";

const URL="http://localhost:5000" ;

const UpdateMovie = ({ update, setToggle }) => {
  const [addNewMovie, setAddNewMovie] = useState({});
  console.log(update);
  const inputHandler = (e) => {
    setAddNewMovie({ ...addNewMovie, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newRecord = { ...addNewMovie };
    try {
      const response = await axios.put(
        `${URL}/user/updatemovie/${update._id}`,
        newRecord
      );
      //console.log(response.data.status);
      setToggle(false);
      //console.log(response);
    } catch (error) {
      setToggle(false);
      console.log("error", error);
    }
  };
  return (
    <Container>
      <InnerContainer>
        <form onSubmit={submitHandler}>
          <Box>
            <lable>Title</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Enter title"
                name="title"
                value={update.title}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Year</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Enter year  e.g.  2022"
                name="year"
                value={update.year}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Genres</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Enter genres  e.g. [] "
                name="genres"
                value={update.genres}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>ratings</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Enter ratings e.g. [1,4,3,4]"
                name="ratings"
                value={update.ratings}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Poster</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Enter poster URL"
                name="poster"
                value={update.poster}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Content Rating</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Enter Content Rating e.g  12 "
                name="contentRating"
                value={update.contentRating}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Duration</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Enter  Duration"
                name="duration"
                value={update.duration}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Release Date</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Enter release date"
                name="releaseDate"
                value={update.releaseDate}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Average Rating</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Average Rating"
                name="averageRating"
                value={update.averageRating}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Original Title</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="originalTitle"
                name="originalTitle"
                value={update.originalTitle}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Storyline</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Story Line"
                name="storyline"
                value={update.storyline}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Actors</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Actor name in []"
                name="actors"
                value={update.actors}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>IMDB Rating</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Enter IMDB Rating"
                name="imbdbRating"
                value={update.imbdbRating}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>
          <Box>
            <lable>Poster URL</lable>
            <DivBox>
              <Input
                type="text"
                placeholder="Poster URL"
                name="posterurl"
                value={update.posterurl}
                onChange={inputHandler}
              />
            </DivBox>
          </Box>

          <DivBox>
            <StyledButton
              type="submit"
              style={{
                background: "rgb(29, 69, 107)",
                color: "white",
                padding: "10px",
                fontSize: "large",
              }}
            >
              Submit
            </StyledButton>
          </DivBox>
        </form>
      </InnerContainer>
    </Container>
  );
};

export default UpdateMovie;
