export default function CTA() {
  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 overflow-hidden w-full flex items-center justify-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-500"></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-72 md:h-72 bg-white/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-72 md:h-72 bg-teal-300/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="w-full flex justify-center">
          <div className="max-w-4xl w-full text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float">
                <span className="text-3xl md:text-4xl">🚀</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 px-4 leading-tight">
              Need Help Building an AI-Driven Marketing Strategy?
            </h2>

            {/* Subtext */}
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 md:mb-12 leading-relaxed px-4">
              Let's automate your marketing and scale your impact with CMOHAI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12 px-4">
              <a
                href="mailto:yontanbe@gmail.com?subject=Schedule a Call - CMOHAI"
                className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-white text-blue-700 font-semibold text-sm md:text-base rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-white/30 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule a Call
                </span>
                <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="mailto:yontanbe@gmail.com?subject=Custom Offer Request - CMOHAI"
                className="w-full sm:w-auto group px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-semibold text-sm md:text-base rounded-lg backdrop-blur-sm hover:bg-white hover:text-blue-700 transition-all hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Get a Custom Offer
                </span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-blue-100 mb-8 md:mb-12 px-4">
              <div className="flex items-center text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:yontanbe@gmail.com" className="hover:text-white transition-colors break-all">
                  yontanbe@gmail.com
                </a>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full"></div>
              <div className="flex items-center text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Global Service Available</span>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium text-sm md:text-base">Free Initial Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
