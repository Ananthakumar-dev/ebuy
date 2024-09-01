"use client";

import {
  ChartBarIcon,
  CubeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Metadata } from "next";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Users dashboard page",
};

const SideNav = () => {
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <aside className="fixed h-[90px] z-10 bg-gray-100 bottom-0 w-full md:relative md:w-1/4 md:h-full">
      <nav className="w-full h-full p-4">
        <ul className="flex gap-3 md:flex-col *:p-2">
          <li
            className={`grow rounded-md ${
              !selectedLayout ? "bg-btn text-white" : ""
            }`}
          >
            <Link href="/dashboard">
              <div className="flex flex-col items-center md:flex-row md:gap-3">
                <p className="block h-6 w-6">
                  <ChartBarIcon />
                </p>
                <p>Dashboard</p>
              </div>
            </Link>
          </li>

          <li
            className={`grow rounded-md ${
              selectedLayout === "profile" ? "bg-btn text-white" : ""
            }`}
          >
            <Link href="/dashboard/profile">
              <div className="flex flex-col items-center md:flex-row md:gap-3">
                <p className="h-6 w-6">
                  <UserCircleIcon />
                </p>
                <p>Profile</p>
              </div>
            </Link>
          </li>

          <li
            className={`grow rounded-md ${
              selectedLayout === "products" ? "bg-btn text-white" : ""
            }`}
          >
            <Link href="/dashboard/products">
              <div className="flex flex-col items-center md:flex-row md:gap-3">
                <p className="h-6 w-6">
                  <CubeIcon />
                </p>
                <p>Products</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
