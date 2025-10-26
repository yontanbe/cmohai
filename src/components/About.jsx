export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28 reveal">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Marketing, Reimagined with{' '}
            <span className="gradient-text">AI</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto">
            We Help Brands Lead — Not Follow.
          </p>
        </div>

        {/* Main Content Box */}
        <div className="mb-24 md:mb-32 reveal" style={{ animationDelay: '0.2s' }}>
          <div className="max-w-5xl mx-auto glass rounded-3xl p-12 md:p-16 lg:p-20 border border-white/10">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 text-center">
              <strong className="text-white font-semibold">CMOHAI</strong> helps marketing teams modernize workflows using AI. We bring together marketing strategy, AI technology, and automation to help teams accelerate lead generation, streamline operations, and scale creative output.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center">
              Our focus is on{' '}
              <strong className="gradient-text font-semibold">strategy + implementation</strong>{' '}
              — not just tools. We offer global service with personalized engagements that drive real, measurable results.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20 reveal" style={{ animationDelay: '0.4s' }}>
          <div className="group glass rounded-2xl p-10 border border-white/10 card-hover text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
              🎯
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Strategy + Implementation
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We don't just consult — we build. From planning to execution, we work hands-on with your team.
            </p>
          </div>

          <div className="group glass rounded-2xl p-10 border border-white/10 card-hover text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
              🌍
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Global Service
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Personalized engagements delivered worldwide. Work with experts who understand your market.
            </p>
          </div>

          <div className="group glass rounded-2xl p-10 border border-white/10 card-hover text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
              🤖
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              AI-Powered Marketing
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Leverage cutting-edge AI tools to automate workflows, generate leads, and scale your impact.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center reveal" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block glass border border-indigo-500/30 rounded-full px-12 py-6">
            <p className="text-lg md:text-xl text-gray-300">
              <span className="font-semibold text-white">Our Mission:</span>{' '}
              <span className="gradient-text">Empower marketing teams to lead with AI-driven innovation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
