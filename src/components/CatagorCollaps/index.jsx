import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa6";

const CatagoryCollaps = () => {
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
    <>
          <div className="overflow-y-auto h-[calc(100vh-60px)]">
          <ul className="flex flex-col">

            {categories.map((cat) => (
              <li key={cat.key} className="list-none border-b">

                {/* Main Category */}
                <Button
                  onClick={() => toggleMenu(cat.key)}
                  className="w-full !justify-between !text-left !text-[15px] !font-[500] !text-[rgba(0,0,0,0.87)]"
                >
                  {cat.name}
                  {openMenu === cat.key ? <FaMinus /> : <FaPlus />}
                </Button>

                {/* Subcategories */}
                {openMenu === cat.key && (
                  <ul className="pl-6">
                    {cat.subcategories.map((sub) => (
                      <li key={sub.key}>
                        <Button
                          onClick={() => toggleSubMenu(sub.key)}
                          className="w-full !justify-between !text-left !text-[14px] !font-[500] !text-[rgba(0,0,0,0.87)]"
                        >
                          {sub.name}
                          {openSubMenu === sub.key ? <FaMinus /> : <FaPlus />}
                        </Button>

                        {/* Items */}
                        {openSubMenu === sub.key && sub.items.length > 0 && (
                          <ul className="pl-6 pb-2">
                            {sub.items.map((item, idx) => (
                              <li key={idx}>
                                <Link className="!w-full !justify-start !text-[14px] !text-gray-600 hover:!text-[#ff5252] transition">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                      </li>
                    ))}
                  </ul>
                )}

              </li>
            ))}

          </ul>
        </div>
    </>
  )
}

export default CatagoryCollaps