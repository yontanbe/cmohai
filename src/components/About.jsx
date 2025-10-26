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
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gray-900 w-full flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        {/* Section Header - Centered */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight px-4">
            Marketing, Reimagined with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              AI
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            We Help Brands Lead — Not Follow.
          </p>
        </div>

        {/* Main Content - Centered */}
        <div className="mb-12 md:mb-16 w-full flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6 text-center">
                <strong className="text-white">CMOHAI</strong> helps marketing teams modernize workflows using AI. We bring together marketing strategy, AI technology, and automation to help teams accelerate lead generation, streamline operations, and scale creative output.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                Our focus is on <strong className="text-teal-400">strategy + implementation</strong> — not just tools. We offer global service with personalized engagements that drive real, measurable results.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards - Centered Grid */}
        <div className="w-full flex justify-center mb-12 md:mb-16">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 text-center flex flex-col items-center"
                >
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement - Centered */}
        <div className="w-full flex justify-center text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-teal-500/20 border border-blue-500/30 rounded-full px-6 md:px-8 py-3 md:py-4">
            <p className="text-sm md:text-base lg:text-lg text-gray-300">
              <span className="font-semibold text-white">Our Mission:</span> Empower marketing teams to lead with AI-driven innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
