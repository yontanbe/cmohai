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
    <section id="tools" className="w-full bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
            Tools We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Master</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Best-in-class platforms to build powerful automation systems
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 duration-300 text-center"
            >
              {/* Logo or Icon */}
              <div className="mb-4 w-16 h-16 flex items-center justify-center mx-auto">
                {tool.logo ? (
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain filter brightness-90 hover:brightness-110 transition-all"
                  />
                ) : (
                  <span className="text-4xl">{tool.icon}</span>
                )}
              </div>

              {/* Tool Name */}
              <h3 className="text-base font-bold text-white mb-1">
                {tool.name}
              </h3>

              {/* Category */}
              <p className="text-xs text-gray-500">
                {tool.category}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center">
          <div className="text-5xl mb-6">🛠️</div>
          <h3 className="text-3xl font-bold text-white mb-4 font-display">
            Tailored Technology Stack
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Every project is unique. We select and integrate the perfect combination of tools to match your specific needs.
          </p>
        </div>

      </div>
    </section>
  );
}
