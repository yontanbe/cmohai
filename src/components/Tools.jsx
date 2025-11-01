export default function Tools() {
  const tools = [
    { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/white' },
    { name: 'Claude', logo: 'https://cdn.simpleicons.org/anthropic/white' },
    { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/white' },
    { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/white' },
    { name: 'Make.com', logo: 'https://cdn.simpleicons.org/integromat/white' },
    { name: 'Calendly', logo: 'https://cdn.simpleicons.org/calendly/white' },
    { name: 'HeyReach', icon: '🎯' },
    { name: 'Dripfy', icon: '💧' },
    { name: 'Clay', icon: '🎨' },
    { name: 'Vibe Coding', icon: '⚡' },
  ];

  return (
    <section id="tools" className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Tools We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Master</span>
          </h2>
          <p className="text-gray-400 text-xl">
            Best-in-class platforms to build powerful automation systems
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:scale-105 text-center"
            >
              {tool.logo ? (
                <img src={tool.logo} alt={tool.name} className="w-16 h-16 mx-auto mb-3 object-contain" />
              ) : (
                <div className="text-4xl mb-3">{tool.icon}</div>
              )}
              <h3 className="text-sm font-bold text-white">{tool.name}</h3>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-purple-500/30 rounded-2xl p-12 text-center">
          <div className="text-5xl mb-6">🛠️</div>
          <h3 className="font-display text-3xl font-bold text-white mb-4">Tailored Technology Stack</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every project is unique. We select and integrate the perfect combination of tools to match your specific needs.
          </p>
        </div>

      </div>
    </section>
  );
}
