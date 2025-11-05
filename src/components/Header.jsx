import {motion} from "framer-motion"


const Header = () => {
  return (
    <header className="App-header absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center sm:px-6 lg:px-8 h-16 md:h-20">
        {/* logo */}
        <motion.div
        initial={{opacity:0, x: -100}}
        animate={{opacity:1, x:0}}
        transition={{
          type : "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.3,
          duration: 1.2,
        }}
        
        className=" flex items-center">
          <div className="h-10 w-10 rounded-xl bg-linear-to-r from -gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3 ">
            H
          </div>
          {/* BrandName */}
          <span className="text-xl font-bold bg-linear-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent ">
            Haseeb
          </span>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
