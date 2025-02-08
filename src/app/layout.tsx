import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/navbar/MainNavbar";
import { Toaster } from "sonner";
import Script from "next/script"; 

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
      <Script
            id="chatbot-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.embeddedChatbotConfig = {
                  chatbotId: "uhmozxi9UYSh5lFd_QXTB", // Your Chatbot ID
                  domain: "www.chatbase.co"
                };
              `,
            }}
          />
          <Script
            src="https://www.chatbase.co/embed.min.js"
            data-chatbot-id="uhmozxi9UYSh5lFd_QXTB" 
            data-domain="www.chatbase.co"
            strategy="afterInteractive"
            defer
          />
      <Toaster position="top-center" />
      <MainNavbar/>

     
       {children}
        
       </body>
    </html>
    </ClerkProvider>
  );
}
