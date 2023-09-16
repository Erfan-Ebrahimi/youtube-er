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
        className="bg-zinc-900 rounded-xl pl-2 sm:mr-3 border border-red-400"
    >
        <input
            className="search-bar bg-zinc-900 text-zinc-400 outline-none w-[320px]"
            placeholder="Search . . . "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" className="p-2.5 text-red-500" >
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar;
