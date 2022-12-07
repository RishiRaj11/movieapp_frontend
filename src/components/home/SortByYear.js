import  React from 'react';
import {InputLabel,MenuItem,FormControl,Select} from  '@mui/material'
const  SortByYear=({sort,setSort})=> {
  

  const handleChange = (event) => {
    setSort(event.target.value);
    
  };
 
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sort}
          onChange={handleChange}
          autoWidth
          label="sort"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"year"}>Year</MenuItem>
          <MenuItem value={"rating"}>Ratings</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
}
export default  SortByYear;