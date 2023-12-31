import { Link } from "react-router-dom";

// ____________ MUI _____________ //
import { Typography , CardContent , CardMedia , Box } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// ____________ DEMO _____________ //
import { demoProfilePicture } from "../utils/constants";

//channelDetail ra az videos migirm
const ChannelCard = ({channelDetail , marginTop}) => {
  return (
    <Box sx={{borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", width:{xs: "356px" , md: "320px", height: "326px", margin:"auto" , marginTop } }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display: "flex", flexDirection: "column",justifyContent: "center", textAlign: "center", color:"#fff"}}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius: "10%", height: "150px", width: "180px", mb:2,marginX:"auto"}}
            className="border-2 border-orange-500"
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircleOutlineIcon sx={{fontSize: 17, color: "green", marginLeft: "4px",}}/>
          </Typography>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard;