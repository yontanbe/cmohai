import { useState } from 'react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: '📊',
      title: 'Marketing Consulting & Strategy',
      description: 'Comprehensive marketing strategy tailored to your business goals, with AI-powered insights and implementation roadmaps.',
      highlights: ['Market Analysis', 'Growth Strategy', 'KPI Definition'],
    },
    {
      icon: '🚀',
      title: 'Lead Generation Automation',
      description: 'Build scalable lead generation systems that work 24/7, from prospecting to nurturing and qualification.',
      highlights: ['Automated Prospecting', 'Lead Scoring', 'CRM Integration'],
    },
    {
      icon: '💼',
      title: 'LinkedIn Outreach & Campaigns',
      description: 'Personalized LinkedIn automation campaigns that generate quality conversations and build your network.',
      highlights: ['Profile Optimization', 'Connection Automation', 'Message Sequences'],
    },
    {
      icon: '📱',
      title: 'Social Posting Automation',
      description: 'Automated content scheduling and analytics across all social platforms to maintain consistent brand presence.',
      highlights: ['Multi-Platform Publishing', 'Analytics Dashboard', 'Content Calendar'],
    },
    {
      icon: '💬',
      title: 'AI Chatbots & Assistants',
      description: 'Intelligent chatbots and knowledge-base assistants that provide instant support and capture leads.',
      highlights: ['24/7 Support', 'Lead Qualification', 'Knowledge Base Integration'],
    },
    {
      icon: '⚙️',
      title: 'Revenue Operations Automation',
      description: 'Streamline your revenue operations with automated workflows for AE/SE enablement, reporting, and tools.',
      highlights: ['Sales Enablement', 'Automated Reporting', 'Google Slides Tools'],
    },
    {
      icon: '🎓',
      title: 'AI Marketing Workshops',
      description: 'Hands-on training sessions teaching your team to build automation workflows with n8n, Zapier, and Make.com.',
      highlights: ['Team Training', 'Live Building Sessions', 'Custom Use Cases'],
    },
    {
      icon: '🔄',
      title: 'Marketing + Revenue Ops',
      description: 'Unify marketing, operations, and analytics with AI-driven workflows that reduce manual work and increase conversions.',
      highlights: ['Lead Scoring AI', 'Content Workflows', 'Campaign Optimization'],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-gray-800 w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 lg:mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto">
            From strategy to execution, we deliver AI-powered marketing solutions that drive measurable growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20 md:mb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-teal-500/0 group-hover:from-blue-600/10 group-hover:to-teal-500/10 rounded-2xl transition-all duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl md:text-6xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className={`overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="border-t border-gray-700/50 pt-5 mt-5">
                      <ul className="space-y-3">
                        {service.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center justify-center text-sm md:text-base text-gray-300">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:yontanbe@gmail.com?subject=Service Inquiry"
            className="inline-block px-10 md:px-12 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold text-lg md:text-xl rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
