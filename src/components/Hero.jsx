export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          {/* Tagline */}
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text font-semibold text-lg md:text-xl">
              Lead Smarter. Grow Faster.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            We Build AI-Powered
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500 text-transparent bg-clip-text">
              Marketing Systems
            </span>
            <br />
            That Scale.
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            From lead generation to operations, we combine marketing excellence with automation to drive measurable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:yontanbe@gmail.com?subject=Consultation Request"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <span className="relative z-10">Book a Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="mailto:yontanbe@gmail.com?subject=AI Workshop Interest"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all hover:scale-105"
            >
              Join an AI Workshop
            </a>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">AI-First</div>
              <div className="text-gray-400">Marketing Approach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Global</div>
              <div className="text-gray-400">Service Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Hands-On</div>
              <div className="text-gray-400">Implementation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
