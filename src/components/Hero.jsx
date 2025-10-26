export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Tagline */}
          <div className="mb-8 reveal">
            <span className="inline-block px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 backdrop-blur-sm">
              Lead Smarter. Grow Faster.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight reveal" style={{ animationDelay: '0.2s' }}>
            We Build{' '}
            <span className="gradient-text block mt-2">
              AI-Powered Marketing Systems
            </span>{' '}
            <span className="block mt-2">That Scale</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed reveal" style={{ animationDelay: '0.4s' }}>
            From lead generation to operations, we combine marketing excellence with automation to drive measurable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 reveal" style={{ animationDelay: '0.6s' }}>
            <a
              href="mailto:yontanbe@gmail.com?subject=Consultation Request"
              className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transform hover:scale-105 transition-all shadow-2xl shadow-indigo-500/50"
            >
              <span className="relative z-10 flex items-center text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="mailto:yontanbe@gmail.com?subject=AI Workshop Interest"
              className="px-10 py-5 border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all text-lg"
            >
              Join an AI Workshop
            </a>
          </div>

          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto reveal" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-First Marketing</h3>
              <p className="text-gray-400 text-sm">Cutting-edge approach</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Service</h3>
              <p className="text-gray-400 text-sm">Worldwide delivery</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Hands-On Implementation</h3>
              <p className="text-gray-400 text-sm">We build with you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
