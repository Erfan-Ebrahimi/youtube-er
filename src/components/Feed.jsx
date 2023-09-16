import { useState , useEffect } from "react";

// ____________ COMPONENTS _____________ //
import {Sidebar , Videos} from "./";

// ____________ MUI _____________ //
import { Box , Typography } from "@mui/material";

// ____________ API _____________ //
import { fetchFromAPI } from "../utils/fetchFromAPI";





const Feed = () => {

  // selected & set ra be Sidebar mifrestim b sorate props
  const [selectedCategory, setSelectedCategory] = useState("New"); 
  const [videos , setVideos] = useState([]);


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
    // console.log(videos)
  } , [selectedCategory])

  return (
    <Box className="flex flex-col md:flex-row">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Box className="w-full p-3 border-l border-orange-400">
        <Typography className="text-2xl font-bold mb-2 text-white" >
          {selectedCategory} <span className="text-orange-400">videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default Feed;