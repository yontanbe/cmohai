export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-black">
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">

          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            We Help Brands Lead — <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Not Follow</span>
          </h2>

          <p className="text-2xl text-gray-400 mb-16">
            Strategy + Implementation. AI + Human Expertise. Results + Scale.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-12 mb-16">
            <p className="text-xl text-gray-300 mb-6">
              <strong className="text-white">CMOHAI</strong> helps marketing teams modernize workflows using AI. We bring together marketing strategy, AI technology, and automation to accelerate lead generation, streamline operations, and scale creative output.
            </p>
            <p className="text-xl text-gray-300">
              Our focus is on <strong className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">strategy + implementation</strong> — not just tools. We deliver personalized, global service that drives real, measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Strategy + Implementation</h3>
              <p className="text-gray-400">We don't just consult — we build with you.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">Global Service</h3>
              <p className="text-gray-400">Personalized engagements worldwide.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Marketing</h3>
              <p className="text-gray-400">Leverage AI to scale your impact.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
