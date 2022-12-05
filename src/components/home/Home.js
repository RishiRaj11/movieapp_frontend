import React from 'react'
import MoviesList from './MoviesList';
import { Box ,styled} from '@mui/material';
const Container=styled(Box)`
margin-top:75px;
`; 

const Home = () => {
  return (
    <Container>
        <MoviesList  />
    </Container>
  )
}

export default Home;