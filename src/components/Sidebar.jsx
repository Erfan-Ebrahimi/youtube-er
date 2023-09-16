import { Box} from "@mui/material";
import { categories } from "../utils/constants";


//selected & setSelected ra az props Feed miigirim 

const Sidebar = ({selectedCategory , setSelectedCategory}) => {
  return (
    <Box className="w-[95%] md:w-[15%] flex flex-row overflow-x-auto gap-x-4 mx-auto md:flex-col ml-3 mt-2 sm:sticky">
      {categories.map((category) => (
        <button 
          className={`w-full sm:w-[140px] flex items-center px-3  sm:text-base sm:pl-2  sm:h-9 my-2 rounded-md ${category.name === selectedCategory ? "bg-orange-400 text-teal-700 font-bold" : "bg-orange-200 text-zinc-950"}`} 
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span className="text-red-700">{category.icon}</span>
          <span className="ml-1">{category.name}</span>
        </button>
      ))}
    </Box>
  )
}

export default Sidebar;