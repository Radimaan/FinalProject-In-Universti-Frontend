import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import "../SideBar/style.css";
import Rating from '@mui/material/Rating';

import Slider from '@mui/material/Slider';




const SideBar = () => {
  const [isOpenCategoryfilter, setIsOpenCategoryfilter] = useState(true);
  const [isOpenAvilfilter, setIsOpenAvilfilter] = useState(true);
  const [isOpenSizefilter, setIsOpenSizefilter] = useState(true);

  const [value, setValue] = useState([100, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <section className="sidebar py-5">
      <div className="box">
        <h3 className="w-full mb-2 text-[16px] font-[600] flex items-center">
          Shop By Categories

          <Button
            onClick={() =>
              setIsOpenCategoryfilter(!isOpenCategoryfilter)
            }
            className=" w-[30px] !h-[30px] !min-w-[30px]  !ml-auto !rounded-full !text-black hover:!bg-[rgba(0,0,0,0.06)]"
          >
            <FaAngleDown
              className={`transition-transform duration-300 ${isOpenCategoryfilter ? "rotate-180" : "rotate-0"
                } text-lg `}
            />
          </Button>
        </h3>

        <Collapse isOpened={isOpenCategoryfilter}>
          <div className="scroll px-3 relative -left-1.5">
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Fashion" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Electronic" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Bags" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Footwear" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Groceries" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Beauty" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Wellness" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Jewellery" />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <h3 className="w-full my-2 text-[16px] font-[600] flex items-center">
          Availbility
          <Button
            onClick={() =>
              setIsOpenAvilfilter(!isOpenAvilfilter)
            }
            className=" w-[30px] !h-[30px] !min-w-[30px]  !ml-auto !rounded-full !text-black hover:!bg-[rgba(0,0,0,0.06)]"
          >
            <FaAngleDown
              className={`transition-transform duration-300 ${isOpenAvilfilter ? "rotate-180" : "rotate-0"
                } text-lg `}
            />
          </Button>
        </h3>

        <Collapse isOpened={isOpenAvilfilter}>
          <div className="scroll px-3 relative -left-1.5">
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Avelible (17)" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="In Stock (17)" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Not Avelible (1)" />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <h3 className="w-full mb-2 text-[16px] font-[600] flex items-center my-2">
          Size
          <Button
            onClick={() =>
              setIsOpenSizefilter(!isOpenSizefilter)
            }
            className=" w-[30px] !h-[30px] !min-w-[30px]  !ml-auto !rounded-full !text-black hover:!bg-[rgba(0,0,0,0.06)]"
          >
            <FaAngleDown
              className={`transition-transform duration-300 ${isOpenSizefilter ? "rotate-180" : "rotate-0"
                } text-lg `}
            />
          </Button>
        </h3>

        <Collapse isOpened={isOpenSizefilter}>
          <div className="scroll px-3 relative -left-1.5">
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="smoll (17)" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Medium(17)" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="Large (1)" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="XL (1)" />
            <FormControlLabel control={<Checkbox size="smoll" />} className="w-full" label="XXL (1)" />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <h3 className="w-full mb-2 text-[16px] font-[600] flex items-center my-2">
          Filter By Price
        </h3>

        <Slider
          min={100}
          max={2000}
          step={1}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />

        <div className="flex justify-between py-2">
          <span className="!text-[13px] ">
            From: <strong>Rs:{" "}$ {value[0]}</strong>
          </span>
          <span className="!text-[13px] ">
            To: <strong>Rs: $  {value[1]}</strong>
          </span>
        </div>
      </div>
      <div className="box">
        <h3 className="w-full mb-2 text-[16px] font-[600] flex items-center my-2">
          Filter By Rating
        </h3>
              <Rating name="size-smoll" size="smoll" readOnly defaultValue={5} className="!cursor-pointer" />
              <Rating name="size-smoll" size="smoll" readOnly defaultValue={4} className="!cursor-pointer" />
              <Rating name="size-smoll" size="smoll" readOnly defaultValue={3} className="!cursor-pointer" />
              <Rating name="size-smoll" size="smoll" readOnly defaultValue={2} className="!cursor-pointer" />
              <Rating name="size-smoll" size="smoll" readOnly defaultValue={1} className="!cursor-pointer" />


        
      </div>
    </section>
  );
};

export default SideBar;