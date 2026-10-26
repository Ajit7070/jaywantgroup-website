import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import OurLegacy from "@/components/home/OurLegacy";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import OurFootprint from "@/components/home/OurFootprint";
import AwardsRecognition from "@/components/home/AwardsRecognition";
import Testimonials from "@/components/home/Testimonials";
import FeaturedBlogs from "@/components/home/FeaturedBlogs";
import Footer from "@/components/layout/Footer";
import BusinessVerticals from "@/components/home/BusinessVerticals";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <OurLegacy />
        <FeaturedProjects />
        <OurFootprint />
        <BusinessVerticals />
        <AwardsRecognition />
        <Testimonials />
        <FeaturedBlogs />
        <Footer />
      </main>
    </>
  );
}
