export default function Tools() {
  const tools = [
    { name: 'OpenAI', category: 'AI Platform', logo: 'https://cdn.simpleicons.org/openai/white' },
    { name: 'Claude', category: 'AI Assistant', logo: 'https://cdn.simpleicons.org/anthropic/white' },
    { name: 'n8n', category: 'Workflow', logo: 'https://cdn.simpleicons.org/n8n/white' },
    { name: 'Zapier', category: 'Automation', logo: 'https://cdn.simpleicons.org/zapier/white' },
    { name: 'Make.com', category: 'Integration', logo: 'https://cdn.simpleicons.org/integromat/white' },
    { name: 'Calendly', category: 'Scheduling', logo: 'https://cdn.simpleicons.org/calendly/white' },
    { name: 'HeyReach', category: 'LinkedIn', icon: '🎯' },
    { name: 'Dripfy', category: 'Lead Gen', icon: '💧' },
    { name: 'Clay', category: 'Data', icon: '🎨' },
    { name: 'Vibe Coding', category: 'Development', icon: '⚡' },
  ];

  return (
    <section id="tools" className="relative py-40 md:py-52 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>

      <div className="relative w-full px-6 lg:px-12">
        {/* Section Header - CENTERED */}
        <div className="text-center mb-32 max-w-6xl mx-auto">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Tools We{' '}
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-3xl md:text-4xl text-gray-400 font-light">
            Best-in-class platforms to build powerful automation systems
          </p>
        </div>

        {/* Tools Grid - CENTERED */}
        <div className="mb-32 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group glass rounded-3xl p-10 border border-white/10 card-hover text-center relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Logo or Icon */}
                  <div className="mb-6 w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    {tool.logo ? (
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                      />
                    ) : (
                      <span className="text-5xl">{tool.icon}</span>
                    )}
                  </div>

                  {/* Tool Name */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {tool.name}
                  </h3>

                  {/* Category */}
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                    {tool.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info - CENTERED */}
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-16 md:p-20 border border-indigo-500/30 text-center">
            <div className="text-6xl mb-8">🛠️</div>
            <h3 className="font-display text-4xl font-bold text-white mb-6">
              Tailored Technology Stack
            </h3>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Every project is unique. We select and integrate the perfect combination of tools to match your specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
