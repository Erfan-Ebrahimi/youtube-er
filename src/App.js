import { Route , Routes } from "react-router-dom";
import { Box } from "@mui/material";

// ____________ COMPONENTS _____________ //
import {Navbar , Feed , SearchFeed , VideoDetail , ChannelDetail} from "./components";



function App() {
  return (
    <Box className="bg-zinc-900">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
      </Routes>
    </Box>
  );
}

export default App;
