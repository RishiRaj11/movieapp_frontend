import  React from 'react';
import {InputLabel,MenuItem,FormControl,Select} from  '@mui/material'
const  FitlerByGenres=({genres,setGenres})=> {
  

  const handleChange = (event) => {
    setGenres(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Genres</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={genres}
          onChange={handleChange}
          autoWidth
          label="Genres"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Crime"}>Crime</MenuItem>
          <MenuItem value={"Action"}>Action</MenuItem>
          <MenuItem value={"Biography"}>Biography</MenuItem>
          <MenuItem value={"Western"}>Western</MenuItem>
          <MenuItem value={"Drama"}>Drama</MenuItem>
          <MenuItem value={"Adventure"}>Adventure</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default  FitlerByGenres;