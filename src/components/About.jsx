export default function About() {
  return (
    <section id="about" className="relative py-40 md:py-52 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>

      <div className="relative w-full px-6 lg:px-12">
        {/* Section Header - CENTERED */}
        <div className="text-center mb-32 max-w-6xl mx-auto">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Marketing, Reimagined with{' '}
            <span className="gradient-text">AI</span>
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-400 font-light">
            We Help Brands Lead — Not Follow.
          </p>
        </div>

        {/* Main Content Box - CENTERED */}
        <div className="mb-40 max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-16 md:p-20 lg:p-24 border border-white/10 text-center">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-10">
              <strong className="text-white font-semibold">CMOHAI</strong> helps marketing teams modernize workflows using AI. We bring together marketing strategy, AI technology, and automation to help teams accelerate lead generation, streamline operations, and scale creative output.
            </p>
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
              Our focus is on{' '}
              <strong className="gradient-text font-semibold">strategy + implementation</strong>{' '}
              — not just tools. We offer global service with personalized engagements that drive real, measurable results.
            </p>
          </div>
        </div>

        {/* Feature Cards - CENTERED */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-32 max-w-6xl mx-auto">
          <div className="group glass rounded-3xl p-12 border border-white/10 card-hover text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
              🎯
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-5">
              Strategy + Implementation
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              We don't just consult — we build. From planning to execution, we work hands-on with your team.
            </p>
          </div>

          <div className="group glass rounded-3xl p-12 border border-white/10 card-hover text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
              🌍
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-5">
              Global Service
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              Personalized engagements delivered worldwide. Work with experts who understand your market.
            </p>
          </div>

          <div className="group glass rounded-3xl p-12 border border-white/10 card-hover text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
              🤖
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-5">
              AI-Powered Marketing
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              Leverage cutting-edge AI tools to automate workflows, generate leads, and scale your impact.
            </p>
          </div>
        </div>

        {/* Mission Statement - CENTERED */}
        <div className="text-center">
          <div className="inline-block glass border border-indigo-500/30 rounded-full px-16 py-8 mx-auto">
            <p className="text-xl md:text-2xl text-gray-300">
              <span className="font-semibold text-white">Our Mission:</span>{' '}
              <span className="gradient-text">Empower marketing teams to lead with AI-driven innovation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
