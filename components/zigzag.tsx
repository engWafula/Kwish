import Image from 'next/image'

import customer from '@/public/images/lady.png'
import card from '@/public/images/card.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import { BiSupport } from "react-icons/bi"
import { GoLock } from "react-icons/go"
import {BsPhone} from "react-icons/bs"

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">One product, unlimited solutions</h1>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20 ">



            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={card} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Manage Everything in Your Hand</h3>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-4">
                      <div>
                        <div className='hover:-translate-y-1 transition ease-in-out mr-10 flex p-5 justify-center items-center text-white bg-[#252262] hover:text-gray-100 hover:bg-[#252262] rounded-full transition duration-150 ease-in-out'>
                          <BsPhone size={30} />

                        </div>

                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-white">
                          User Friendly</h2>
                        <span className=" text-sm text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

                        </span>
                      </div>
                    </li>



                    <li className="flex items-center mb-4">
                      <div>
                      <div className='hover:-translate-y-1 transition ease-in-out mr-10 flex p-5 justify-center items-center text-white bg-[#252262] hover:text-gray-100 hover:bg-[#252262] rounded-full transition duration-150 ease-in-out'>
                          <BiSupport size={30} />

                        </div>
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-white">Best Customer Support</h2>
                        <span className=" text-sm text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

                        </span>
                      </div>
                    </li>
                    <li className="flex items-center mb-4">
                      <div>
                        <div className='hover:-translate-y-1 transition ease-in-out mr-10 flex p-5 justify-center items-center text-white bg-[#252262] hover:text-gray-100 hover:bg-[#252262] rounded-full transition duration-150 ease-in-out'>
                          <GoLock size={30} />

                        </div>
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-white">Secure</h2>
                        <span className=" text-sm text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={customer} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Enjoy Various Merchant's Promos</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <div data-aos="fade-up" data-aos-delay="400">
                      <a className="btn text-white bg-[#252262] rounded-full hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Get started</a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
