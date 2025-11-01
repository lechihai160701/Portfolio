import Orb from "@/components/Orb";
import About from "@/components/ui/About";
import BackgroundLayer from "@/components/ui/BackgroundLayer"; // hoặc đặt trong file
import Contact from "@/components/ui/Contact";
import Home from "@/components/ui/Home";
import NoSSRHeader from "@/components/ui/NoSSRHeader";
import Project from "@/components/ui/Project";
import Skill from "@/components/ui/Skill";
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
    className: "projects",
    id: "projects",
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
    <div
      className="w-full  relative overflow-x-hidden"
      // h-full
    >
      <BackgroundLayer />

      <NoSSRHeader />
      <main className="h-full">
        {arrayItem.map((item, i) => (
          <section
            key={i}
            className={`${item.className} relative`}
            id={`${item.id}`}
          >
            {item.nameComponent}
          </section>
        ))}
      </main>
    </div>
  );
}
