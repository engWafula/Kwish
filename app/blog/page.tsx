"use client"




import Link from 'next/link'
import { GiTakeMyMoney } from 'react-icons/gi'
import { BsTelephone } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { AiOutlineMail } from "react-icons/ai"
import card from '@/public/images/card.jpeg'
import Image from 'next/image'
import { useState } from 'react'
import Iframe from 'react-iframe';


export default function Blog() {

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Blog</h1>
                    </div>

                    <div className="max-w-sm mx-auto grid mb-20 gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

                        <div className="group flex flex-col h-full p-6 bg-[#1C1B27] shadow-lg border border-transparent hover:border-[#252262] rounded-lg transition-all" data-aos="fade-up" data-aos-delay="200">
                            <div className="mb-4">
                                <div className="relative overflow-hidden group-hover:scale-105 group-hover:duration-300 group-hover:ease-in-out group-hover:shadow-lg">
                                    <Image
                                        src={card}
                                        alt="Blog Image"
                                        className="w-full h-40 object-cover rounded-lg transition-transform transform scale-100"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="relative inline-flex flex-col mb-2">
                                    <h3 className="text-lg text-white mt-4">Kwish Wallet</h3>
                                    <p className="text-sm text-gray-500">Posted on October 4, 2023</p>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                Just like the one in your back pocket, the Kwish Digital wallet stands as the universal cash point for any and all user liquidations for transactions....
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <a className="text-white hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Learn More</a>
                            </div>
                        </div>
                        <div className="group flex flex-col h-full p-6 bg-[#1C1B27] shadow-lg  border border-transparent hover:border-[#252262] rounded-lg transition-all" data-aos="fade-up" data-aos-delay="200">
                            <div className="mb-4">
                                <div className="relative overflow-hidden group-hover:scale-105 group-hover:duration-300 group-hover:ease-in-out group-hover:shadow-lg">
                                    <Image
                                        src={card}
                                        alt="Blog Image"
                                        className="w-full h-40 object-cover rounded-lg transition-transform transform scale-100"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="relative inline-flex flex-col mb-2">
                                    <h3 className="text-lg text-white mt-4">Kwish Wallet</h3>
                                    <p className="text-sm text-gray-500">Posted on October 4, 2023</p>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                Just like the one in your back pocket, the Kwish Digital wallet stands as the universal cash point for any and all user liquidations for transactions....
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <a className="text-white hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Learn More</a>
                            </div>
                        </div>

                        <div className="group flex flex-col h-full p-6 bg-[#1C1B27] shadow-lg border border-transparent hover:border-[#252262] rounded-lg transition-all" data-aos="fade-up" data-aos-delay="200">
                            <div className="mb-4">
                                <div className="relative overflow-hidden group-hover:scale-105 group-hover:duration-300 group-hover:ease-in-out group-hover:shadow-lg">
                                    <Image
                                        src={card}
                                        alt="Blog Image"
                                        className="w-full h-40 object-cover rounded-lg transition-transform transform scale-100"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="relative inline-flex flex-col mb-2">
                                    <h3 className="text-lg text-white mt-4">Kwish Wallet</h3>
                                    <p className="text-sm text-gray-500">Posted on October 4, 2023</p>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                Just like the one in your back pocket, the Kwish Digital wallet stands as the universal cash point for any and all user liquidations for transactions....
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <a className="text-white hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Learn More</a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}
