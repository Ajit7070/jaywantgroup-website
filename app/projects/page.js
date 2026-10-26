import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Projects from "@/components/projects/Projects";

export const metadata = {
  title: "Our Projects | Jaywant Group",
  description:
    "Explore Jaywant Group's industrial estates and property developments.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main>
        <Projects />
      </main>

      <Footer />
    </>
  );
}
