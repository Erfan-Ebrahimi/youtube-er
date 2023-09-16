import { Link } from "react-router-dom";

// ____________ MUI _____________ //
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// ____________ DEMO _____________ //
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";



// destrucher kardim v videoId ra gereftim (video ra az Videos gereftim)
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  // console.log(videoId , snippet);


  return (
    <Card className="w-full sm:w-[358px] md:w-[320px] rounded-lg overflow-hidden" >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="w-full h-44 border-b-2 border-zinc-400"
        />
      </Link>
      <CardContent className="bg-rose-950 border-b-2 border-zinc-400 h-[120px]" >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography className="font-bold text-red-100 line-clamp-2" >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Box className="flex items-center pt-2" >
            <Typography className="font-bold text-orange-400 text-xs" >
              {snippet?.channelTitle || demoChannelTitle}
            </Typography>
            <CheckCircleOutlineIcon className="text-green-500 text-lg ml-1" />
          </Box>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;