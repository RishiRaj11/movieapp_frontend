import React from 'react'
import { Box } from '@mui/material';
import MovieCard from './MovieCard';
const Filter = ({sort,genres,movies}) => {
    const [...sortedMoviesByYear]=movies;
    const [...sortedMoviesByRatings]=movies;
    
    const filterbyyeargenres=movies.filter((item)=>{return item.genres[0]===genres })
    const [...sortedMoviesByYearGenres]=filterbyyeargenres;
    const [...sortedMoviesByRatingsGenres]=filterbyyeargenres;
    sortedMoviesByYear.sort(function( a, b){return Number(a.year) - Number(b.year)});
    sortedMoviesByRatings.sort(function( a, b){return Number(a.imdbRating) - Number(b.imdbRating)});
    sortedMoviesByYearGenres.sort(function( a, b){return Number(a.year) - Number(b.year)});
    sortedMoviesByRatingsGenres.sort(function( a, b){return Number(a.imdbRating) - Number(b.imdbRating)});
  return (
    <>
       {
        sort && genres ?
         <>
         {sort==="year" && sortedMoviesByYearGenres.map((item) => (
        <MovieCard item={item}  />
      ))}
      
        {sort==="rating" && sortedMoviesByRatingsGenres.map((item) => (
            <MovieCard item={item}  />
          ))}
         
          </>
          :
          
        <>
         {genres && movies.filter((item)=>{return item.genres[0]===genres }).map((item) => (
        <MovieCard item={item}  />
      ))}

      {sort==="year" && sortedMoviesByYear.map((item) => (
        <MovieCard item={item}  />
      ))}
      
        {sort==="rating" && sortedMoviesByRatings.map((item) => (
            <MovieCard item={item}  />
          ))}
      
      
        </>
       }

    </>
  )
}

export default Filter;