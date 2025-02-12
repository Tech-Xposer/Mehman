import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import Head from "next/head";
import { MenuProvider } from "@/contexts/MenuContext";
import ClientLayout from "./ClientLayout";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Mehman - Best Indian Restaurant",
  description:
    "Mehman is the best Indian restaurant offering authentic, flavorful dishes crafted with the finest ingredients. Experience a wide variety of traditional and contemporary Indian cuisine, from rich curries to delicious biryanis and more. Visit us for a delightful dining experience with exceptional service in a welcoming atmosphere.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body id="top">
        <MenuProvider>
          <ClientLayout>
        {children}
          </ClientLayout>
        </MenuProvider>
        <ToastContainer/>
      </body>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>
    </html>
  );
}
