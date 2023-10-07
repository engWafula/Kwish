import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import { BsWallet2, BsCreditCard2Back } from "react-icons/bs"
import { GiTakeMyMoney } from "react-icons/gi"
import { FaSackDollar } from "react-icons/fa6"

export default function Testimonials() {
  return (
    <section className='bg-white'>
      <div className="max-w-6xl  mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-gray-800">Our Service</h2>
            <p className="text-xl text-gray-700">We offer a wide range of services to meet your needs, from expert consulting to cutting-edge solutions. Our team is dedicated to providing you with the best service possible, tailored to your unique requirements. Explore our offerings and discover how we can help you succeed.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 2nd testimonial */}
            <div className="group flex flex-col h-full p-6 bg-[#1C1B27] border border-transparent hover:border-[#252262] rounded-lg transition-all" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <BsWallet2 size={30} color='#FE9C02' />
                  <h3 className="text-lg text-white mt-4">Kwish Wallet</h3>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                Just like the one in your back pocket, the Kwish Digital wallet stands as the universal cash point for any
                and all user liquidations for transactions.  </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-white hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Learn More</a>
              </div>
            </div>

            <div className="group flex flex-col h-full p-6 bg-[#1C1B27] border border-transparent hover:border-[#252262] rounded-lg transition-all" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <BsCreditCard2Back size={30} color='#FE9C02' />
                  <h3 className="text-lg text-white mt-4">Virtual Cards</h3>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                To say the least, Users will be honour bound to Virtual Cards to be used for their day today online transactions on platforms such as Amazon, eBay, Alibaba,
                Shein, Jumia and so much more.  </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-white hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Learn More</a>
              </div>
            </div>

            <div className="group flex flex-col h-full p-6 bg-[#1C1B27] border border-transparent hover:border-[#252262] rounded-lg transition-all" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <GiTakeMyMoney size={30} color='#FE9C02' />
                  <h3 className="text-lg text-white mt-4">Loans</h3>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                With interest as low as 9%, Kwish Cash provides aDue to EAC regulations, it has since taken local and
                24/7 loan availation system to liable and ﬁxedinternational banks a multitude average of 4 to 5
                income earners in dire times.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-white hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Learn More</a>
              </div>
            </div>
            {/* <div className="group flex flex-col h-full p-6 bg-gray-800 border border-transparent hover:border-[#252262] rounded-lg transition-all" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <GiTakeMyMoney size={30} />
                  <h3 className="text-lg text-[#252262] mt-4">Money Remittance</h3>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
              With interest as low as 9%, Kwish Cash provides aDue to EAC regulations, it has since taken local and
24/7 loan availation system to liable and ﬁxedinternational banks a multitude average of 4 to 5
income earners in dire times.
                 </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-[#252262] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Learn More</a>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  )
}
