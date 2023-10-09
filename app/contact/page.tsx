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


export default function SignIn() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to a server.
  };
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Contact Us</h1>
          </div>

          {/* Form */}
          {/* <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                    <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-400">Or, sign in with your email</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-400 ml-2">Keep me signed in</span>
                    </label>
                    <Link href="/reset-password" className="text-[#252262] hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-[#252262] hover:bg-purple-700 w-full">Sign in</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Don’t you have an account? <Link href="/signup" className="text-[#252262] hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div> */}

          <div className="max-w-sm mx-auto grid mb-20 gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            <div className="group flex flex-col items-center justify-center h-full p-4 bg-[#1C1B27] shadow-lg border border-transparent hover:border-[#1C1B27] rounded-lg transition-all" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-4 text-center flex flex-col items-center justify-center">
                <BsTelephone size={35} color='#FE9C02' />
                <h3 className="text-lg text-white mt-5">Telephone</h3> {/* Adjust the mt value to add more spacing */}
              </div>
              <blockquote className="text-lg text-gray-400 mt-5 text-center">
                +256 704 323 297
              </blockquote>
            </div>


            <div className="group flex items-center justify-center flex-col h-full p-6 bg-[#1C1B27] shadow-lg border border-transparent hover:border-[#1C1B27] rounded-lg transition-all" data-aos="fade-up" data-aos-delay="200" >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-4 text-center flex flex-col items-center justify-center">
                  <GoLocation size={35} color='#FE9C02' />
                  <h3 className="text-lg text-white mt-5">Location</h3>
                </div>
                <blockquote className="text-lg text-gray-400">
                  Kampala, Uganda
                </blockquote>
              </div>
            </div>

            <div className="group flex flex-col h-full p-6 bg-[#1C1B27] shadow-lg border border-transparent hover:border-[#1C1B27] rounded-lg transition-all" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="mb-4 text-center flex flex-col items-center justify-center">
                  <AiOutlineMail size={35} color='#FE9C02' />
                  <h3 className="text-lg text-white mt-5">Email</h3>
                </div>
                <blockquote className="text-lg text-gray-400">
                  info@kwishcash.com
                </blockquote>
              </div>
            </div>
          </div>


          <div className="md:grid md:grid-cols-12 md:gap-6 items-center mt-5">
            {/* Image */}
            <div className="max-w-xl  md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 " data-aos="fade-up">
              <form onSubmit={handleSubmit} style={{ height: '500px' }}>
                <div className="mb-6">
                  <label className="block text-white font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full rounded py-3 px-4 text-white text-base bg-[#1C1B27] border border-white outline-none focus-visible:shadow-none focus:border-white"
                    id="name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white font-bold mb-2" htmlFor="name">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full rounded py-3 px-4 text-white text-base bg-[#1C1B27] border border-white outline-none focus-visible:shadow-none focus:border-white"

                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white font-bold mb-2" htmlFor="name">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full rounded py-3 px-4 text-white text-base bg-[#1C1B27] border border-white outline-none focus-visible:shadow-none focus:border-white"

                  />
                </div>
                <div className="mb-3">
                  <label className="block text-white font-bold mb-2" htmlFor="name">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full rounded py-3 px-4 text-white text-base bg-[#1C1B27] border border-white outline-none focus-visible:shadow-none focus:border-white"

                  />
                </div>

                <button type="submit" className='btn text-white bg-[#252262] rounded-full hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0'>Submit</button>
              </form>              </div>
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
              <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <h3 className="h3 mb-3">Get In Touch</h3>
                <ul className="text-lg text-gray-400 -mb-2">
                  <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7642363927844!2d32.6221375!3d0.29832919999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc2187fa4bfd%3A0x18a752441e3215a4!2s38a%20Bukasa%20Rd%2C%20Kampala!5e0!3m2!1sen!2sug!4v1696407221218!5m2!1sen!2sug"
                    width="100%"
                    height="500px"
                    scrolling="no"
                    title="map"
                  />
                </ul>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  )
}
