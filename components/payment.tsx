import Image from 'next/image'

import customer from '@/public/images/lady.png'
import paypal from '@/public/images/Pay Pal Icon.png'
import visa from "@/public/images/Visa Icon.png"
import mastercard from "@/public/images/Mastercard Icon.png"
import stripe from "@/public/images/Stripe Icon.png"
import pay from "@/public/images/pay.png"

export default function Payment() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Items */}
                    <div className="grid gap-20 ">

                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl flex space-x-[-10] md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={customer} width={540} height={405} alt="Features 03" />
                                <Image className=" hidden md:block lg:block hover:animate-bounce-slow  max-w-full mx-auto md:max-w-none h-auto" src={pay} width={250} alt="Features 03" />
                            </div>

                            {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <Image className=" hover:animate-bounce max-w-full mx-auto md:max-w-none h-auto" src={pay} width={300} height={300} alt="Features 03" />
                            </div> */}
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <h3 className="h3 mb-3">Support Payment From Every Plartform</h3>
                                    <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="text-xl text-gray-400 mb-8">Supported Payment:</p>
                                    <ul className="text-md flex space-x-5  text-gray-400 -mb-10">
                                        <div data-aos="fade-up" data-aos-delay="400" className='hover:animate-bounce'>
                                            <Image src={mastercard} width={60} height={60} className="btn  text-white bg-[#252262] rounded-lg hover:bg-purple-700 w-4 mb-4 sm:w-auto sm:mb-0" alt='paypal' />
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay="400" className='hover:animate-bounce'>
                                            <Image src={paypal} width={60} height={80} className="btn  text-white bg-[#252262] rounded-lg hover:bg-purple-700 w-4 mb-4 sm:w-auto sm:mb-0" alt='paypal' />
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay="400">
                                            <Image src={visa} width={60} height={80} className="btn hover:animate-bounce text-white bg-[#252262] rounded-lg hover:bg-purple-700 w-4 mb-4 sm:w-auto sm:mb-0" alt='paypal' />
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay="400" className='hover:animate-bounce'>
                                            <Image src={stripe} width={60} height={80} className="btn  text-white bg-[#252262] rounded-lg hover:bg-purple-700  mb-4 sm:w-auto sm:mb-0" alt='paypal' />
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
