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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-indigo-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-50"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl font-display">C</span>
              </div>
            </div>
            <span className="text-white font-display font-bold text-3xl tracking-tight">
              CMOHAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors text-base font-medium tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors text-base font-medium tracking-wide"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('tools')}
              className="text-gray-300 hover:text-white transition-colors text-base font-medium tracking-wide"
            >
              Tools
            </button>
            <a
              href="mailto:yontanbe@gmail.com"
              className="relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-8 pb-6 space-y-6 animate-fade-in">
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
            <a
              href="mailto:yontanbe@gmail.com"
              className="block w-full text-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
