import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro (text + image) Animation
    gsap.fromTo(
      introRef.current,
      {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen relative bg-gradient-to-b from-black to-[#9a74cf50]  "
    >
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-start pt-16">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-center text-white opacity-0"
        >
          About Me
        </h1>

        <div
  ref={introRef}
  className="mt-8 mx-4 w-full flex flex-col items-center gap-10 md:gap-16 md:flex-row md:items-center md:justify-between opacity-0"
>
  <h3 className="text-sm md:text-2xl font-bold text-purple-200 max-w-[40rem] text-center md:text-left tracking-wider">
    I'm a front-end developer passionate about creating modern,
    high-performance digital experiences. My journey began with HTML,
    CSS, and JavaScript, and has grown into a strong skill set across
    TypeScript, React.js, Next.js, Three.js, GSAP, Spline, and
    automation with n8n. I enjoy blending clean engineering with
    creative visuals to build interfaces that feel smooth, responsive,
    and meaningful. I also have a solid foundation in computer
    networking and am currently expanding my expertise into backend
    development to become a more complete, end-to-end developer.
  </h3>

  <img
    className="h-80 md:h-96 lg:h-[26rem] mix-blend-lighten"
    src="Images/person.png"
    alt="Profile Picture"
  />
</div>
      </div>
    </section>
  );
};

export default About;