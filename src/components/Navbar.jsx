import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack className="sticky top-0 py-4 bg-zinc-700 flex flex-col md:flex-row  justify-between items-center z-40 border-b border-orange-400">
      <Box className="flex items-center gap-2 mb-2 sx:mb-0">
        <Link to="/" >
          <img src={logo} alt="logo" className="w-[40px] h-[40px] ml-3" />
        </Link>
        <Link to='/' className="text-xl text-red-400 font-mono font-bold">Youtube-er</Link>
      </Box>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar