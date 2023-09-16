import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

// ____________ MUI _____________ //
import { Box } from "@mui/material";

// ____________ COMPONENTS _____________ //
import {Videos , ChannelCard} from "./";

// ____________ API _____________ //
import { fetchFromAPI } from "../utils/fetchFromAPI";



const ChannelDetail = () => {

  const [channelDetail , setChannelDetail] = useState(null);
  const [videos , setVideos] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  } , [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div className="bg-red-600" style={{zIndex: 10, height: "100px" }}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-120px"/>
      </Box>
        <Box className="flex justify-center">
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail;