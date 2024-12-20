import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "./components/MainNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative mx-auto  md:w-[1920px] lg:w-[1920px]  max-w-[1920px] w-full `} >
        <MainNavbar/>
        {children}
        
        
       </body>
    </html>
  );
}
