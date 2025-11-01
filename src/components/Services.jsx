export default function Services() {
  const services = [
    { title: 'Marketing Consulting', description: 'Strategic marketing guidance with AI-powered insights.' },
    { title: 'Lead Generation', description: 'Automated systems that work 24/7 to generate quality leads.' },
    { title: 'LinkedIn Automation', description: 'Personalized outreach campaigns that drive conversations.' },
    { title: 'Social Media', description: 'Automated content scheduling and analytics across platforms.' },
    { title: 'AI Chatbots', description: 'Intelligent chatbots providing instant customer engagement.' },
    { title: 'Revenue Operations', description: 'Streamline operations with automated workflows.' },
    { title: 'AI Workshops', description: 'Hands-on training sessions for your team.' },
    { title: 'Tool Integration', description: 'Connect your entire marketing stack seamlessly.' },
  ];

  return (
    <section id="services" className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Services That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Scale</span>
          </h2>
          <p className="text-gray-400 text-xl">
            End-to-end solutions from strategy to implementation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
