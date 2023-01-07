import { Stack } from "@mui/material";

import { categories } from "../utils/constants";



const selectedCategory = "New";


const Sidebar = () => {
  return (
    <Stack direction="row" sx={{overflowY:"auto" , height:{sx:"auto" , md:"95%"} , flexDirection:{md:"column"}}}>
      {categories.map((category) => (
        <button className="category-btn" style={{background: category.name === selectedCategory && "#FC1503" , color:"#fff"}} key={category.name} >
          <span style={{color: category.name === selectedCategory ? "#fff" : "#FC1503" , marginRight:  "15px" , marginTop:  "2px"}}>{category.icon}</span>
          <span style={{opacity: category.name === selectedCategory ? "1" : ".7" }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar;