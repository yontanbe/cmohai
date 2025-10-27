import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add animate class to all reveal elements to prepare for animation
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => el.classList.add('animate'));

    // Small delay before starting intersection observer
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, observerOptions);

      revealElements.forEach(el => observer.observe(el));

      return () => {
        revealElements.forEach(el => observer.unobserve(el));
      };
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tools />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
