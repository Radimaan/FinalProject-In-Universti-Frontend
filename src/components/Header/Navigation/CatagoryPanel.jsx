import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button } from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./style.css";
import CatagoryCollaps from "../../CatagorCollaps";

const CatagoryPanel = ({ isOpenCatPAnel, OpenCategoryPanel }) => {
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track which submenu is open

  // Toggle main menu
  const toggleMenu = (menuKey) => {
    setOpenMenu((prev) => (prev === menuKey ? null : menuKey));
    setOpenSubMenu(null); // Close submenus when opening a new menu
  };

  // Toggle submenu
  const toggleSubMenu = (submenuKey) => {
    setOpenSubMenu((prev) => (prev === submenuKey ? null : submenuKey));
  };

  const categories = [
    {
      key: "fashion",
      name: "Fashion",
      subcategories: [
        { key: "apparel", name: "Apparel", items: ["Smart Tablet", "Crop T-Shirts", "Leather Watch", "Rolling Diamond"] },
        { key: "shoes", name: "Shoes", items: [] },
      ],
    },
    {
      key: "outerwear",
      name: "OuterWear",
      subcategories: [
        { key: "apparel-outer", name: "Apparel", items: ["Smart Tablet", "Crop T-Shirts", "Leather Watch", "Rolling Diamond"] },
        { key: "shoes-outer", name: "Shoes", items: [] },
      ],
    },
  ];

  return (
    <Drawer
      anchor="left"
      open={isOpenCatPAnel}
      onClose={() => OpenCategoryPanel(false)}
    >
      <Box sx={{ width: 280 }} className="CategoryPanel">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-[18px] font-bold">Shop By Categories</h3>
          <Button
            onClick={() => OpenCategoryPanel(false)}
            className="!min-w-0 !p-2 !rounded-full"
          >
            <IoCloseSharp className="text-[20px]" />
          </Button>
        </div>

        {/* Scroll Area */}
        <CatagoryCollaps/>
  

      </Box>
    </Drawer>
  );
};

export default CatagoryPanel;
