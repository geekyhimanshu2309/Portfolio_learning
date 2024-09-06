import { Grid, Hero, RecentProjects } from "@/components";
import { FloatingNav } from "@/components/UI";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-scroll-y overflow-hidden
    mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <h1 className="text-black-100">Hello, Visitor!!</h1>
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
