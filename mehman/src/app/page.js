import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import Delivery from "@/components/Delivery";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import StaticMenu from "@/components/StaticMenu";
import Testinomials from "@/components/Testinomials";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <article>
      <Hero/>
      <Promo/>
      <About/>
      <StaticMenu/>
      <Cta/>
      <Delivery/>
      <Testinomials/>
      <Banner/>
      <Blog/>
      <BackToTop/>

    </article>
   </main>
  );
}
