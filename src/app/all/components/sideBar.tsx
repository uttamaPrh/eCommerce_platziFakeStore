"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { FaLaptop, FaGem, FaMale, FaFemale, FaList } from "react-icons/fa";

interface IsidebarItems {
  title: string;
  link: string;
  icon: JSX.Element;
}

const sidebarItems: IsidebarItems[] = [
  { title: "All", link: "/all", icon: <FaList /> },
  { title: "Electronics", link: "/all/electronics", icon: <FaLaptop /> },
  { title: "Jewelery", link: "/all/jewelery", icon: <FaGem /> },
  { title: "Men's Clothing", link: "/all/men's clothing", icon: <FaMale /> },
  {
    title: "Women's Clothing",
    link: "/all/women's clothing",
    icon: <FaFemale />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen">
      <div
        id="sidebar"
        className="h-screen w-64 transition-transform"
        aria-label="Sidebar"
      >
        <div className="flex h-full flex-col overflow-y-auto border-r border-slate-500 px-3 py-4">
          <ul className="space-y-2 text-sm font-medium">
            {sidebarItems.map((sidebar, index) => (
              <li key={index}>
                <Link
                  href={sidebar.link}
                  className={`flex items-center rounded-lg px-3 py-2 hover:text-white dark:hover:bg-slate-700 ${
                    pathname === sidebar.link
                      ? "bg-slate-100 text-slate-900"
                      : "text-white"
                  }`}
                >
                  {sidebar.icon}
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    {sidebar.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex">
            <div className="flex w-full justify-between">
              <span className="text-sm font-medium text-white">
                email@example.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
