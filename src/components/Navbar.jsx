import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo - Centered on Mobile */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl md:text-2xl">C</span>
            </div>
            <span className="text-white font-display font-bold text-2xl md:text-3xl">
              CMOHAI
            </span>
          </div>

          {/* Desktop Navigation - Properly Spaced */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors text-base lg:text-lg font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors text-base lg:text-lg font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('tools')}
              className="text-gray-300 hover:text-white transition-colors text-base lg:text-lg font-medium"
            >
              Tools
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-base lg:text-lg font-semibold"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Properly Spaced */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-5 animate-fade-in">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-3 text-lg font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-3 text-lg font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('tools')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-3 text-lg font-medium"
            >
              Tools
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-lg font-semibold text-center"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
