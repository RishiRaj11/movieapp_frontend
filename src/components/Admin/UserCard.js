import React,{useEffect} from "react";
import {useSelector,useDispatch}  from 'react-redux';
import { Card, Box, Typography, styled } from "@mui/material";
import { getMovies } from "../redux/actions/moviesActions";
const StyledCard = styled(Card)`
  width:auto;
  height:auto;
  margin-button:20px:
`;


const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const SubContainer=styled(Box)`

`;

const UserCard = ({ item }) => {

    const { movies } = useSelector((state) => state.getAllMovies); // this getProducts comming from redux store
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getMovies());
    }, [dispatch]);
  
  return (
    <StyledCard>
      <Box
        textAlign="center"
        style={{ padding: "20px 10px", marginBottom: "5px" }}
      >
       
        <SubContainer >
          <Text style={{ fontWeight: 600, color: "#212121" }}>
            User Name: {item.name}
          </Text>
          <Text style={{ color: "green" }}>
            User Email:{item.email}
          </Text>
          <Text style={{ color: "#212121", opacity: ".6" }}>
            Total Uploaded Movies: {movies.filter((x)=>{return x.creatorEmail===item.email }).length}
          </Text>
        </SubContainer>
        
      </Box>
    </StyledCard>
  );
};

export default UserCard;
