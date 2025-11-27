import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { CiShare1 } from "react-icons/ci";




const Contact = () => {
  // Main Refs 
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)


    // Meke Sure all ScrollTrigger instances are Properly Killed 

    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars && st.vars.trigger === sectionRef.current) {
          st.kill(true)
        }
      })
    }
    // Cleanup Any exicting scrollTrigger 
    cleanup()

    //  Set Initial States 
    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white", })
    gsap.set(initialTextRef.current, { opacity: 1, })
    gsap.set(finalTextRef.current, { opacity: 0, })

    //  Create Main TimeLine (driven by ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",      // when contact section hits top of viewport
        end: "+=150%",         // scroll distance for full animation
        pin: true,              // keep section fixed while animating
        scrub: 0.8,             // smooth scrubbing
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    })

    // Initial State to Mid-Zoom(0-50%)
    tl.to(
      circleRef.current, {
      scale: 5,
      backgroundColor: "#9333EA",
      ease: "power1.inOut",
      duration: 0.5,

    },
      0,


    )
    // fade out Text during first half 
    tl.to(
      initialTextRef.current, {
      opacity: 0,
      ease: "power1.out",
      duration: 0.2,

    },
      0.1,


    )
    // Mid-Zoom to Final State 
    tl.to(
      circleRef.current, {
      scale: 17,
      backgroundColor: "#E9D5FF",
      boxShadow: "0 0  50px 20px rgba(233, 213, 255, 0.3)",

      ease: "power2.inOut",
      duration: 0.5,

    },
      0.5,


    )

    //  Fade in Final text during second half 

    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power2.in",
        duration: 0.2,

      },
      0.7,

    )
    // Return Cleanup 
    return cleanup

  }, [])


  return (
    <section 
    id="contact"
    ref={sectionRef}
      className="flex items-center justify-center bg-black relative " style={{ overscrollBehavior: "none" }}>

      {/* Simple Circle With Minimal nesting */}
      <div ref={circleRef} className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center  relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-linear-to-r from-violet-400 to-pink-100 ">

        {/* Initial text  */}
        <p
          className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center text-center"
          ref={initialTextRef}
        >
          SCROLL DOWN
        </p>
        {/* Final Text  */}
        <div className="text-center flex flex-col relative items-center justify-center opacity-0" ref={finalTextRef}>
          <h1 className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5">
            Step Into the Future with Haseeb
          </h1>
          <p className="text-black lg:w-[40rem] w-[20rem] absolute am:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
            Front-end developer specialized in crafting modern, resposive web interfaces using React, Tailwind CSS, and advanced UI animations techniques. Focused on clean code, and pixel-perfect design that stand out in this AI era.
          </p>
          <button className="px-10 py-2 rounded-xl bg-violet-600 text-white transition-all duration-500 scale-[0.1] absolute sm:mt9 mt-7 text-nowrap">Contact Me</button>
        </div>
      </div>

    </section>
  )
}

export default Contact