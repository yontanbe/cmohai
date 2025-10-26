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
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800 w-full flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        {/* Section Header - Centered */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 px-4">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
            From strategy to execution, we deliver AI-powered marketing solutions that drive measurable growth
          </p>
        </div>

        {/* Services Grid - Centered */}
        <div className="w-full flex justify-center mb-12 md:mb-16">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 flex flex-col items-center text-center"
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-teal-500/0 group-hover:from-blue-600/10 group-hover:to-teal-500/10 rounded-xl transition-all duration-300"></div>

                  <div className="relative z-10 w-full flex flex-col items-center">
                    {/* Icon */}
                    <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className={`overflow-hidden transition-all duration-300 w-full ${hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="border-t border-gray-700/50 pt-3 md:pt-4 mt-3 md:mt-4">
                        <ul className="space-y-1 md:space-y-2">
                          {service.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center justify-center text-xs md:text-sm text-gray-300">
                              <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
        </div>

        {/* CTA - Centered */}
        <div className="w-full flex justify-center text-center">
          <a
            href="mailto:yontanbe@gmail.com?subject=Service Inquiry"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold text-sm md:text-base rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
