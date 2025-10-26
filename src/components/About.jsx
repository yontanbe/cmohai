export default function About() {
  const features = [
    {
      icon: '🎯',
      title: 'Strategy + Implementation',
      description: 'We don\'t just consult — we build. From planning to execution, we work hands-on with your team.',
    },
    {
      icon: '🌍',
      title: 'Global Service',
      description: 'Personalized engagements delivered worldwide. Work with experts who understand your market.',
    },
    {
      icon: '🤖',
      title: 'AI-Powered Marketing',
      description: 'Leverage cutting-edge AI tools to automate workflows, generate leads, and scale your impact.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-gray-900 w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">

        {/* Section Header - Generous spacing */}
        <div className="text-center mb-16 md:mb-24 lg:mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8 leading-tight">
            Marketing, Reimagined with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              AI
            </span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We Help Brands Lead — Not Follow.
          </p>
        </div>

        {/* Main Content - More spacing */}
        <div className="mb-20 md:mb-28 lg:mb-36">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10 sm:p-12 md:p-16 lg:p-20">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 text-center">
                <strong className="text-white">CMOHAI</strong> helps marketing teams modernize workflows using AI. We bring together marketing strategy, AI technology, and automation to help teams accelerate lead generation, streamline operations, and scale creative output.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed text-center">
                Our focus is on <strong className="text-teal-400">strategy + implementation</strong> — not just tools. We offer global service with personalized engagements that drive real, measurable results.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards - Better spacing */}
        <div className="mb-20 md:mb-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-10 md:p-12 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 text-center"
                >
                  <div className="text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-teal-500/20 border border-blue-500/30 rounded-full px-10 md:px-12 py-5 md:py-6">
            <p className="text-base md:text-lg lg:text-xl text-gray-300">
              <span className="font-semibold text-white">Our Mission:</span> Empower marketing teams to lead with AI-driven innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
