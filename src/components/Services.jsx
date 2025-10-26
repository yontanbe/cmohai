import { useState } from 'react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: '📊',
      title: 'Marketing Consulting & Strategy',
      description: 'Comprehensive marketing strategy tailored to your business goals, with AI-powered insights.',
      highlights: ['Market Analysis', 'Growth Strategy', 'KPI Definition'],
    },
    {
      icon: '🚀',
      title: 'Lead Generation Automation',
      description: 'Build scalable lead generation systems that work 24/7, from prospecting to qualification.',
      highlights: ['Automated Prospecting', 'Lead Scoring', 'CRM Integration'],
    },
    {
      icon: '💼',
      title: 'LinkedIn Outreach & Campaigns',
      description: 'Personalized LinkedIn automation campaigns that generate quality conversations.',
      highlights: ['Profile Optimization', 'Connection Automation', 'Message Sequences'],
    },
    {
      icon: '📱',
      title: 'Social Posting Automation',
      description: 'Automated content scheduling and analytics across all social platforms.',
      highlights: ['Multi-Platform Publishing', 'Analytics Dashboard', 'Content Calendar'],
    },
    {
      icon: '💬',
      title: 'AI Chatbots & Assistants',
      description: 'Intelligent chatbots that provide instant support and capture leads.',
      highlights: ['24/7 Support', 'Lead Qualification', 'Knowledge Base'],
    },
    {
      icon: '⚙️',
      title: 'Revenue Operations',
      description: 'Streamline revenue operations with automated workflows for sales enablement.',
      highlights: ['Sales Enablement', 'Automated Reporting', 'Pipeline Tools'],
    },
    {
      icon: '🎓',
      title: 'Automation Training',
      description: 'Hands-on training teaching your team to build workflows with n8n, Zapier, Make.com.',
      highlights: ['Team Training', 'Live Building', 'Custom Use Cases'],
    },
    {
      icon: '🔄',
      title: 'AI-Powered Integration',
      description: 'Unify marketing, operations, and analytics with AI-driven workflows.',
      highlights: ['Lead Scoring AI', 'Content Workflows', 'Campaign Optimization'],
    },
  ];

  return (
    <section id="services" className="relative py-32 md:py-40 bg-gradient-to-b from-black via-indigo-950/20 to-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28 reveal">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            From strategy to execution, we deliver AI-powered marketing solutions that drive measurable growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 reveal" style={{ animationDelay: '0.2s' }}>
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group glass rounded-2xl p-8 border border-white/10 card-hover text-center relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights - Expand on hover */}
                <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="border-t border-white/10 pt-5">
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center justify-center text-sm text-gray-300">
                          <svg className="w-4 h-4 mr-2 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal" style={{ animationDelay: '0.4s' }}>
          <a
            href="mailto:yontanbe@gmail.com?subject=Service Inquiry"
            className="inline-block px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:scale-105 transition-all shadow-2xl shadow-indigo-500/50"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
