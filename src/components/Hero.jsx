export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-black px-6 py-20">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">

        {/* Small tagline above */}
        <p className="text-gray-400 text-sm md:text-base tracking-wide uppercase">
          Marketing, Reimagined with AI
        </p>

        {/* Main headline - EXACTLY like Ana's name */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight font-display">
          <span className="text-white block mb-2">We Build</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 block mb-2">
            AI-Powered Marketing
          </span>
          <span className="text-white block">Systems That Scale</span>
        </h1>

        {/* Subtitle - like Ana's job title */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
          From lead generation to revenue operations, we combine
          marketing excellence with AI automation to drive measurable growth.
        </p>

        {/* Buttons - EXACTLY like Ana's CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a
            href="mailto:yontanbe@gmail.com?subject=Book%20Consultation%20-%20CMOHAI"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg text-base transition-all hover:scale-105 w-full sm:w-auto"
          >
            Book a Consultation
          </a>
          <a
            href="mailto:yontanbe@gmail.com?subject=AI%20Workshop%20-%20CMOHAI"
            className="px-8 py-4 border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg text-base transition-all hover:scale-105 w-full sm:w-auto"
          >
            Join an AI Workshop
          </a>
        </div>

        {/* Scroll indicator - like Ana's */}
        <div className="pt-16">
          <p className="text-gray-500 text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto animate-bounce text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

      </div>
    </section>
  );
}
