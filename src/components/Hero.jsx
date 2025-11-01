export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-black pt-20">
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl text-center">

          <p className="text-gray-400 uppercase text-sm mb-8">Marketing, Reimagined with AI</p>

          <h1 className="font-display font-bold mb-8">
            <div className="text-white text-6xl md:text-8xl mb-4">We Build</div>
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-6xl md:text-8xl mb-4">
              AI-Powered Marketing
            </div>
            <div className="text-white text-6xl md:text-8xl">Systems That Scale</div>
          </h1>

          <p className="text-gray-300 text-xl md:text-2xl mb-12">
            From lead generation to revenue operations, we combine marketing excellence with AI automation to drive measurable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="mailto:yontanbe@gmail.com?subject=Book%20Consultation" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg">
              Book a Consultation
            </a>
            <a href="mailto:yontanbe@gmail.com?subject=AI%20Workshop" className="px-8 py-4 border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg">
              Join an AI Workshop
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
