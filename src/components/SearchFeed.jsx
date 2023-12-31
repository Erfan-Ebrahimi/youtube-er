import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// ____________ COMPONENTS _____________ //
import { Videos } from "./";

// ____________ MUI _____________ //
import { Box, Typography } from "@mui/material";

// ____________ API _____________ //
import { fetchFromAPI } from "../utils/fetchFromAPI";





const SearchFeed = () => {

  // selected & set ra be Sidebar mifrestim b sorate props
  const [videos, setVideos] = useState([]);

  // searchTerm ra da address dadani ke dar App neveshtim
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
    console.log(searchTerm)
    // console.log(videos)
  }, [searchTerm])


  return (
    <Box className="p-4">
      <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search results for<span style={{ color: "#dede22" }}> "{searchTerm}" </span> videos . . .
      </Typography>
      <Box className="ml-5">
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default SearchFeed;