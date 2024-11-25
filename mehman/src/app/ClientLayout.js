"use client";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { usePathname } from "next/navigation";
export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      <SearchBox />
      {children}
      {/* <Form/> */}
      <Footer />
      <BackToTop />
    </>
  );
}
