import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout";

import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <Layout>

      <div className="min-h-screen h-full w-full relative flex flex-col items-center ">



        <section id="hero" className="max-w-7xl w-full h-[75vh] mt-24 md:mt-36 ">
          <video
            loop
            autoPlay
            muted
            className="h-full w-full object-cover"
          >
            <source
              src="/assets/video/hero.mp4"
              type="video/mp4"
            />
          </video>

          <div className="w-full flex  justify-center">

            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center p-3 -translate-y-10">

              <div className="w-full h-full flex items-center justify-center cursor-pointer absolute z-10 hover:opacity-0 duration-150 ">

                <p className="uppercase text-xs text-center bg-white font-kingsCaslon ">Discover<br></br>More</p>

              </div>
              <div className="w-2 h-2 bg-black rounded-full absolute" />
              <div className="w-full h-full rounded-full border border-black border-dashed roll" />
            </div>
          </div>

        </section>

        <section id="shop" className="relative  w-full h-full flex flex-col items-center py-10 mt-10">
          <div className="max-w-7xl w-full h-full px-4 md:px-10 ">
            <div className="w-full flex justify-center">
              <blockquote className="relative mb-5  w-full">
                <svg className="absolute top-0 left-5 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                </svg>

                <div className="relative z-10 flex flex-col items-center">

                  <h1 className="text-[#0A3255] text-4xl md:text-7xl font-semibold mb-3 text-center ">
                    SHOPPING CENTER

                  </h1>

                  <p className="font-light md:pr-10 mb-5 text-center text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quibusdam. Dolorum rerum consequuntur corrupti voluptatibus expedita non, quibusdam natus iusto culpa cum quasi architecto consequatur maiores ipsum minus voluptatum ducimus!</p>


                  <button className="font-light text-sm px-4 py-2 border border-[#0A3255] hover:bg-[#0A3255] hover:text-white">Discover More</button>

                </div>
              </blockquote>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="h-[400px] w-full  relative overflow-hidden">
                <Image
                  src="/assets/banner/Untitled-1-01.png"
                  alt="Untitled-1-01"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 duration-500"
                />
              </div>

              <div className="h-[400px] w-full  relative overflow-hidden">
                <Image
                  src="/assets/banner/Untitled-1-01-01.png"
                  alt="Untitled-1-01"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 duration-500"
                />
              </div>

              <div className="h-[400px] w-full  relative overflow-hidden">
                <Image
                  src="/assets/banner/Untitled-1-01-01-01.png"
                  alt="Untitled-1-01"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 duration-500"
                />
              </div>
            </div>

            <div className="w-full h-[250px] md:h-[450px] bg-black relative my-5">
              <Image
                src="/assets/banner/PRO4-_-1410-5503.png"
                alt="Promotion"
                layout="responsive"
                width={100}
                height={70}
                objectFit="cover"
                objectPosition="left"

              />
            </div>

          </div>

        </section>

        <section id="residence" className="w-full h-full flex justify-center  relative ">'
          <div className="w-full h-[500px] md:h-[725px] relative bg-[url('/assets/home/LOUNG1.jpg')] bg-fixed bg-no-repeat bg-cover">
            {/* <Image
                        src="/assets/home/LOUNG1.jpg"
                        alt="LOUNG1"
                        layout="fill"
                        objectFit="cover"
                        className="bg-fixed"
                    /> */}
          </div>

          <div className="max-w-7xl w-full h-full md:h-[725px]  absolute flex justify-center items-center px-4 md:px-10">
            <div className="bg-white/90 w-fit h-fit flex justify-center p-8 md:p-20 items-center backdrop-blur rounded-tr-3xl rounded-bl-3xl">
              <div className="text-center">
                <p className="font-serif italic text-sm md:text-base">Explore your life</p>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0A3255] mb-4">THE OLD SIAM <br />RESIDENCE</h1>
                <p className="text-slate-800 max-w-md mb-4 font-light text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate rem nostrum voluptatem, libero ab fugit sapiente aut omnis ullam illo delectus totam magni beatae</p>
                <button className="font-light text-sm px-4 py-2 border border-[#0A3255] hover:bg-[#0A3255] hover:text-white">Discover More</button>
              </div>
            </div>

          </div>
        </section>


        <section id="story" className="relative mt-10 w-full max-w-7xl  h-full px-4 md:px-10 ">

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid items-center">
              <blockquote className="relative text-center">
                <svg className="absolute top-0 left-5 md:left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                </svg>

                <div className="relative z-10">

                  <h1 className="text-[#0A3255] text-4xl md:text-7xl font-semibold mb-3">
                    THE OLD SIAM
                    <span className="text-5xl md:text-7xl font-Allison font-light text-gray-400 -ml-6">plaza</span>
                  </h1>

                  <p className="font-light md:pr-10 mb-5 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quibusdam. Dolorum rerum consequuntur corrupti voluptatibus expedita non, quibusdam natus iusto culpa cum quasi architecto consequatur maiores ipsum minus voluptatum ducimus!</p>

                  <button className="font-light text-sm px-4 py-2 border border-[#0A3255] hover:bg-[#0A3255] hover:text-white">Discover More</button>

                </div>
              </blockquote>

            </div>

            <div className="max-w-[450px] w-full h-[300px] md:h-[450px] relative md:translate-x-16 hover:scale-110 duration-500 delay-150 md:rounded-full overflow-hidden my-4 md:my-0">
              <div className="absolute h-full bg-[#0A3255]/60 w-full z-10" />
              <Image
                src="/assets/OSPbuilding.jpg"
                alt="OSPbuilding"
                layout="fill"
                objectFit="cover"
              />
            </div>

          </div>
        </section>

        <section className="max-w-7xl w-full h-full px-4 md:px-10 ">
          <div className="py-4 w-full md:-translate-y-32 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div !bg-[url('/assets/home/525677.jpg')]  ">
              <div>
                <div className="w-full image-cover rounded-t-md" >

                </div>
                <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-100">
                  <span className="block text-lg text-gray-800 font-bold tracking-wide mb-3">EXTREMELY
                    CONVENIENT LOCATION</span>
                  <span className="block text-gray-600 text-sm font-light">โครงการเชื่อมต่อกับรถไฟฟ้าทั้ง BTS และ MRT ทำให้การเดินทางสะดวกและรวดเร็ว
                  </span>
                </div>
              </div>

            </div>

            <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
              <div>
                <div className="w-full image-cover rounded-t-md" >
                  <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                    <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                  </div>
                </div>
                <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                  <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                  <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                  </span>
                </div>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span>
                <div className="pt-8 text-center">
                  <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
                </div>
              </div>
            </div>

            <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
              <div>
                <div className="w-full image-cover rounded-t-md" >
                  <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                    <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                  </div>
                </div>
                <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                  <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                  <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                  </span>
                </div>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span>
                <div className="pt-8 text-center">
                  <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
                </div>
              </div>
            </div>


          </div>
        </section>


        <section className=" md:-translate-y-14 max-w-7xl w-full h-full flex flex-col items-center justify-center text-center mt-5 ">
          <h1 className="text-[#0A3255] text-7xl font-semibold">GET IN TOUCH</h1>
          <p className="font-Allison font-light text-gray-400 text-7xl -translate-y-10">with us</p>

          <button className="text-sm px-4 py-2 border border-[#0A3255] hover:bg-[#0A3255] hover:text-white">Discover More</button>
        </section>





      </div >

    </Layout>
  );
}
