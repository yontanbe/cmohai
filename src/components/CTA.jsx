export default function CTA() {
  return (
    <section id="contact" className="w-full py-20 px-6 bg-gradient-to-r from-purple-600 to-purple-700">
      <div className="max-w-4xl mx-auto text-center">

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <span className="text-5xl">🚀</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display">
          Ready to Transform Your Marketing?
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-purple-100 mb-12 leading-relaxed">
          Let's automate your marketing and scale your impact with AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="mailto:yontanbe@gmail.com?subject=Schedule%20a%20Call%20-%20CMOHAI"
            className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg text-base transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
          >
            Schedule a Call
          </a>
          <a
            href="mailto:yontanbe@gmail.com?subject=Custom%20Offer%20Request%20-%20CMOHAI"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition-all hover:bg-white hover:text-purple-700 hover:scale-105 w-full sm:w-auto"
          >
            Get a Custom Offer
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-100">
          <div className="flex items-center text-base">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:yontanbe@gmail.com" className="hover:text-white transition-colors">
              yontanbe@gmail.com
            </a>
          </div>
          <div className="hidden sm:block w-2 h-2 bg-purple-300 rounded-full"></div>
          <div className="flex items-center text-base">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Global Service Available</span>
          </div>
        </div>

      </div>
    </section>
  );
}
