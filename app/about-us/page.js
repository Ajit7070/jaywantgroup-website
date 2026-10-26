import AboutUs from "@/components/about-us/About-Us";
import ChairmanMessage from "@/components/about-us/ChairmanMessage";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "About Us | Jaywant Group",
  description:
    "Learn about Jaywant Group, our story, vision, and mission across real estate, industrial, residential, and commercial development.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main>
        <AboutUs />
        <ChairmanMessage />
      </main>
      <Testimonials />
      <Footer />
    </>
  );
}
