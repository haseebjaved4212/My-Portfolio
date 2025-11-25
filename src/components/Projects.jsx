import { useRef, useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);

  // Projects Images Data 

  const projectsImages = [
    {
      id: 1, 
    }
  ]


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Title Reveals  Animation 

    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",

        toggleActions: "play none none reverse"

      }

    }

    )
    //  Titlw Line Animation 

    gsap.fromTo(
      titleLineRef.current,
      {
        width: "0%",
        opacity: 0,
      }, {
      width: "100%",
      opacity: 1,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",

        toggleActions: "play none none reverse"

      }

    }

    )

  })



  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 bg-[#f6f6f6]
     overflow-hidden "
    >
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-16 relative z-10 ">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:yext-6xl font-bold text-black text-center mb-4 opacity-0">Featured Projects </h2>
        <div ref={titleLineRef} className="w-0 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto opacity-0"></div>


      </div>

      {/* Horizontal Scroll Area   section */}

      <div className="overflow-hidden ">
        <div className="horizontal-section flex  md:w-[400%] w-[420%] not-visited:">


        </div>
      </div>


    </section>


  )
}

export default Projects