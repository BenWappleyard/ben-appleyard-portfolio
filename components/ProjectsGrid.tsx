import FeaturedProject from "@/components/FeaturedProject";

const projects = [
  {
    id: "01",
    title: "Reimagining and redesigning Ladbrokes",
    category: "Product Design",
    year: "",
    blurb: "Leading the redesign of Ladbrokes.",
    description: "I'm currently leading a redesign of the Ladbrokes sportsbook. We're also modernising the UI of the platform across multiple verticals, including gaming and onboarding. GGR has gone up 4% in the month since release.",
    bg: "transparent",
    href: "/work/ladbrokes",
    linkText: "Find out more about redesigning Ladbrokes",
  },
  {
    id: "02",
    title: "Project Name Two",
    category: "Strategy & Research",
    year: "",
    blurb: "Capte: my personal language learning tool.",
    description: "As an avid language learner, I've set up a tool which allows me to take control of my learning. I choose the content, I honestly assess my performance and I obtain a clear picture of what I still need to learn. Skeuomorphic leaning, with no gimmicks or gamification.",
    bg: "transparent",
    href: "/work/capte",
    linkText: "Find out more about Capte",
  },
  {
    id: "03",
    title: "Project Name Four",
    category: "Brand & Identity",
    year: "",
    blurb: "Personalising Bwin.",
    description: "Building personalisation and customisation into the sportsbook experience, creating a malleable, tailored product. DATA POINT",
    bg: "transparent",
    href: "#",
    linkText: "Find out more about personalising Bwin",
  },
];

export default function ProjectsGrid() {
  return (
    <section id="work" className="bg-surface">
      {projects.map((p, i) => (
        <FeaturedProject key={p.id} project={p} borderTop={i > 0} />
      ))}
      <div className="border-t border-edge" />
    </section>
  );
}
