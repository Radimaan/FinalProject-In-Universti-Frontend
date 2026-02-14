import React from "react";
import Button from "@mui/material/Button";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#e5e5e5] rounded-lg relative p-2">
      
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="w-[90%] h-full bg-transparent outline-none px-3"
      />

      <Button
        className="!absolute right-[5px] top-[8px] z-50 !w-[37px] !min-w-[37px] !h-[37px] !rounded-full !text-black"
      >
        <Search className="text-black w-[22px] h-[22px]" />
      </Button>

    </div>
  );
};

export default SearchBox;
