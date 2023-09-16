import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// ____________ PLAYER _____________ //
import ReactPlayer from "react-player";

// ____________ COMPONENTS _____________ //
import { Videos } from "./";
import { TwinSpin } from "react-cssfx-loading";

// ____________ MUI _____________ //
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
// ____________ API _____________ //
import { fetchFromAPI } from "../utils/fetchFromAPI";


const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  // ham snippet ra migigrim ham statistics
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoIdid=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id])

  if (!videoDetail?.snippet) return <div className="min-h-screen mx-auto flex flex-col items-center justify-center"><TwinSpin color="#ea580c" width="40px" height="40px" duration="1s"/><p className="mt-10 text-orange-400 text-xl">Loading . . .</p></div>    //if data nadashtim 


  console.log(videoDetail)
  //destrucher kardim
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Stack className="flex flex-col">
      <Box className="border-b border-red-400">
        <Box>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          <Typography className="font-bold text-3xl p-3 text-red-400">
            {title}
          </Typography>
        </Box>
        <Stack className="flex flex-row justify-between px-4 pb-5">
          <Link to={`/channel/${channelId}`}>
            <Typography mt={1} color="#fff" display="flex" alignItems="center" variant="body1"  >
              {channelTitle}
              <CheckCircleOutlineIcon sx={{ fontSize: 17, color: "green", marginLeft: "4px", }} />
            </Typography>
          </Link>
          <Stack className="flex items-center flex-row gap-x-4">
            <Typography className="text-white flex items-center gap-x-1">
              {parseInt(viewCount).toLocaleString()} <RemoveRedEyeIcon className="text-2xl text-yellow-300" />
            </Typography>
            <Typography className="text-white flex items-center gap-x-1">
              {parseInt(likeCount).toLocaleString()} <FavoriteIcon className="text-xl text-red-600"/>
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box className="mt-10 mx-auto">
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default VideoDetail;