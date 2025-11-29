import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from "react-icons/fi";
import { useContactForm } from "../context/ContactFormContext";

const Header = () => {
  // Toggle The Menu Open/Close

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  //  Use Contact Form Context
  const {
    isOpen: ContactFormOpen,
    openForm: openContactForm,
    closeForm: closeContactForm,
  } = useContactForm();

  // Contact Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Handle smooth scroll to section
  const handleNavClick = (sectionId) => {
    // Close mobile menu
    setIsOpen(false);

    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  // Handle Form Submission using Web3Forms (Easier than EmailJS)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Web3Forms - Super Easy Setup!
    // Get access key from: https://web3forms.com (just enter your email)
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // If not configured, show helpful message
    if (
      !accessKey ||
      accessKey.trim() === "" ||
      accessKey === "YOUR_ACCESS_KEY"
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      alert(
        "Web3Forms is not configured yet.\n\n" +
          "Quick Setup:\n" +
          "1. Create .env.local file in project root\n" +
          "2. Add: VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_here\n" +
          "3. Make sure no spaces after = sign\n" +
          "4. Restart server (npm run dev)"
      );
      return;
    }

    const formData = {
      access_key: accessKey,
      name: name,
      email: email,
      message: message,
      subject: `New Contact Form Message from ${name}`,
      from_name: name,
      to_email: "contactihaseeb@gmail.com",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        // Close form after 2 seconds
        setTimeout(() => {
          closeContactForm();
          setSubmitStatus(null);
        }, 2000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header className="App-header absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center sm:px-6 lg:px-8 h-16 md:h-20">
        {/* logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className=" flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-linear-to-r from -gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3 ">
            H
          </div>
          {/* BrandName */}
          <span className="text-xl font-bold bg-linear-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent ">
            Haseeb
          </span>
        </motion.div>

        {/* Desktop Navigation */}

        <nav className="lg:flex hidden space-x-8">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
                duration: 1.2,
              }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group cursor-pointer"
              href={`#${item.id}`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Social Icons -Desktop */}

        <div className="md:flex  hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.4,
              duration: 0.8,
            }}
            href="https://github.com/haseebjaved4212"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.4,
              duration: 0.8,
            }}
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            aria-label="Twitter Profile"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.4,
              duration: 0.8,
            }}
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          {/* Hire Me Button*/}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-linear-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300 
        "
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="text-gray-300 "
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FiX className="h-8 w-8" />
            ) : (
              <FiMenu className="h-8 w-8" />
            )}
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
          >
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  type="button"
                  onClick={() => {
                    handleNavClick(item.id);
                  }}
                  key={item.name}
                  className="relative text-left text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group cursor-pointer py-2 w-full"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>
            {/* Social Icons -Mobile */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-5">
                <a
                  href="https://github.com/haseebjaved4212"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FiGithub
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://x.com/Haseebjaved4212?t=Be1nJmdR3ipCsHK3dylBTA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                >
                  <FiTwitter
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/haseeb-javed-0332b3341"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                  />
                </a>
              </div>
              <button
                onClick={() => {
                  toggleMenu();
                  openContactForm();
                }}
                className="w-full mt-5 px-4 py-2 rounded-xl bg-linear-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300 "
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form  */}
      <AnimatePresence>
        {ContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 
        background-blur-sm  flex items-center justify-center z-50 p-4 "
            // onClick={closeContactForm}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="bg-white max-w-md w-full dark:bg-gray-900 p-6 rounded-lg  shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <button
                  onClick={closeContactForm}
                  className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                {submitStatus === "success" && (
                  <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
                    Message sent successfully! ✓
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg">
                    Failed to send message. Please try again.
                  </div>
                )}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
