import { Button } from '@/components'
import Image from 'next/image'
import React from 'react'

const Place = () => {
    return (
        <div className='layout text-white pt-[64px]' >
            <div className="flex flex-col items-center justify-center">
                {/*  */}

                <div className="w-full flex flex-col  justify-center">

                    <div className="flex items-center gap-5">
                        <Image src={'/place.png'} alt='place' width={577} height={553} />
                        <div className="flex flex-col gap-5 w-full">
                            <p className='font-inter text-[13px] ' >EXPERIENCE THE GROVES</p>
                            <h1 className='text-[50px] font-play_fair mt-[24px] '>Find your place</h1>
                            <p className='font-inter text-[15px] mt-[17px]' >Our interactive map will show you the way to the <br/>shops and restaurants that you want to see.</p>
                            <Button className='mt-[49px] w-[232px] h-[55px]' title='Open the Map' icon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place
