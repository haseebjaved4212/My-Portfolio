import { motion } from 'framer-motion';

// import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <section className="h-screen bg-linear-to-b from-violet-900 to black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-20 px-10 relative overflow-hidden" >
      {/* Left Side*/}
      <div className="z-40 xl:mb-0 mb-[20%]">
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
          className="text-white font-bold text-4xl md:text-6xl lg:text-7xl z-10 mb-6 "
        >
          Building Fast <br /> Reliable Results
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
          className="text-purple-200 text-xl md:text-1xl lg:text-2xl z-10 max-w-2xl "
        >
          I build modern, fast, and user-focused web experiences that transform
          simple ideas into meaningful digital products
        </motion.p>
      </div>
      {/* Right Side*/}
     

      {/* <Spline
        className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0'

        scene="https://prod.spline.design/bAOhRRb5EIC-p1js/scene.splinecode" /> */}
        

  <iframe
  
    src="https://my.spline.design/reactiveorbcopy-yFjlDPF6VW6ij5mFfifbF1iB/"
    className="w-full h-full border-0"
    frameBorder="0"
    allow=" absolute xl:right-[-38%]"
  />

    </section>
  );
};

export default Hero;
