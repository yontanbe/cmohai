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
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Marketing, Reimagined with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                AI
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We Help Brands Lead — Not Follow.
            </p>
          </div>

          {/* Main Content */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">CMOHAI</strong> helps marketing teams modernize workflows using AI. We bring together marketing strategy, AI technology, and automation to help teams accelerate lead generation, streamline operations, and scale creative output.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Our focus is on <strong className="text-teal-400">strategy + implementation</strong> — not just tools. We offer global service with personalized engagements that drive real, measurable results.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600/20 to-teal-500/20 border border-blue-500/30 rounded-full px-8 py-4">
              <p className="text-lg text-gray-300">
                <span className="font-semibold text-white">Our Mission:</span> Empower marketing teams to lead with AI-driven innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
