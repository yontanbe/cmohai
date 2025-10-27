export default function About() {
  return (
    <section id="about" className="relative w-full py-20 sm:py-32 lg:py-44 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>

      <div className="relative w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center w-full">

            {/* Section Header - RESPONSIVE */}
            <div className="mb-16 sm:mb-24 lg:mb-32 w-full max-w-6xl">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 lg:mb-10 leading-tight tracking-tight">
                We Help Brands Lead —{' '}
                <span className="gradient-text">Not Follow</span>
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-light leading-relaxed px-4">
                Strategy + Implementation. AI + Human Expertise. Results + Scale.
              </p>
            </div>

            {/* Main Content - RESPONSIVE */}
            <div className="mb-20 sm:mb-28 lg:mb-40 w-full max-w-5xl px-4">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 sm:p-12 lg:p-16 xl:p-20 border border-white/10">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                  <strong className="text-white font-semibold">CMOHAI</strong> helps marketing teams modernize workflows using AI. We bring together marketing strategy, AI technology, and automation to accelerate lead generation, streamline operations, and scale creative output.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Our focus is on{' '}
                  <strong className="gradient-text font-semibold">strategy + implementation</strong>{' '}
                  — not just tools. We deliver personalized, global service that drives real, measurable results.
                </p>
              </div>
            </div>

            {/* Feature Cards - RESPONSIVE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-24 lg:mb-32 w-full max-w-6xl px-4">
              <div className="group backdrop-blur-md bg-white/5 rounded-2xl p-8 sm:p-10 lg:p-12 border border-white/10 hover:scale-[1.02] transition-transform duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-5">
                  Strategy + Implementation
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  We don't just consult — we build. From planning to execution, working hands-on with your team.
                </p>
              </div>

              <div className="group backdrop-blur-md bg-white/5 rounded-2xl p-8 sm:p-10 lg:p-12 border border-white/10 hover:scale-[1.02] transition-transform duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                  🌍
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-5">
                  Global Service
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Personalized engagements delivered worldwide. Work with experts who understand your market.
                </p>
              </div>

              <div className="group backdrop-blur-md bg-white/5 rounded-2xl p-8 sm:p-10 lg:p-12 border border-white/10 hover:scale-[1.02] transition-transform duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                  🤖
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-5">
                  AI-Powered Marketing
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Leverage cutting-edge AI to automate workflows, generate leads, and scale your impact.
                </p>
              </div>
            </div>

            {/* Mission Statement - RESPONSIVE */}
            <div className="px-4">
              <div className="inline-block backdrop-blur-md bg-white/5 border border-indigo-500/30 rounded-2xl px-8 sm:px-12 lg:px-16 py-6 sm:py-8">
                <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                  <span className="font-semibold text-white">Our Mission:</span>{' '}
                  <span className="gradient-text font-medium">Empower teams to lead with AI-driven innovation</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
