import Image from 'next/image'
import React from 'react'
import card from '@/public/images/card.png'
import mtn from "@/public/images/mtn.png"
import stripe from "@/public/images/stripe.png"
import airtel from "@/public/images/airtel.png"
import fluterwave from "@/public/images/fluterwave.png"

export default function About() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">About Kwish Cash</h1>
                        <p className="text-gray-400">Kwish cash is a Peer- to- Peer Eco FinTech company built to create a B2B,
                            B2P, P2B & P2G seamless ﬁnancial solution that is secure, sustainable and
                            scalable. We are committed to in-depth market research & development of
                            the current trends in ﬁnancial technology and incorporating it in our prod-
                            ucts to create a satisfactory customer usability experience. With the daily
                            digital improvements in the market, we are devoted to digital innovation
                            by constantly migrating new technologies to our systems and integrating
                            third party gateways in order to deliver world class user experiences in the
                            most cost effective manner by using our business models and establishing
                            strategic business partnerships with reliable companies for a sustainable
                            business environment.</p>

                    </div>


                    <div className="grid gap-20 ">


                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={card} width={540} height={405} alt="Features 02" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <h3 className="h3 mb-3">About Us</h3>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-4">
                                            <div>
                                                <h2 className="text-lg font-semibold text-white">
                                                    Our Vision
                                                </h2>
                                                <span className=" text-sm text-gray-400">
                                                    To be the most reliable
                                                    African founded company
                                                    for global E-money
                                                    remittance.
                                                </span>
                                            </div>
                                        </li>



                                        <li className="flex items-center mb-4">
                                            <div>
                                                <h2 className="text-lg font-semibold text-white">Our Mission</h2>
                                                <span className=" text-sm text-gray-400">
                                                    To be a one-stop
                                                    remittance platform
                                                    for users across Africa.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center mb-4">
                                            <div>
                                                <h2 className="text-lg font-semibold text-white">Goal / Objective</h2>
                                                <span className=" text-sm text-gray-400 ">
                                                    To Establish a brand new financial
                                                    platform for indegenious and
                                                    international citizens.
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className=" grid grid-cols-2 md:grid-cols-2 gap-4 justify-center max-w-xl md:max-w-none md:w-full mx-auto  md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto transform hover:scale-110 transition-transform duration-300" src={mtn} width={70} height={70} alt="Features 03" /> 
                            <Image className="max-w-full mx-auto md:max-w-none h-auto transform hover:scale-110 transition-transform duration-300" src={stripe} width={70} height={70} alt="Features 03" /> 
                            <Image className="max-w-full mx-auto md:max-w-none h-auto transform hover:scale-110 transition-transform duration-300" src={airtel} width={50} height={50} alt="Features 03" /> 
                            <Image className="max-w-full mx-auto md:max-w-none h-auto transform hover:scale-110 transition-transform duration-300" src={fluterwave} width={200} height={200} alt="Features 03" /> 

                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <h3 className="h3 mb-3">Support Payment From Every Plartform</h3>
                                    <p className="text-xl text-gray-400 mb-4">We are committed to deepening ﬁnancial inclusion through
                                        technology and enabling shared prosperity. We are more than a
                                        company, Kwish Cash is beyond Banking.</p>
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
