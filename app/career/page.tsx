"use client"




import Link from 'next/link'
import { GiTakeMyMoney } from 'react-icons/gi'
import { BsTelephone } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { AiOutlineMail } from "react-icons/ai"
import card from '@/public/images/card.jpeg'
import office from "@/public/images/office.jpg"
import office1 from "@/public/images/office1.jpg"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { MdFamilyRestroom,MdOutlineAttachMoney } from "react-icons/md"

import Image from 'next/image'
import { useState } from 'react'
import Iframe from 'react-iframe';


export default function Career() {

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Join Our Team</h1>
                        {/* <h1 className="h1">Join Our Team</h1> */}

                    </div>

                    <div className="max-w-sm mx-auto grid mb-40 gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

                        <div className="group flex flex-col h-full p-6 bg-[#1C1B27] border border-transparent hover:border-[#252262] rounded-lg shadow-md transition-all" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <h3 className="text-lg text-[#FE9C02] mt-4">Software Developer</h3>
                                    <p className="text-sm text-gray-500">Hybrid</p>

                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                Just like the one in your back pocket, the Kwish Digital wallet stands as the universal cash point for any
                                and all user liquidations for transactions.  </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <a className="text-white hover:text-[#FE9C02] transition duration-150 ease-in-out" href="#0">Join Now</a>
                            </div>
                        </div>

                        <div className="group flex flex-col h-full p-6 bg-[#1C1B27] border border-transparent hover:border-[#252262] rounded-lg shadow-md transition-all" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <h3 className="text-lg text-[#FE9C02] mt-4">Devops Engineer</h3>
                                    <p className="text-sm text-gray-500">Onsite</p>

                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                To say the least, Users will be honour bound to Virtual Cards to be used for their day today online transactions on platforms such as Amazon, eBay, Alibaba,
                                Shein, Jumia and so much more.  </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <a className="text-white hover:text-[#FE9C02] transition duration-150 ease-in-out" href="#0">Join Now</a>
                            </div>
                        </div>

                        <div className="group flex flex-col h-full p-6 bg-[#1C1B27] border border-transparent hover:border-[#252262] rounded-lg shadow-md transition-all" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <h3 className="text-lg text-[#FE9C02] mt-4">Marketing Manager</h3>
                                    <p className="text-sm text-gray-500">Remote</p>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                With interest as low as 9%, Kwish Cash provides aDue to EAC regulations, it has since taken local and
                                24/7 loan availation system to liable and ﬁxedinternational banks a multitude average of 4 to 5
                                income earners in dire times.
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <a className="text-white hover:text-[#FE9C02] transition duration-150 ease-in-out" href="#0">Join Now</a>
                            </div>
                        </div>


                    </div>

                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                        {/* Image */}
                        <div className="max-w-xl flex flex-col mb-10  md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                            <Image style={{ borderRadius: '16%' }}
                                className="max-w-full mx-auto md:max-w-none rounded-lg h-auto relative  -mb-10 mr-10" src={office} width={540} height={405} alt="Features 02" />
                            <div className=" hidden md:block lg:block relative flex items-end -mt-10 ml-auto">
                                <Image style={{ borderRadius: '12%' }} className=" hover:animate-bounce max-w-full mx-auto md:max-w-none h-auto  z-20" src={office1} width={400} height={300} alt="Features 02" />
                            </div>
                        </div>




                        {/* Content */}
                        <div className="max-w-xl md:max-w-none mt-20 md:mt-10 lg:mt-10 md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                            <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                <h3 className="h3 mb-3">Environment Full of New Ideas.</h3>
                                <ul className="text-lg text-gray-400 -mb-2">
                                    <li className="flex items-center mb-4">
                                        <div className='hover:-translate-y-1 transition ease-in-out mr-10 flex p-5 justify-center items-center text-white bg-[#252262] hover:text-gray-100 hover:bg-[#252262] rounded-full transition duration-150 ease-in-out'>
                                            <HiOutlineBuildingOffice2 size={30} />

                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-white">
                                                Comfort Office
                                            </h2>
                                            <span className=" text-sm text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

                                            </span>
                                        </div>
                                    </li>



                                    <li className="flex items-center mb-4">
                                        <div className=' hover:-translate-y-1 transition ease-in-out mr-10 flex p-5 justify-center items-center text-white bg-[#252262] hover:text-gray-100 hover:bg-[#252262] rounded-full transition duration-150 ease-in-out'>
                                            <MdFamilyRestroom size={30} />

                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-white">Young & Creative</h2>
                                            <span className=" text-sm text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-center mb-4 ">
                                    <div className='hover:-translate-y-1 transition ease-in-out mr-10 flex p-5 justify-center items-center text-white bg-[#252262] hover:text-gray-100 hover:bg-[#252262] rounded-full transition duration-150 ease-in-out'>
                                            <MdOutlineAttachMoney size={30} />

                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-white">Competitive Salary</h2>
                                            <span className=" text-sm text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
