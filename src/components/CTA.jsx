export default function CTA() {
  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-r from-purple-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="text-5xl mb-8">🚀</div>

        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
          Ready to Transform Your Marketing?
        </h2>

        <p className="text-2xl text-purple-100 mb-12">
          Let's automate your marketing and scale your impact with AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="mailto:yontanbe@gmail.com?subject=Schedule%20a%20Call"
            className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            Schedule a Call
          </a>
          <a
            href="mailto:yontanbe@gmail.com?subject=Custom%20Offer"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition-all hover:bg-white hover:text-purple-700 hover:scale-105"
          >
            Get a Custom Offer
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-100">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:yontanbe@gmail.com" className="hover:text-white">yontanbe@gmail.com</a>
          </div>
          <div className="hidden sm:block w-2 h-2 bg-purple-300 rounded-full"></div>
          <div className="flex items-center">
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
