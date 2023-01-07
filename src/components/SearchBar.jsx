import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper , IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  return (
    <Paper
        component="form"
        onSubmit={() => {}}
        sx={{borderRadius:20, border: "1px solid red", boxShadow: "none" , pl: 2 , mr:{sm: 5} }}
    >
        <input
            className="search-bar"
            placeholder="Search . . . "
            value=""
            onChange={() => {}}
        />
        <IconButton type="submit" sx={{p: "10px" , color: "red"}} >
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar;
