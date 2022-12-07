import React from 'react'
import MoviesList from './MoviesList';
import { Box ,styled} from '@mui/material';
const Container=styled(Box)`
margin-top:75px;
`; 

const Home = ({searchInput}) => {
  return (
    <Container>
        <MoviesList searchInput={searchInput} />
    </Container>
  )
}

export default Home;