import { Stack , Box } from "@mui/material";

import {VideoCard , ChannelCard} from "./";
import { TwinSpin } from "react-cssfx-loading";


const Videos = ({videos}) => {
  
  if(!videos?.length) return <div className="mx-auto flex flex-col items-center justify-center mt-40"><TwinSpin color="#ea580c" width="40px" height="40px" duration="1s"/><p className="mt-10 text-orange-400 text-xl">Loading . . .</p></div> 
  // dar api ham channel darim ham video pas nemitavanim yek model map bezanim balke ba tavagoh be noe id ke darand tashkhis midahim ke video mibashad ya channel
  return (
    <Stack className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((item , idx) => (
        <Box key={idx}>
          {/* video ro pass midim be videoCard & channelDetali ra pass midim be ChannelCard */}
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;