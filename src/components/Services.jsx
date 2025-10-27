export default function Services() {
  const services = [
    {
      icon: '📊',
      title: 'Marketing Consulting',
      description: 'Comprehensive strategy tailored to your goals with AI-powered insights.',
    },
    {
      icon: '🚀',
      title: 'Lead Generation',
      description: 'Scalable lead systems that work 24/7, from prospecting to qualification.',
    },
    {
      icon: '💼',
      title: 'LinkedIn Automation',
      description: 'Personalized campaigns that generate quality conversations.',
    },
    {
      icon: '📱',
      title: 'Social Media Automation',
      description: 'Automated content scheduling and analytics across all platforms.',
    },
    {
      icon: '💬',
      title: 'AI Chatbots',
      description: 'Intelligent chatbots providing instant support and capturing leads.',
    },
    {
      icon: '⚙️',
      title: 'Revenue Operations',
      description: 'Streamlined operations with automated workflows for sales enablement.',
    },
    {
      icon: '🎓',
      title: 'AI Workshops',
      description: 'Hands-on training to level up your team with AI marketing tools.',
    },
    {
      icon: '🔗',
      title: 'Tool Integration',
      description: 'Seamless integration of your marketing stack for maximum efficiency.',
    },
  ];

  return (
    <section id="services" className="relative py-40 md:py-52 bg-gradient-to-b from-black via-indigo-950/20 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>

      <div className="relative w-full px-6 lg:px-12">
        {/* Section Header - CENTERED */}
        <div className="text-center mb-32 max-w-6xl mx-auto">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Services That{' '}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-3xl md:text-4xl text-gray-400 font-light">
            From strategy to implementation, we deliver end-to-end solutions
          </p>
        </div>

        {/* Services Grid - CENTERED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass rounded-3xl p-10 border border-white/10 card-hover text-center relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500 rounded-3xl"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
