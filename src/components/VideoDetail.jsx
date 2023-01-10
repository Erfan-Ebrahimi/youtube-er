import { useState , useEffect } from "react";
import { Link , useParams } from "react-router-dom";

// ____________ PLAYER _____________ //
import ReactPlayer from "react-player";

// ____________ COMPONENTS _____________ //
import {Videos} from "./";

// ____________ MUI _____________ //
import { Typography , Box , Stack } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
// ____________ API _____________ //
import { fetchFromAPI } from "../utils/fetchFromAPI";


const VideoDetail = () => {

  const [videoDetail , setVideoDetail] = useState(null);
  const [videos , setVideos] = useState([])
  const {id} = useParams();

  // ham snippet ra migigrim ham statistics
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoIdid=${id}&type=video`)
      .then((data) => setVideos(data.items));  
  } , [id])

  if(!videoDetail?.snippet) return "Loading . . ."    //if data nadashtim 


  console.log(videoDetail)
  //destrucher kardim
  const { snippet : {title , channelId , channelTitle} , statistics : {viewCount , likeCount}} = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{width: "100%", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="#f3f3f3" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
          </Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center"  px={2} sx={{color: "#fefefe"}}>
            <Link to={`/channel/${channelId}`}>
              <Typography mt={1} color="#fff" display="flex" alignItems="center" variant="body1"  >
                {channelTitle}
                <CheckCircleOutlineIcon sx={{fontSize: 17, color: "green", marginLeft: "4px",}}/>
              </Typography>
            </Link>
            <Stack direction="row" gap="25px" alignItems="center">
              <Typography variant="body1" color="#fff" sx={{opacity: '.7' , display: "flex" , alignItems: "center"}}>
                {parseInt(viewCount).toLocaleString()} <RemoveRedEyeIcon sx={{ fontSize: 20, color: "yellow", marginLeft: "4px",}} />
              </Typography>
              <Typography variant="body1" color="#fff" sx={{opacity: '.7' , display: "flex" , alignItems: "center"}}>
                {parseInt(likeCount).toLocaleString()} <FavoriteIcon sx={{ fontSize: 17, color: "red", marginLeft: "4px",}}/>
              </Typography>
            </Stack>
          </Stack>
        </Box>
      <Box px={2} py={{md: 1 , sx: 5}} justifyContent="center" alignItems="center">
        <Videos videos={videos} direction="column"/>
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail;