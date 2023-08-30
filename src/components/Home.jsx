import { useRef } from "react";
import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";
import AboutUs from "./About-us";

export default function Home() {
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Hero />
      <Services ref={servicesRef} />
      <AboutUs ref={aboutRef} />
      <Team ref={teamRef} />
    </>
  );
}
