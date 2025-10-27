export default function Services() {
  const services = [
    {
      icon: '📊',
      title: 'Marketing Consulting',
      description: 'Comprehensive marketing strategy tailored to your business goals with AI-powered insights and data-driven decisions.',
    },
    {
      icon: '🚀',
      title: 'Lead Generation',
      description: 'Build scalable lead generation systems that work 24/7, from automated prospecting to intelligent qualification.',
    },
    {
      icon: '💼',
      title: 'LinkedIn Automation',
      description: 'Personalized outreach campaigns that generate quality conversations and build meaningful connections.',
    },
    {
      icon: '📱',
      title: 'Social Media Automation',
      description: 'Automated content scheduling, publishing, and analytics across all your social media platforms.',
    },
    {
      icon: '💬',
      title: 'AI Chatbots',
      description: 'Intelligent chatbots providing instant support, lead qualification, and 24/7 customer engagement.',
    },
    {
      icon: '⚙️',
      title: 'Revenue Operations',
      description: 'Streamline revenue operations with automated workflows, CRM integration, and sales enablement.',
    },
    {
      icon: '🎓',
      title: 'AI Workshops',
      description: 'Hands-on training sessions to level up your team with practical AI marketing tools and strategies.',
    },
    {
      icon: '🔗',
      title: 'Tool Integration',
      description: 'Seamless integration of your entire marketing stack for maximum efficiency and data synchronization.',
    },
  ];

  return (
    <section id="services" className="relative py-32 md:py-44 bg-gradient-to-b from-black via-indigo-950/20 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>

      <div className="relative w-full px-6 lg:px-12">
        {/* Section Header - STANDARDIZED */}
        <div className="text-center mb-24 max-w-5xl mx-auto">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            Services That{' '}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed">
            End-to-end solutions from strategy to implementation
          </p>
        </div>

        {/* Services Grid - STANDARDIZED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass rounded-3xl p-8 border border-white/10 card-hover text-center relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500 rounded-3xl"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-5">{service.icon}</div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed">
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
