import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen h-full flex flex-col items-center">
        <section id="hero" className="h-[75vh] md:h-screen max-w-7xl w-full relative py-28">
          <div className="w-full h-full absolute bg-gradient-to-b from-[#0A3255]/80" />
          <div className="w-full h-full absolute flex justify-center z-10 items-center  ">
            <div className="flex flex-col items-center  p-5 ">
              {/* <div className="w-60 md:w-72 h-fit relative">
                <Image
                  src="/assets/OSP-Logo.png"
                  alt="logo_theOldSiam"
                  layout="responsive"
                  width={100}
                  height={60}
                  objectFit="contain"
                  className="cursor-pointer " />
              </div> */}
              <h1 className="text-5xl md:text-7xl text-white font-bold text-center">THE OLD SIAM PLAZA</h1>
              <p className="text-lg md:text-xl text-white uppercase text-left">Explore your life in middle town </p>

              <div className="hidden md:block animate-bounce absolute bottom-5 duration-500">
                <svg width="16" height="125" viewBox="0 0 16 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.2929 124.707C7.68342 125.098 8.31659 125.098 8.70711 124.707L15.0711 118.343C15.4616 117.953 15.4616 117.319 15.0711 116.929C14.6805 116.538 14.0474 116.538 13.6569 116.929L8.00001 122.586L2.34315 116.929C1.95263 116.538 1.31946 116.538 0.928937 116.929C0.538413 117.319 0.538413 117.953 0.928937 118.343L7.2929 124.707ZM7 4.37114e-08L7.00001 124L9.00001 124L9 -4.37114e-08L7 4.37114e-08Z" fill="white" />
                </svg>

              </div>



            </div>

          </div>

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

        </section>

        <section id="promotion" className="w-full h-full  ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="h-[400px] w-full  relative">
              <div className="absolute w-full h-full bg-[#0A3255] opacity-60 z-10 hover:opacity-90  duration-300" />
              <Image
                src="/assets/home/promotion.jpg"
                alt="promotion"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="h-[400px] w-full grid grid-cols-2 bg-white ">
              <div className="w-full hover:w-[105%] duration-300 bg-white z-20 cursor-pointer">
                <div className="p-5 h-full justify-center flex flex-col text-center ">

                  <p className="text-2xl font-bold">Title</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, voluptates.</p>
                  <button className="px-4 py-2 hover:font-medium">read more ..</button>
                </div>
              </div>
              <div className="relative w-full">
                <div className="absolute w-full h-full bg-[#0A3255] opacity-60 z-10 hover:opacity-90  duration-300" />
                <Image
                  src="/assets/home/probanner1.jpg"
                  alt="promotion2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="h-[400px] w-full grid grid-cols-2 bg-white overflow-hidden">
              <div className="relative w-full">
                <div className="absolute w-full h-full bg-[#0A3255] opacity-60 z-10 hover:opacity-90  duration-300" />
                <Image
                  src="/assets/home/probanner2.jpg"
                  alt="promotion2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-white w-full hover:w-[105%] hover:-translate-x-4 right-0 duration-300 z-10 ">
                <div className="p-5 h-full justify-center flex flex-col text-center ">

                  <p className="text-2xl font-bold">Title</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, voluptates.</p>
                  <button className="px-4 py-2 hover:font-medium">read more ..</button>
                </div>
              </div>
            </div>

            <div className="h-[400px] w-full  relative">
              <div className="absolute w-full h-full bg-[#0A3255] opacity-60 z-10 hover:opacity-90  duration-300" />
              <Image
                src="/assets/home/promotion4.jpg"
                alt="promotion4"
                layout="fill"
                objectFit="cover"
              />
            </div>

          </div>

        </section>

        <section id="residence" className="w-full h-full flex justify-center py-4 relative ">'
          <div className="w-full h-[725px] relative">
            <Image
              src="/assets/home/LOUNG1.jpg"
              alt="LOUNG1"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="max-w-7xl w-full h-[725px]  absolute flex justify-center items-center">
            <div className="bg-white/90 w-fit h-fit flex justify-center p-10 md:p-20 items-center backdrop-blur rounded-tr-3xl rounded-bl-3xl">
              <div className="text-center">
                <p className="font-serif italic">Explore your life</p>
                <h1 className="text-4xl font-bold text-[#0A3255] mb-4">THE OLD SIAM RESIDENCE</h1>
                <p className="text-slate-800 max-w-md mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate rem nostrum voluptatem, libero ab fugit sapiente aut omnis ullam illo delectus totam magni beatae</p>
                <button className="text-sm px-4 py-2 border border-[#0A3255] hover:bg-[#0A3255] hover:text-white">Discover More</button>
              </div>
            </div>

          </div>
        </section>

        <section id="shops" className="w-full h-[725px] flex justify-center py-4 relative bg-white">

        </section>

      </div>
    </>
  )
}
