export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>

      <div className="relative w-full px-6 lg:px-12">
        {/* Section Header - STANDARDIZED */}
        <div className="text-center mb-24 max-w-5xl mx-auto">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            We Help Brands Lead —{' '}
            <span className="gradient-text">Not Follow</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed">
            Strategy + Implementation. AI + Human Expertise. Results + Scale.
          </p>
        </div>

        {/* Main Content - STANDARDIZED */}
        <div className="mb-28 max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-14 md:p-16 border border-white/10 text-center">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              <strong className="text-white font-semibold">CMOHAI</strong> helps marketing teams modernize workflows using AI. We bring together marketing strategy, AI technology, and automation to accelerate lead generation, streamline operations, and scale creative output.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Our focus is on{' '}
              <strong className="gradient-text font-semibold">strategy + implementation</strong>{' '}
              — not just tools. We deliver personalized, global service that drives real, measurable results.
            </p>
          </div>
        </div>

        {/* Feature Cards - STANDARDIZED */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
          <div className="group glass rounded-3xl p-10 border border-white/10 card-hover text-center">
            <div className="w-18 h-18 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
              🎯
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Strategy + Implementation
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We don't just consult — we build. From planning to execution, working hands-on with your team.
            </p>
          </div>

          <div className="group glass rounded-3xl p-10 border border-white/10 card-hover text-center">
            <div className="w-18 h-18 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
              🌍
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Global Service
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Personalized engagements delivered worldwide. Work with experts who understand your market.
            </p>
          </div>

          <div className="group glass rounded-3xl p-10 border border-white/10 card-hover text-center">
            <div className="w-18 h-18 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
              🤖
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              AI-Powered Marketing
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Leverage cutting-edge AI to automate workflows, generate leads, and scale your impact.
            </p>
          </div>
        </div>

        {/* Mission Statement - STANDARDIZED */}
        <div className="text-center">
          <div className="inline-block glass border border-indigo-500/30 rounded-full px-12 py-6 mx-auto">
            <p className="text-xl text-gray-300">
              <span className="font-semibold text-white">Our Mission:</span>{' '}
              <span className="gradient-text font-medium">Empower teams to lead with AI-driven innovation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
