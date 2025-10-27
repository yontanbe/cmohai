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
    <section id="tools" className="relative w-full py-20 sm:py-32 lg:py-44 xl:py-52 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>

      <div className="relative w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center w-full">
            {/* Section Header - RESPONSIVE */}
            <div className="mb-16 sm:mb-24 lg:mb-32 w-full max-w-6xl">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-4">
                Tools We{' '}
                <span className="gradient-text">Master</span>
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light px-4">
                Best-in-class platforms to build powerful automation systems
              </p>
            </div>

            {/* Tools Grid - RESPONSIVE */}
            <div className="mb-16 sm:mb-24 lg:mb-32 w-full max-w-6xl px-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:scale-[1.02] transition-transform duration-300 text-center relative overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500 rounded-2xl sm:rounded-3xl"></div>

                    <div className="relative z-10">
                      {/* Logo or Icon - RESPONSIVE */}
                      <div className="mb-4 sm:mb-5 lg:mb-6 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        {tool.logo ? (
                          <img
                            src={tool.logo}
                            alt={tool.name}
                            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                          />
                        ) : (
                          <span className="text-3xl sm:text-4xl lg:text-5xl">{tool.icon}</span>
                        )}
                      </div>

                      {/* Tool Name - RESPONSIVE */}
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:gradient-text transition-all duration-300">
                        {tool.name}
                      </h3>

                      {/* Category - RESPONSIVE */}
                      <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info - RESPONSIVE */}
            <div className="w-full max-w-5xl px-4">
              <div className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 border border-indigo-500/30">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">🛠️</div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Tailored Technology Stack
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Every project is unique. We select and integrate the perfect combination of tools to match your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
