import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, Box, styled } from "@mui/material";
import MovieCard from "./MovieCard";
import { getMovies } from "../redux/actions/moviesActions";
import FitlerByGenres from "./FilterByGenres";
import SortByYear from "./SortByYear";
import Filter from "./Filter";
const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const MoviesList = ({ searchInput }) => {
  const [sort, setSort] = React.useState("");
  const [genres, setGenres] = React.useState("");
  const { movies } = useSelector((state) => state.getAllMovies); // this getProducts comming from redux store
  const searchedMovies = movies.filter((item) => {
    return item.title === searchInput;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  console.log(sort, genres);
  console.log(searchInput);
  return (
    <>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Box>
          <h1 style={{ display: "flex" }}>
            Sort By Year/Rating: <SortByYear sort={sort} setSort={setSort} />
          </h1>
        </Box>
        <Box>
          <h1 style={{ display: "flex" }}>
            Filter By Genres :{" "}
            <FitlerByGenres genres={genres} setGenres={setGenres} />
          </h1>
        </Box>
      </Box>
      <Container>
        {sort.length === 0 && genres.length === 0 ? (
          <>
            {searchedMovies.length === 0 ? (
              <>
                {movies.map((item) => (
                  <MovieCard item={item} key={item._id} />
                ))}
              </>
            ) : (
              <>
                {searchedMovies.map((item) => (
                  <MovieCard item={item} key={item._id} />
                ))}
              </>
            )}
          </>
        ) : (
          <Filter sort={sort} genres={genres} movies={movies} />
        )}
      </Container>
    </>
  );
};

export default MoviesList;
