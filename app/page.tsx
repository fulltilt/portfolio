import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 mt-[127px]">
        <Hero />
        {/* <AchievementsSection /> */}
        <div id="about" className="mb-20" />
        <AboutSection />
        <div id="projects" className="mb-20" />
        <Projects />
        <div id="contact" className="mb-20" />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
