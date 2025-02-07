import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/navbar/MainNavbar";
import { Toaster } from "sonner";
import {
  ClerkProvider,
 
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Food Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} relative mx-auto w-full   max-w-[1920px]  `} >
      <Toaster position="top-center" />
      <MainNavbar/>

     
       {children}
        
       </body>
    </html>
    </ClerkProvider>
  );
}
