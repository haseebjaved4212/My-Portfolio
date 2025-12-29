import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiShare1 } from "react-icons/ci";

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const horizontalRef = useRef(null);
  const triggerRef = useRef(null);

  // Projects Images Data

  const projectsData = [
    {
      id: 1,
      title: "AI  Image Enhancer",
      imageSrc: "/Images/Image-enhancer.png",
      link: "https://haseebjaved4212.github.io/AI-Powered-Image-Enhancer/",
    },
    {
      id: 2,
      title: "Prayer Times App ",
      imageSrc: "/Images/Prayer-times.png",
      link: "https://haseebjaved4212.github.io/Prayer-Times-App/",
    },
    {
      id: 3,
      title: "CodeFlow AI",
      imageSrc: "/Images/CodeFlow.png",
      link: "https://code-flow-five.vercel.app/",
    },
    {
      id: 4,
      title: "Real Estate Agency Web",
      imageSrc: "/Images/Megma.png",
      link: "https://haseebjaved4212.github.io/Real-Estate-Agency-Website/",
    },
  ];

  const projectImages = (link) => {
    if (!link) return;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title Reveals  Animation

    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",

          toggleActions: "play none none reverse",
        },
      }
    );
    //  Title Line Animation

    gsap.fromTo(
      titleLineRef.current,
      {
        width: "0%",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",

          toggleActions: "play none none reverse",
        },
      }
    );
    // Section Entrance Animation
    gsap.fromTo(
      triggerRef.current,
      {
        y: 100,
        rotationX: 20,
        opacity: 0,
      },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
    //  Parallex Effect for Entire Section

    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 0%",
      },
      {
        backgroundPosition: "50% 100% ",
        ease: "none ",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: " bottom top ",
          scrub: true,
        },
      }
    );

    //  Horizontal Scrolling + panel animations (DESKTOP ONLY)
    //  Simple check: only apply GSAP horizontal effect when viewport >= 768px.
    if (window.innerWidth >= 768) {
      //  Horizontal Scrolling
      const horizontalScroll = gsap.to(".panel", {
        xPercent: -100 * (projectsData.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${horizontalRef.current.offsetWidth}`,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (projectsData.length - 1),
            duration: { main: 0.2, max: 0.3 },
            delay: 0.1,
          },
          invalidateOnRefresh: true,
        },
      });

      //  Image Animations
      const panels = gsap.utils.toArray(".panel");
      panels.forEach((panel) => {
        const image = panel.querySelector(".project-image");
        const imageTitle = panel.querySelector(".project-title");

        //  Create a TimeLine For Each Panel
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalScroll,
            start: "left right",
            end: "right left ",
            scrub: true,
          },
        });
        // Image Scale And Opacity
        tl.fromTo(
          image,
          { scale: 0, rotate: -20 },
          { scale: 1, rotate: 1, duration: 0.5 }
        );
        // Title Animation
        if (imageTitle) {
          tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
        }
      });
    }

    // Cleanup: kill only ScrollTriggers created for this section
    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars && st.vars.trigger) {
          if (
            st.vars.trigger === sectionRef.current ||
            st.vars.trigger === triggerRef.current
          ) {
            st.kill();
          }
        }
      });
    };
  }, [projectsData.length]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 bg-[#f6f6f6]
     overflow-hidden "
    >
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-16 relative z-10 ">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:yext-6xl font-bold text-black text-center mb-4 opacity-0"
        >
          Featured Projects{" "}
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        ></div>
      </div>

      {/* Horizontal Scroll Area   section */}

      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div
          ref={horizontalRef}
          className="horizantal-section flex flex-col md:flex-row md:w-[400%] w-full "
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="panel relative flex items-center justify-center  "
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 ">
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover "
                  src={project.imageSrc}
                  alt="Project-Image"
                />
                <h2
                  className="project-title flex items-center  gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer  "
                  onClick={() => projectImages(project.link)}
                >
                  {project.title} <CiShare1 />
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
