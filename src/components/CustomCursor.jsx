import { useRef, useEffect } from "react"
import { gsap } from "gsap"

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const cursorBorderRef = useRef(null)


    // Hide Cursor On Mobile 
    const isMobile = typeof window !== "undefined" && window.matchMedia ("(max-width: 768px)").matches


    if (isMobile) return null

    useEffect(() => {
        // Get Cursor Element 
        const cursor = cursorRef.current
        const cursorBorder = cursorBorderRef.current
        
    })
    return (
        <>
            {/* Main Cursor Dot  */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[20px] h-[20px]  rounded-full bg-white pointer-events-none z-999 mix-blend-difference"

            />
            {/* Cursor Border */}
            <div
                ref={cursorBorderRef}
                className="fixed top-0 left-0 w-[40px] h-[40px]  rounded-full border  border-white pointer-events-none z-999 mix-blend-difference opacity-50"

            />
        </>
    )
}

export default CustomCursor