import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-r from-violet-600 via-violet-700 to-fuchsia-600 text-white/90 border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 justify-between">
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Haseeb<span className="text-violet-200">.</span>
            </h2>
          </div>

          {/* Links + Socials */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-xs sm:text-sm">
            {/* Navigation */}
            <div className="text-center sm:text-left">
              <h3 className="text-[0.65rem] font-semibold tracking-widest text-violet-100/80 uppercase mb-2">
                Navigation
              </h3>
              <ul className="space-y-2 text-violet-100/80">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="text-center sm:text-left">
              <h3 className="text-[0.65rem] font-semibold tracking-widest text-violet-100/80 uppercase mb-2">
                Connect
              </h3>
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                <a
                  href="https://github.com/haseebjaved4212"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/haseeb-javed-0332b3341"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://x.com/Haseebjaved4212?t=Be1nJmdR3ipCsHK3dylBTA&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <FaTwitter className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.7rem] sm:text-xs text-violet-100/70">
          <p>{new Date().getFullYear()} Haseeb. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for freelance projects</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer