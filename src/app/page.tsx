"use client"

import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <main className="pb-20 sm:pb-32 lg:pb-40 z-10 min-h-screen">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}
