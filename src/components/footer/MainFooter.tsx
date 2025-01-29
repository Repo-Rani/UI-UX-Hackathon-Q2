"use client";
import { usePathname } from "next/navigation";

import LandingFooter from "./LandingFooter";
import Footer from "./Footer";


const MainFooter = () => {
  const pathname = usePathname();

  
  if (pathname === "/") {
    return <LandingFooter/>;
  }

  return <Footer />;
};

export default MainFooter;
