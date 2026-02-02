import About from "./components/about";
import Experience from "./components/experience";
import Intro from "./components/intro";
import Projects from "./components/projects";

export default function Home() {

  return (
    <main className="flex flex-col max-w-[1000px] overflow-x-hidden overflow-y-hidden mx-auto min-h-screen">
      <Intro />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}