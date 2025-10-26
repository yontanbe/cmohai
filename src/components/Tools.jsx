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
    <section id="tools" className="relative py-32 md:py-40 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28 reveal">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Tools We{' '}
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            We leverage the best-in-class platforms and AI tools to build powerful automation systems
          </p>
        </div>

        {/* Tools Grid */}
        <div className="mb-24 md:mb-32 reveal" style={{ animationDelay: '0.2s' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group glass rounded-2xl p-8 md:p-10 border border-white/10 card-hover text-center relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500 rounded-2xl"></div>

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
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
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
        <div className="max-w-5xl mx-auto reveal" style={{ animationDelay: '0.4s' }}>
          <div className="glass rounded-3xl p-12 md:p-16 border border-indigo-500/30">
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:text-left space-y-6 md:space-y-0 md:space-x-8">
              <div className="text-5xl md:text-6xl flex-shrink-0">🛠️</div>
              <div className="text-center md:text-left">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                  Tailored Technology Stack
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
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
