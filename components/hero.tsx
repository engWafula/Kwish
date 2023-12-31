import card from '@/public/images/card.png'
import ModalVideo from '@/components/modal-video'
import { MdOutlineAttachMoney } from 'react-icons/md'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl flex items-center flex-col  mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16 flex flex-col md:flex-row items-center">

          {/* Text content on the left */}
          <div className="md:w-1/2 max-w-3xl mx-auto text-center md:text-left pb-12 md:pb-16">
            <h1 className="h3 mb-4" data-aos="fade-up">A ONE-STOP MOBILE-
              BASED PLATFORM FOR PAYMENTS,
              TRANSFER.</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">We are committed to deepening ﬁnancial inclusion through
              technology and enabling shared prosperity. We are more than a
              company, Kwish Cash is beyond Banking.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-[#252262] rounded-full hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="/">Get started</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 rounded-full" href="/">Contact Us</a>
              </div>
            </div>
          </div>

          {/* Illustration (image) on the right */}
          <div className="hidden md:block lg:block md:w-1/2 md:pl-8 md:pr-4">
            <img
              src="https://templatekit.jegtheme.com/izpay/wp-content/uploads/sites/30/2020/12/home-img-big@2x-e1609121743866.png" // Replace with your image source
              alt="Illustration" // Provide an appropriate alt text
              className="mx-auto md:mx-0 md:max-w-full" // Adjust image styling as needed
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </div>

        </div>
        <div data-aos="fade-up" data-aos-delay="600" className='hidden md:block lg:block -mt-20 mb-10'>

          <a className="btn text-white text-xl bg-gray-700  hover:text-[#252262] hover:bg-gray-800 w-full sm:w-auto sm:ml-4 rounded-full" href="/">
            <div className='hover:-translate-y-1 transition ease-in-out mr-5 flex p-2 justify-center items-center text-white bg-[#252262] hover:text-gray-100 hover:bg-[#252262] rounded-full transition duration-150 ease-in-out'>
              <MdOutlineAttachMoney size={30} />

            </div>
            EASY PAYMENT</a>
        </div>
      </div>
    </section>

  )
}
