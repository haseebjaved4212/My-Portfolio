import {  useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
const App = () => {
  useEffect(() => {
      // Register ScrollTrigger Plugin
      gsap.registerPlugin(ScrollTrigger);
//  Referesh ScrollTrigger When Page Is Fully Loaded
      ScrollTrigger.refresh();
//  Remove ScrollTrigger When Component Unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => 
        trigger.kill()
      );
    }
    }, []);
  return (
    
    <>  
      <Header />
      <Hero />
      <CustomCursor />
      <About />
      <Projects />
    </>
  )
}

export default App
