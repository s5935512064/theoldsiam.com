import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <div className="fixed h-fit  w-full  top-0 z-30 flex flex-col justify-center items-center bg-white  ">

                <div className="max-w-7xl w-full h-fit flex justify-between items-center px-4 md:px-10 relative ">
                    <div className="w-28">

                    </div>
                    <div className="w-28 relative">
                        <Image
                            src="/assets/OSP-Logo.png"
                            alt="logo_theOldSiam"
                            layout="responsive"
                            width={100}
                            height={70}
                            objectFit="contain"
                            className="cursor-pointer scale-110" />
                    </div>
                    <div className="inline-flex">
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

                    <p className="font-semibold text-slate-900 link link-underline link-underline-black">หน้าแรก</p>
                    <p>โปรโมชั่น</p>
                    <p>ร้านค้า</p>
                    <p>ไดเรกทอรี่</p>
                    <p>ติดต่อเรา</p>

                </div>

                {/* <div className="h-20 w-20 rounded-full border border-white/0 hover:border-white duration-500 flex items-center cursor-pointer">
                    <p className=" text-white ml-4 font-light hover:scale-125 duration-150">MENU</p>
                </div> */}




            </div>
        </>
    );
}

export default Navbar;