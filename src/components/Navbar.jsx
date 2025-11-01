import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur border-b border-gray-800">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 py-4 flex items-center justify-between">

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-display">C</span>
            </div>
            <span className="text-white font-display font-bold text-2xl">CMOHAI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('about')} className="text-gray-300 hover:text-white">About</button>
            <button onClick={() => scrollTo('services')} className="text-gray-300 hover:text-white">Services</button>
            <button onClick={() => scrollTo('tools')} className="text-gray-300 hover:text-white">Tools</button>
            <a href="mailto:yontanbe@gmail.com" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Contact</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-6 py-4 space-y-4">
              <button onClick={() => scrollTo('about')} className="block w-full text-left text-gray-300 hover:text-white py-2">About</button>
              <button onClick={() => scrollTo('services')} className="block w-full text-left text-gray-300 hover:text-white py-2">Services</button>
              <button onClick={() => scrollTo('tools')} className="block w-full text-left text-gray-300 hover:text-white py-2">Tools</button>
              <a href="mailto:yontanbe@gmail.com" className="block w-full text-center px-6 py-2 bg-purple-600 text-white rounded-lg">Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
