export default function About() {
  return (
    <section id="about" className="w-full bg-black py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
          We Help Brands Lead —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Not Follow</span>
        </h2>

        <p className="text-2xl text-gray-400 mb-16">
          Strategy + Implementation. AI + Human Expertise. Results + Scale.
        </p>

        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-12 mb-16">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">CMOHAI</strong> helps marketing teams modernize workflows using AI. We bring together marketing strategy, AI technology, and automation to accelerate lead generation, streamline operations, and scale creative output.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our focus is on <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">strategy + implementation</strong> — not just tools. We deliver personalized, global service that drives real, measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Strategy + Implementation</h3>
            <p className="text-gray-400">We don't just consult — we build. From planning to execution, working hands-on with your team.</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-white mb-3">Global Service</h3>
            <p className="text-gray-400">Personalized engagements delivered worldwide. Work with experts who understand your market.</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-white mb-3">AI-Powered Marketing</h3>
            <p className="text-gray-400">Leverage cutting-edge AI to automate workflows, generate leads, and scale your impact.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
