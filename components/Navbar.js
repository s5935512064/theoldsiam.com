import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const listMenu = [
    { name: "หน้าแรก", href: "/" },
    { name: "โปรโมชั่น", href: "#" },
    { name: "ร้านค้า", href: "#" },
    { name: "ไดเรกทอรี่", href: "#" },
    { name: "ติดต่อเรา", href: "#" },
]

const Navbar = () => {
    const router = useRouter();
    return (
        <>
            <div className="fixed h-fit  w-full  top-0 z-30 flex flex-col justify-center items-center bg-white  ">

                <div className="max-w-7xl w-full h-fit flex justify-between items-center px-4 md:px-10 relative ">
                    <div className="w-28">

                    </div>
                    <div className="w-32 relative ">
                        <Image
                            src="/assets/OSP-Logo.png"
                            alt="logo_theOldSiam"
                            layout="responsive"
                            width={100}
                            height={70}
                            objectFit="contain"
                            className="cursor-pointer scale-110" />
                    </div>
                    <div className="w-28 flex justify-end flex-col items-end md:flex-row">
                        <div className="w-7 h-7 relative mr-1">
                            <Image
                                src="/assets/en.svg"
                                alt="flag"
                                layout="fill"
                                objectFit="contain"
                            />

                        </div>

                        <select
                            name="changeLocal"

                            defaultValue="en"
                            className=" font-light text-sm "
                        >
                            <option className="text-black " value="en">
                                English
                            </option>
                            <option className="text-black  " value="th">
                                ภาษาไทย
                            </option>
                        </select>
                    </div>
                </div>


                <div className="hidden h-10 max-w-7xl px-4 md:px-10 w-full  md:flex items-center justify-center  gap-6 text-slate-500 font-light">

                    {listMenu.map((item, index) => (
                        <Link key={index} href={item.href}>


                            <button className={classNames(router.pathname === item.href ? "font-semibold text-slate-900 link-underline-active" : "font-light", " link link-underline link-underline-black")}>
                                {item.name}
                            </button>
                        </Link>
                    ))}
                </div>

                {/* <div className="h-20 w-20 rounded-full border border-white/0 hover:border-white duration-500 flex items-center cursor-pointer">
                    <p className=" text-white ml-4 font-light hover:scale-125 duration-150">MENU</p>
                </div> */}




            </div>
        </>
    );
}

export default Navbar;