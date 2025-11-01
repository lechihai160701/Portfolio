import Orb from "@/components/Orb";
import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Home from "@/components/ui/Home";
import NoSSRHeader from "@/components/ui/NoSSRHeader";
import Project from "@/components/ui/Project";
import Skill from "@/components/ui/Skill";
import BackgroundLayer from "@/components/ui/BackgroundLayer"; // hoặc đặt trong file
const arrayItem = [
  {
    className: "home",
    id: "home",
    nameComponent: (
      <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0}>
        <Home />
      </Orb>
    ),
  },
  {
    className: "about",
    id: "about",
    nameComponent: <About />,
  },
  {
    className: "skill",
    id: "skill",
    nameComponent: <Skill />,
  },
  {
    className: "project",
    id: "project",
    nameComponent: <Project />,
  },
  {
    className: "contact",
    id: "contact",
    nameComponent: <Contact />,
  },
];
export default function HomePage() {
  return (
    <div className="w-full h-full relative overflow-x-hidden">
      <BackgroundLayer />

      <NoSSRHeader />
      <main>
        {arrayItem.map((item, i) => (
          <section
            key={i}
            className={`${item.className} relative`}
            id={item.id}
            style={{ minHeight: "100vh" }} // Đảm bảo full height
          >
            {item.nameComponent}
          </section>
        ))}
      </main>
    </div>
  );
}
