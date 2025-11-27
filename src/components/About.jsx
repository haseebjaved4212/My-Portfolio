import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starRef = useRef([]); // initialize as array

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

    // Stars Animation
    if (!starRef.current || starRef.current.length === 0) return;

    starRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;
      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 + index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []); // run once on mount

  const addToStars = (el) => {
    if (el && !starRef.current.includes(el)) {
      starRef.current.push(el);
    }
  };
  return (
    <section
    id="about"
      ref={sectionRef}
      className="h-screen relative bg-linear-to-b from-black to-[#9a74cf50]"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.4,
              backgroundColor: "white",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-start pt-16">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-center text-white opacity-0"
        >
          About Me
        </h1>

        <div
          ref={introRef}
          className="mt-8 mx-6 w-full p-4 flex flex-col items-center gap-10 md:gap-16 md:flex-row md:items-center md:justify-between opacity-0"
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