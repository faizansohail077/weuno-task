import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const Header = () => {
    return (
        <div className="pt-6 ">
            <div className='layout' >
                <div className="flex items-center justify-between">
                    <Image src="/logo.png" alt="logo" width={220} height={50} />
                    <div className="flex items-center gap-5">
                        <Image src="/tiktok.svg" alt="logo" width={19} height={21} />
                        <Image src="/instagram.svg" alt="logo" width={19} height={21} />
                        <Image src="/x.svg" alt="logo" width={19} height={21} />
                        <Image src="/snapchat.svg" alt="logo" width={19} height={21} />
                        <Button className='w-[142px]' title='Log in' />
                        <div className="flex items-center gap-2 text-white">
                            <Image src="/arrow.svg" alt="logo" width={19} height={21} />
                            <Image src="/country.png" alt="logo" width={33} height={22} />
                            <p>English</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-white  border-b border-b-white mt-5">
                <div className="layout flex items-center justify-between py-2">
                    {["Dine with us", "Plan your visit", "Events", "View grove map", "our story", "contact us"].map((item, index) => {
                        return (
                            <p key={index} className="text-white text-lg font-inter">{item.toUpperCase()}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header
