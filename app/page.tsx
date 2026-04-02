import HeroPage from "./Homepage/page";
import AboutPage from "./About/page";
import Portfolio from "./Porfolio/page";
import Contact from "./Contact/page";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Francis Okesola's Portfolio",
  description: "A portfolio website built for easy connectivity between clients and developer"
}


export default function Home() {
  return <>
      <HeroPage/>
      <AboutPage/>
      <Portfolio/>
      <Contact/>


  </>;
}
