import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-linear-to-b from-violet-900 to black flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Centered Content*/}
      <div className="z-40 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            duration: 1.5,
            delay: 1.3,
          }}
          className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl z-10 mb-4 sm:mb-6 leading-tight"
        >
          Building Fast <br className="hidden sm:block" /> Reliable Results
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            duration: 1.6,
            delay: 1.8,
          }}
          className="text-purple-200 text-base sm:text-lg md:text-xl lg:text-2xl z-10 max-w-2xl mx-auto px-4"
        >
          I build modern, fast, and user-focused web experiences that transform
          simple ideas into meaningful digital products
        </motion.p>
      </div>
      {/* Right Side*/}

      {/* <iframe
  
    src="https://my.spline.design/reactiveorbcopy-yFjlDPF6VW6ij5mFfifbF1iB/"
    className="w-full h-full border-0"
    frameBorder="0"
    allow=" absolute xl:right-[-38%]"
  /> */}
    </section>
  );
};

export default Hero;
