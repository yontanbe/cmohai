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

      <div className="relative w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 sm:py-20 lg:py-24 xl:py-32">
          {/* Everything CENTERED */}
          <div className="flex flex-col items-center justify-center text-center w-full">
            {/* Brand - CENTERED & RESPONSIVE */}
            <div className="mb-12 sm:mb-16 w-full">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-50"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl sm:text-3xl font-display">C</span>
                  </div>
                </div>
                <span className="text-white font-display font-bold text-3xl sm:text-4xl">
                  CMOHAI
                </span>
              </div>
              <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                Marketing, Reimagined with AI. We help brands lead with AI-powered marketing systems that scale.
              </p>
              {/* Social Media - CENTERED & RESPONSIVE */}
              <div className="flex space-x-4 sm:space-x-6 justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 hover:border-indigo-500 rounded-2xl flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 hover:border-purple-500 rounded-2xl flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links - CENTERED & RESPONSIVE */}
            <div className="mb-12 sm:mb-16 w-full">
              <div className="flex flex-wrap gap-6 sm:gap-8 justify-center items-center">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white hover:gradient-text transition-all text-base sm:text-lg lg:text-xl font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white hover:gradient-text transition-all text-base sm:text-lg lg:text-xl font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('tools')}
                  className="text-gray-400 hover:text-white hover:gradient-text transition-all text-base sm:text-lg lg:text-xl font-medium"
                >
                  Tools
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white hover:gradient-text transition-all text-base sm:text-lg lg:text-xl font-medium"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Bottom Bar - CENTERED & RESPONSIVE */}
            <div className="border-t border-white/10 pt-8 sm:pt-10 w-full">
              <p className="text-gray-500 text-base sm:text-lg mb-5 sm:mb-6 px-4">
                © {currentYear} CMOHAI – Marketing & AI Consulting Worldwide.
              </p>
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center space-x-2 sm:space-x-3 text-gray-400 hover:text-white transition-colors"
                aria-label="Back to top"
              >
                <span className="text-base sm:text-lg">Back to top</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform"
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
        </div>
      </div>
    </footer>
  );
}
