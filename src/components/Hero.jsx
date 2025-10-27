export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-44 pb-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>

      {/* Content - AGGRESSIVE SPACING */}
      <div className="relative z-10 w-full px-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Tagline */}
          <div className="mb-16">
            <span className="inline-block px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-xl font-medium text-gray-300 backdrop-blur-md tracking-wide">
              Marketing, Reimagined with AI
            </span>
          </div>

          {/* Main Headline - AGGRESSIVE SPACING */}
          <h1 className="font-display font-bold text-white tracking-tight">
            <span className="block text-[5rem] leading-[0.95] mb-10">
              We Build
            </span>
            <span className="block text-[6rem] leading-[0.95] mb-5 bg-gradient-to-r from-indigo-400 via-purple-500 to-purple-600 bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
              AI-Powered Marketing
            </span>
            <span className="block text-[5rem] leading-[0.95] mb-16">
              Systems That Scale
            </span>
          </h1>

          {/* Subheading - PROPER SPACING */}
          <p className="text-xl text-gray-300 max-w-[600px] mx-auto my-20 leading-[1.6]">
            From lead generation to revenue operations, we combine marketing excellence with AI automation to drive measurable growth.
          </p>

          {/* CTA Buttons - AGGRESSIVE SPACING */}
          <div className="flex gap-6 justify-center mt-[100px] mb-40">
            <a
              href="mailto:yontanbe@gmail.com?subject=Book%20Consultation%20-%20CMOHAI"
              className="group relative px-10 h-14 flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-2xl shadow-purple-500/30 text-base"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="mailto:yontanbe@gmail.com?subject=AI%20Workshop%20-%20CMOHAI"
              className="px-10 h-14 flex items-center border-2 border-white/20 text-white font-semibold rounded-2xl backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:scale-[1.02] transition-all duration-300 text-base"
            >
              Join an AI Workshop
            </a>
          </div>

          {/* Key Features - MOVED DOWN 150px */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-[150px]">
            <div className="text-center backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI-First Approach</h3>
              <p className="text-gray-400 text-base leading-relaxed">Cutting-edge AI technology</p>
            </div>
            <div className="text-center backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Global Service</h3>
              <p className="text-gray-400 text-base leading-relaxed">Worldwide delivery</p>
            </div>
            <div className="text-center backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Full Implementation</h3>
              <p className="text-gray-400 text-base leading-relaxed">We build with you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
