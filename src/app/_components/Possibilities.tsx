import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Possibilities = () => {
    return (
        <div className='layout text-white pt-[64px]' >
            <div className="flex flex-col items-center justify-center">
                {/*  */}
                <div className="w-[80%] flex flex-col items-center justify-center">
                    <h1 className='text-[50px] text-center font-play_fair'>Mall Of: Endless Possibilities</h1>
                    <p className='mt-[13px] w-[75%] text-center font-inter' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="relative w-full mt-[59px] h-[502px] ">
                        <Image fill alt='video' src={'/video.png'} />
                        <div className="absolute left-[45%] top-[35%] h-[76px] w-[76px] bg-white rounded-full flex items-center justify-center">
                            <Image alt='play' src={'/play.svg'} className='ml-3' width={34} height={29} />
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="mt-[22px] pt-[37px] pb-[50px] pl-[32px] bg-[#283211] rounded-[25px] flex items-center justify-between pr-5">
                    <div className="flex flex-col gap-5 w-[80%]">
                        <p className='font-inter text-[13px] ' >25 SR/GUEST</p>
                        <h1 className='text-[30px] font-play_fair mt-[25px] '>Get your General Access Ticket</h1>
                        <p className='font-inter text-[15px] mt-[17px]' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text e</p>
                    </div>
                    <FaArrowRight size={35} color='white' className='opacity-45' />
                </div>
            </div>


        </div>
    )
}

export default Possibilities
