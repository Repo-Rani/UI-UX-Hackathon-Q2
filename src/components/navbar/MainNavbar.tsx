"use client";

import { usePathname } from "next/navigation";
import LandingNavbar from "./LandingNavbar";
import Navbar from "./Navbar";

const MainNavbar = () => {
  const pathname = usePathname();

  
  if (pathname === "/") {
    return <LandingNavbar />;
  }

  return <Navbar />;
};

export default MainNavbar;
