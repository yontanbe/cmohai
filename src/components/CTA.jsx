export default function CTA() {
  return (
    <section id="contact" className="relative py-40 md:py-52 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      {/* Animated Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-16">
            <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center animate-float">
              <span className="text-6xl">🚀</span>
            </div>
          </div>

          {/* Headline - CENTERED */}
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12 leading-tight">
            Need Help Building an AI-Driven Marketing Strategy?
          </h2>

          {/* Subtext - CENTERED */}
          <p className="text-3xl md:text-4xl text-purple-100 mb-20 leading-relaxed font-light">
            Let's automate your marketing and scale your impact with CMOHAI.
          </p>

          {/* CTA Buttons - CENTERED */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a
              href="mailto:yontanbe@gmail.com?subject=Schedule a Call - CMOHAI"
              className="group relative px-12 py-6 bg-white text-indigo-700 font-semibold rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-white/30 hover:scale-105 text-xl"
            >
              <span className="relative z-10 flex items-center text-xl">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Call
              </span>
              <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="mailto:yontanbe@gmail.com?subject=Custom Offer Request - CMOHAI"
              className="group px-12 py-6 border-2 border-white text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white hover:text-indigo-700 transition-all hover:scale-105 text-xl"
            >
              <span className="flex items-center text-xl">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get a Custom Offer
              </span>
            </a>
          </div>

          {/* Contact Info - CENTERED */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-purple-100 mb-20">
            <div className="flex items-center text-xl">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:yontanbe@gmail.com" className="hover:text-white transition-colors">
                yontanbe@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-purple-300 rounded-full"></div>
            <div className="flex items-center text-xl">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Global Service Available</span>
            </div>
          </div>

          {/* Trust Badge - CENTERED */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-12 py-6">
              <svg className="w-8 h-8 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium text-xl">Free Initial Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
