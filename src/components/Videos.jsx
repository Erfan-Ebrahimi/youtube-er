import { Stack , Box } from "@mui/material";

import {VideoCard , ChannelCard} from "./";


const Videos = ({videos}) => {
  
  // console.log(videos)
  // dar api ham channel darim ham video pas nemitavanim yek model map bezanim balke ba tavagoh be noe id ke darand tashkhis midahim ke video mibashad ya channel
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={2} >
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