import Link from "next/link";
import React from "react";

const NavItem = ({ itemName }: { itemName: string }) => {
  return (
    <li>
      <Link
        href="#"
        className="text-neutral-500 underline-offset-4 text-[16px] font-semibold hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
      >
        {itemName}
      </Link>
    </li>
  );
};

export default NavItem;
