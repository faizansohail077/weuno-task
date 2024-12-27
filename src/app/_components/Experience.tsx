import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const data = [
    { id: 0, img: "/experience1.png", title: "Vida Vera" },
    { id: 1, img: "/experience2.png", title: "Zama Zulu" },
    { id: 2, img: "/experience3.png", title: "Khawaja Yanni" },
    { id: 3, img: "/experience4.png", title: "Yamagata" },
]

const Experience = () => {
    return (
        <div className='layout text-white pt-[64px]' >
            <div className="flex flex-col items-center justify-center">
                {/*  */}
                <div className="w-[80%] flex flex-col items-center justify-center">
                    <h1 className='text-[50px] text-center font-play_fair'>Experience the Finest Cuisine</h1>
                    <p className='mt-[20px] w-[80%] text-center font-inter' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>
                <div className="w-[87%]">
                    <div className="mt-[71px] grid grid-cols-1 gap-[27px] md:grid-cols-2">
                        {data.map((item, index) => (
                            <div key={index} className="rounded-[32px] w-[530px] p-3 bg-[#283211] flex flex-col items-center justify-center">
                                <Image src={item.img} alt="img" width={508} height={304} />
                                <div className="px-[38px] w-full flex items-center justify-between mt-[15px] mb-[45px]">
                                    <div className="flex flex-col gap-[15px]">
                                        <h1 className='mt-[20px] font-play_fair text-[30px]'>{item.title}</h1>
                                        <div className="bg-[#AD8749] rounded-full font-inter text-white py-1 px-5 text-[13px]">
                                            <p>100 SR PER GUEST</p>
                                        </div>
                                    </div>
                                    <FaArrowRight size={35} color='white' className='opacity-45' />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience
