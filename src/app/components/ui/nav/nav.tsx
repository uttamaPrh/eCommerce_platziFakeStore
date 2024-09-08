import React from "react";
import NavItem from "./nav.item";
import NavList from "./nav.list";
import Link from "next/link";
import { cart, Logo, SearchIcon } from "./icon";

const Nav = () => {
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
              {Logo}
            </div>
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block text-white">
              E-Store
            </div>{" "}
          </Link>
          <NavList />
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
            <input
              type="text"
              placeholder="Search for products"
              className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
            />
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center">

                {SearchIcon}
            </div>
          </form>
        </div>
        <div className="flex justify-end md:w-1/3">
          <button>
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-white transition-colors dark:border-neutral-700 dark:text-white">
              {cart}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
