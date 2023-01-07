import { Route , Routes } from "react-router-dom";
import { Box } from "@mui/material";

// ____________ COMPONENTS _____________ //
import {Navbar , Feed , SearchFeed , VideoDetail , ChannelDetail , SearchBar} from "./components";



function App() {
  return (
    <Box sx={{backgroundColor : "#000" , color:"white"}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/video/:searchTerm" element={<SearchFeed/>}/>
        <Route path="/video/:searchTerm" element={<SearchBar/>}/>
      </Routes>
    </Box>
  );
}

export default App;
