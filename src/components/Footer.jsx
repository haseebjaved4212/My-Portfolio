import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaReddit, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-r from-violet-600 via-violet-700 to-fuchsia-600 text-white/90 border-t border-white/10 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 justify-between">

          {/* Brand */}
          <div className="space-y-0.5 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Haseeb<span className="text-violet-200">.</span>
            </h2>
          </div>

          {/* Links + Socials */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 text-xs sm:text-sm">

            {/* Social */}
            <div className="text-center sm:text-left">
              <h3 className="text-[0.65rem] font-semibold tracking-widest text-violet-100/80 uppercase mb-1">
                Connect
              </h3>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-1">
                <a
                  href="https://github.com/haseebjaved4212"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  title="GitHub"
                >
                  <FaGithub className="text-base" />
                </a>

                <a
                  href="https://www.linkedin.com/in/haseeb-javed-0332b3341"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-base" />
                </a>

                <a
                  href="https://www.facebook.com/share/1BU3pcCN8W/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  title="Facebook"
                >
                  <FaFacebook className="text-base" />
                </a>

                <a
                  href="https://www.instagram.com/haseeb_javed4212?igsh=MTV0cWI2aHh2dDRmbw=="
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <FaInstagram className="text-base" />
                </a>

                <a
                  href="https://x.com/Haseebjaved4212?t=Be1nJmdR3ipCsHK3dylBTA&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  title="Twitter"
                >
                  <FaTwitter className="text-base" />
                </a>

                <a
                  href="mailto:contactimhaseeb@gmail.com"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  title="Email"
                >
                  <FaEnvelope className="text-base" />
                </a>

                <a
                  href="https://www.reddit.com/u/Haseeb4212/s/DqFxYkvD1V"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  title="Reddit"
                >
                  <FaReddit className="text-base" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-3 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[0.7rem] sm:text-xs text-violet-100/70">

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