export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="relative container mx-auto px-6 lg:px-12 py-20 md:py-24 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 text-center sm:text-left">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-50"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl font-display">C</span>
                </div>
              </div>
              <span className="text-white font-display font-bold text-3xl">
                CMOHAI
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              Marketing, Reimagined with AI. We help brands lead with AI-powered marketing systems that scale.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 hover:border-indigo-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 hover:border-purple-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-display text-white font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white hover:gradient-text transition-all text-base"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white hover:gradient-text transition-all text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tools')}
                  className="text-gray-400 hover:text-white hover:gradient-text transition-all text-base"
                >
                  Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white hover:gradient-text transition-all text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-display text-white font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 text-base">Marketing Consulting</li>
              <li className="text-gray-400 text-base">Lead Generation</li>
              <li className="text-gray-400 text-base">LinkedIn Automation</li>
              <li className="text-gray-400 text-base">AI Chatbots</li>
              <li className="text-gray-400 text-base">Revenue Operations</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-base text-center md:text-left">
            © {currentYear} CMOHAI – Marketing & AI Consulting Worldwide.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span className="text-base">Back to top</span>
            <svg
              className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
