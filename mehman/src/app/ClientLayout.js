"use client";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

import SearchBox from "@/components/SearchBox";
import { useMenu } from "@/contexts/MenuContext";
import { usePathname } from "next/navigation";
export default function ClientLayout({ children }) {
    const {menuOpen, toggleMenu} = useMenu();
  
  return (
    <>
      <Navbar />
      <SearchBox />
      {children}
      <Footer />
      <BackToTop />
      {menuOpen && <Menu/>}
    </>
  );
}
