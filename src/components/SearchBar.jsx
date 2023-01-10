import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper , IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {

  const [searchTerm , setSearchTerm] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault(); // jeloy reload shodan ra migirim

    if(searchTerm){
      navigate(`/search/${searchTerm}`)
    }

    setSearchTerm("");//baz meghdar ra khali mikonim ta betavanim dobare search bokonim
  }


  return (
    <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{borderRadius:20, border: "1px solid red", boxShadow: "none" , pl: 2 , mr:{sm: 5} }}
    >
        <input
            className="search-bar"
            placeholder="Search . . . "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{p: "10px" , color: "red"}} >
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar;
