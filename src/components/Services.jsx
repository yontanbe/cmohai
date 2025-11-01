export default function Services() {
  const services = [
    { title: 'Marketing Consulting', description: 'Strategic marketing guidance with AI-powered insights.' },
    { title: 'Lead Generation', description: 'Automated systems that generate quality leads 24/7.' },
    { title: 'LinkedIn Automation', description: 'Personalized outreach that drives real conversations.' },
    { title: 'Social Media', description: 'Automated content scheduling across all platforms.' },
    { title: 'AI Chatbots', description: 'Intelligent chatbots for instant customer engagement.' },
    { title: 'Revenue Operations', description: 'Streamline operations with automated workflows.' },
    { title: 'AI Workshops', description: 'Hands-on training sessions for your entire team.' },
    { title: 'Tool Integration', description: 'Connect your entire marketing stack seamlessly.' },
  ];

  return (
    <section id="services" className="w-full py-20 bg-black">
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-6xl">

          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              Services That <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Scale</span>
            </h2>
            <p className="text-gray-400 text-xl">End-to-end solutions from strategy to implementation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
