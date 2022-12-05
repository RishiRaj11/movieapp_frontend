import React, { useContext, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { DataContext } from "../context/DataProvider";
import { getMovies } from "../redux/actions/moviesActions";
import UserMovieCard from "./UserMovieCard";
import { useState } from "react";
const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;
const AllCreatedMovie = ({setUpdateToggle,setUpdate}) => {
  //const [filteredMovie, setFilteredMovie] = useState([]);
  const { account } = useContext(DataContext);

  const { movies } = useSelector((state) => state.getAllMovies); // this getProducts comming from redux store

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

 

  return (
    <Container>
      {movies.filter((item)=>{return item.creatorEmail===account.email }).map((item) => (
        <UserMovieCard item={item} setUpdateToggle={setUpdateToggle} setUpdate={setUpdate} />
      ))}
    </Container>
  );
};

export default AllCreatedMovie;
