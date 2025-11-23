import { useRef, useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




const About = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
       gsap.registerPlugin(ScrollTrigger);

        // Title Animation 
        gsap.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
            
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                    toggleActions: "play none none reverse ",
                }
            }
        )
    })

    return (
        <section
            ref={sectionRef}
            className="h-screen relative overflow-auto bg-linear-to-b from-black to-[#9a74cf50]"
        >
            <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                <h1
                    ref={titleRef}
                    className="text-3xl md:text-5xl font-bold sm:md-16 text-center text-white opacity-0"
                >
                    About Me
                </h1>
            </div>
            <div>
                <h3>
                    I'm a front-end developer passionate about creating modern, high-performance digital experiences. My journey began with HTML, CSS, and JavaScript, and has grown into a strong skill set across TypeScript, React.js, Next.js, Three.js, GSAP, Spline, and automation with n8n. I enjoy blending clean engineering with creative visuals to build interfaces that feel smooth, responsive, and meaningful. I also have a solid foundation in computer networking and am currently expanding my expertise into backend development to become a more complete, end-to-end developer.

                </h3>

            </div>

        </section>
    )
}

export default About