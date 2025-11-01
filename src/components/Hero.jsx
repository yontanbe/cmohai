export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-gray-400 text-sm uppercase tracking-wider mb-8">
          Marketing, Reimagined with AI
        </p>

        <h1 className="font-display font-bold mb-8">
          <span className="block text-white text-6xl md:text-7xl lg:text-8xl mb-4">
            We Build
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 text-6xl md:text-7xl lg:text-8xl mb-4">
            AI-Powered Marketing
          </span>
          <span className="block text-white text-6xl md:text-7xl lg:text-8xl">
            Systems That Scale
          </span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
          From lead generation to revenue operations, we combine marketing excellence with AI automation to drive measurable growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="mailto:yontanbe@gmail.com?subject=Book%20Consultation"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            Book a Consultation
          </a>
          <a
            href="mailto:yontanbe@gmail.com?subject=AI%20Workshop"
            className="px-8 py-4 border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            Join an AI Workshop
          </a>
        </div>

        <div className="flex justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">Scroll to explore</p>
            <svg className="w-6 h-6 mx-auto animate-bounce text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
