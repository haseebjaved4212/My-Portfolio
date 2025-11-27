import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-r from-violet-600 via-violet-700 to-fuchsia-600 text-white/90 border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
          {/* Brand */}
          <div className="md:w-1/2 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Haseeb<span className="text-violet-200">.</span>
            </h2>
           
          </div>

          {/* Links + Socials */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
            {/* Navigation */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-violet-100/80 uppercase mb-3">
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
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-violet-100/80 uppercase mb-3">
                Connect
              </h3>
              <p className="text-violet-100/80 mb-3 max-w-xs">
                Let&apos;s build something exceptional together.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/haseebjaved4212"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://twitter.com"
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
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-violet-100/70">
          <p> {new Date().getFullYear()} Haseeb. All rights reserved.</p>
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