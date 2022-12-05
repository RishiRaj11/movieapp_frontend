import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, Box, styled } from "@mui/material";
import MovieCard from "./MovieCard";
import { getMovies } from "../redux/actions/moviesActions";

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const MoviesList = () => {
  const { movies } = useSelector((state) => state.getAllMovies); // this getProducts comming from redux store
   
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <>
      <Container>
        {movies.map((item) => (
          <MovieCard item={item} key={item._id} />
        ))}
      </Container>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </>
  );
};

export default MoviesList;
