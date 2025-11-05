const Header = () => {
  return (
    <header className="App-header absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center sm:px-6 lg:px-8 h-16 md:h-20">
        {/* logo */}
        <div className=" flex items-center">
          <div className="h-10 w-10 rounded-xl bg-linear-to-r from -gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3 ">
            H
          </div>
          {/* BrandName */}
          <span className="text-xl font-bold bg-linear-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent ">
            Haseeb 
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
