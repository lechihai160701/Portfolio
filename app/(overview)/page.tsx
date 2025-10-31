import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Home from "@/components/ui/Home";
import NoSSRHeader from "@/components/ui/NoSSRHeader";
import Project from "@/components/ui/Project";
import Skill from "@/components/ui/Skill";
import Galaxy from "@/components/Galaxy";

const arrayItem = [
  {
    className: "home",
    id: "home",
    nameComponent: <Home />,
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
    <div className="w-full h-full">
      {/* <Galaxy /> */}
      <NoSSRHeader />
      <main className="-mt-[80px]">
        {arrayItem.map((item, i) => (
          <section className={item.className} id={item.id} key={i}>
            {item.nameComponent}
          </section>
        ))}
      </main>
    </div>
  );
}
