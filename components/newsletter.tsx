export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl bg-[#252262] mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative  py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h4 text-white mb-2">Keep Updated About Our Product</h3>
              <p className="text-purple-200 text-lg">Join our newsletter to get top news before anyone else.</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input type="email" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400" placeholder="Your best email…" aria-label="Your best email…" />
                <a className="btn text-[#252262] bg-purple-100 hover:bg-white shadow" href="#0">Subscribe</a>
              </div>
              {/* Success message */}
              {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>

          </div>

        </div>

      </div>
    </section>
  )
}
