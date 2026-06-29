import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsGrid />
      <Articles />
      <Footer />
    </main>
  );
}
