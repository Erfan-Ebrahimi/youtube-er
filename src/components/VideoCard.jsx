import { Link } from "react-router-dom";

import { Typography , Card , CardContent , CardMedia , Box } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { demoThumbnailUrl , demoVideoUrl , demoVideoTitle , demoChannelUrl , demoChannelTitle } from "../utils/constants";



// destrucher kardim v videoId ra gereftim 
const VideoCard = ({video: {id: {videoId} , snippet}}) => {

  console.log(videoId , snippet);
  return (
    <Card sx={{width:{md:"320px" , xs:"100%"}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width: 358 , height: 180 }}
        />
      </Link>
      <CardContent sx={{backgroundColor : "#1e1e1e" , height: "160px"}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" color="#fff" fontWeight="bold" >
            {snippet?.title.slice(0 , 60) + " . . ." || demoVideoTitle.slice(0 , 60) + " . . ."}
          </Typography>   
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Box alignItems="center" flexDirection="row" display="flex">
            <Typography variant="subtitle2" color="rosybrown" fontWeight="bold" >
              {snippet?.channelTitle || demoChannelTitle}
            </Typography>   
            <CheckCircleOutlineIcon sx={{fontSize: 17, color: "green", marginLeft: "4px",}}/>
          </Box>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;