import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20 border-t border-t-white text-white' >
            <div className="mt-[50px] layout">
                <div className="flex items-center justify-between">
                    <h1 className='text-[50px] font-play_fair' >Join us for an <br /> unforgettable experience</h1>

                    <div className="flex flex-col gap-5">
                        <p className='text-[13px] font-inter' >DOWNLOAD THE GROVES APP</p>
                        <div className="flex items-center gap-5">
                            <Image src={"/apple.svg"} alt='apple' width={148} height={49} />
                            <Image src={"/google.svg"} alt='apple' width={169} height={49} />
                        </div>
                    </div>
                </div>

                <div className="w-[70%] font-inter text-[13px] mt-[74px]">
                    <div className="flex items-start justify-between">
                        <div className="">
                            <p>LOCATION</p>
                            <p className='mt-[17px]' >Al-Hizam Park<br /> Al-Semairi, Yanbu Al Bahr 46455<br /> Riyadh Saudi Arabia</p>
                        </div>

                        <div className="">
                            <p>WORKING HOURS</p>
                            <p className='mt-[17px]' >
                                Sun until Thurs: 4:00PM<br /> Fri & Sat: 2:30PM
                            </p>
                            <p className='mt-[17px]' >
                                Gates Close at:<br /> Sat until Wed: 12:00AM<br /> Thu & Fri: 12:30AM
                            </p>
                        </div>


                        <div className="">
                            <p>GUEST SERVICE CALL</p>
                            <p className='mt-[17px]' >
                            cc@thegroves-sa.com<br/> 920001672 
                            </p>
                            <p className='mt-[17px]' >
                            +966556631309
                            </p>
                        </div>
                    </div>

                </div>


                <div className="mt-[73px]">
                    <div className="flex items-center justify-between">
                        <Image src="/logo.png" alt="logo" width={220} height={50} />
                        <div className="flex items-center gap-10">
                            <Image src="/tiktok.svg" alt="logo" width={26} height={30} />
                            <Image src="/instagram.svg" alt="logo" width={26} height={30} />
                            <Image src="/x.svg" alt="logo" width={26} height={30} />
                            <Image src="/snapchat.svg" alt="logo" width={26} height={30} />
                        </div>
                    </div>
                </div>

                <div className="mt-[52px] pb-[62px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <p className='font-inter text-[15px]' >Terms & Conditions</p>
                            <p className='font-inter text-[15px]' >Privacy Policy</p>
                            <p className='font-inter text-[15px]' >©2023 The Groves for Entertainment</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Image src={"/visa.svg"} alt='card' width={43} height={14} />
                            <Image src={"/mastercard.png"} alt='card' width={31} height={31} />
                            <Image src={"/express.png"} alt='card' width={26} height={26} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
