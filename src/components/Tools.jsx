export default function Tools() {
  const tools = [
    {
      name: 'OpenAI',
      category: 'AI Platform',
      logo: 'https://cdn.simpleicons.org/openai/white',
    },
    {
      name: 'Claude',
      category: 'AI Assistant',
      logo: 'https://cdn.simpleicons.org/anthropic/white',
    },
    {
      name: 'n8n',
      category: 'Workflow Automation',
      logo: 'https://cdn.simpleicons.org/n8n/white',
    },
    {
      name: 'Zapier',
      category: 'Automation Platform',
      logo: 'https://cdn.simpleicons.org/zapier/white',
    },
    {
      name: 'Make.com',
      category: 'Integration Platform',
      logo: 'https://cdn.simpleicons.org/integromat/white',
    },
    {
      name: 'Calendly',
      category: 'Scheduling',
      logo: 'https://cdn.simpleicons.org/calendly/white',
    },
    {
      name: 'HeyReach',
      category: 'LinkedIn Automation',
      icon: '🎯',
    },
    {
      name: 'Dripfy',
      category: 'Lead Generation',
      icon: '💧',
    },
    {
      name: 'Clay',
      category: 'Data Enrichment',
      icon: '🎨',
    },
    {
      name: 'Vibe Coding',
      category: 'AI Development',
      icon: '⚡',
    },
  ];

  return (
    <section id="tools" className="py-16 md:py-24 lg:py-32 bg-gray-900 w-full flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        {/* Section Header - Centered */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 px-4">
            Tools We{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              Master
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
            We leverage the best-in-class platforms and AI tools to build powerful automation systems
          </p>
        </div>

        {/* Tools Grid - Centered */}
        <div className="w-full flex justify-center mb-12 md:mb-16">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 flex flex-col items-center text-center"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-teal-500/0 group-hover:from-blue-600/10 group-hover:to-teal-500/10 rounded-xl transition-all duration-300"></div>

                  <div className="relative z-10 flex flex-col items-center text-center w-full">
                    {/* Logo or Icon */}
                    <div className="mb-3 md:mb-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {tool.logo ? (
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                        />
                      ) : (
                        <span className="text-3xl md:text-4xl">{tool.icon}</span>
                      )}
                    </div>

                    {/* Tool Name */}
                    <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                      {tool.name}
                    </h3>

                    {/* Category */}
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      {tool.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info - Centered */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-gradient-to-r from-blue-900/20 to-teal-900/20 border border-blue-500/30 rounded-2xl p-6 md:p-8 text-center">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-4 space-y-4 md:space-y-0">
                <div className="text-3xl md:text-4xl">🛠️</div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                    Tailored Technology Stack
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Every project is unique. We select and integrate the perfect combination of tools to match your specific needs, whether you need simple automation or complex multi-platform workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
