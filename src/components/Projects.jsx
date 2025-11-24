import { useRef , useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const titleLineRef = useRef(null);


    useEffect(()=>
    {

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

    </section>


  )
}

export default Projects