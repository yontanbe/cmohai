export default function About() {
  return (
    <section id="about" className="w-full bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
          We Help Brands Lead —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Not Follow</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed">
          Strategy + Implementation. AI + Human Expertise. Results + Scale.
        </p>

        {/* Main Description */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 mb-16">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">CMOHAI</strong> helps marketing teams modernize workflows using AI. We bring together marketing strategy, AI technology, and automation to accelerate lead generation, streamline operations, and scale creative output.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Our focus is on{' '}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">strategy + implementation</strong>{' '}
            — not just tools. We deliver personalized, global service that drives real, measurable results.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Strategy + Implementation
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We don't just consult — we build. From planning to execution, working hands-on with your team.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Global Service
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Personalized engagements delivered worldwide. Work with experts who understand your market.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI-Powered Marketing
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leverage cutting-edge AI to automate workflows, generate leads, and scale your impact.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
