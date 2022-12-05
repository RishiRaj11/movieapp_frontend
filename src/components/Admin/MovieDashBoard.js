import React ,{useEffect} from 'react'
import {useSelector,useDispatch}  from 'react-redux';
import { getMovies } from "../redux/actions/moviesActions";
import MCard from './MCard';
import { Box, styled } from "@mui/material";
const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;
const MovieDashBoard = () => {
  const { movies } = useSelector((state) => state.getAllMovies); // this getProducts comming from redux store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Container>
    {movies.map((item) => (
      <MCard item={item} key={item._id} />
    ))}
  </Container>
  )
}

export default MovieDashBoard;