import React from "react";
import NavItem from "./nav.item";
const navList = ["All", "Shirts", "Stickers"];

const NavList = () => {
  return (
    <ul className="hidden gap-6 text-sm md:flex md:items-center">
      {navList.map((item, index) => {
        return <NavItem key={index} itemName={item} />;
      })}
    </ul>
  );
};

export default NavList;
