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
    <section id="tools" className="py-24 md:py-32 lg:py-40 bg-gray-900 w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 lg:mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8">
            Tools We{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              Master
            </span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto">
            We leverage the best-in-class platforms and AI tools to build powerful automation systems
          </p>
        </div>

        {/* Tools Grid */}
        <div className="mb-20 md:mb-28">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-teal-500/0 group-hover:from-blue-600/10 group-hover:to-teal-500/10 rounded-2xl transition-all duration-300"></div>

                  <div className="relative z-10">
                    {/* Logo or Icon */}
                    <div className="mb-5 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      {tool.logo ? (
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                        />
                      ) : (
                        <span className="text-4xl md:text-5xl">{tool.icon}</span>
                      )}
                    </div>

                    {/* Tool Name */}
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                      {tool.name}
                    </h3>

                    {/* Category */}
                    <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      {tool.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-teal-900/20 border border-blue-500/30 rounded-3xl p-10 md:p-12 lg:p-16 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:text-left space-y-6 md:space-y-0 md:space-x-8">
              <div className="text-5xl md:text-6xl flex-shrink-0">🛠️</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                  Tailored Technology Stack
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Every project is unique. We select and integrate the perfect combination of tools to match your specific needs, whether you need simple automation or complex multi-platform workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
