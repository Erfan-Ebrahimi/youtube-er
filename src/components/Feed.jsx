import { useState , useEffect } from "react";

// ____________ COMPONENTS _____________ //
import {Sidebar , Videos} from "./";

// ____________ MUI _____________ //
import { Box , Stack , Typography } from "@mui/material";

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
    <Stack sx={{flexDirection: {sx:"column" , md:"row"}}}>
      <Box sx={{height:{sx:"auto" , md:"92vh"}, borderRight:"1px solid #3d3d" , px:{sx:0 , md:2}}}>
        <Typography className="copyRight" variant="body2" sx={{mt:1.5}}>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          copyRight 2023 erfanMedia
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY:"auto" , height:"90vh" , flex:"2"}}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{color:"#fff"}}>
          {selectedCategory} <span style={{color:"#dede22"}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed;