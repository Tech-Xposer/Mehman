"use client"
import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import Delivery from "@/components/Delivery";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import SearchBox from "@/components/SearchBox";
import StaticMenu from "@/components/StaticMenu";
import Testinomials from "@/components/Testinomials";
import { useMenu } from "@/contexts/MenuContext";
import Image from "next/image";

export default function ClientLayout({children}) {
  const { menuOpen, toggleMenu } = useMenu();
  return (
    <>
    <Navbar />
    <SearchBox />
      {children}
      <Footer />
      <BackToTop />
      
    </>
  );
}
