import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Form from "@/components/Form";
import Script from "next/script";
import Head from "next/head";

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
        <Navbar />
        <SearchBox />
        {children}
        <Form />
        <Footer />
        <BackToTop />
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
