import { useState , useEffect } from "react";

import Sidebar from "./Sidebar";

import { Box , Stack , Typography } from "@mui/material";



const Feed = () => {
  return (
    <Stack sx={{flexDirection: {sx:"column" , md:"row"}}}>
      <Box sx={{height:{sx:"auto" , md:"92vh"}, borderRight:"1px solid #3d3d" , px:{sx:0 , md:2}}}>
        <Typography className="copyRight" variant="body2" sx={{mt:1.5}}>
          <Sidebar/>
          copyRight 2023 erfanMedia
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY:"auto" , height:"90vh" , flex:"2"}}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{color:"#fff"}}>
          New <span style={{color:"#dede22"}}>videos</span>
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed;