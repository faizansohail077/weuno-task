import { Button } from '@/components'
import React from 'react'

const General = () => {
    return (
        <div className='layout text-white pt-[105px]' >
            <div className="flex flex-col items-center justify-center">
                {/*  */}
                <div className="w-full flex flex-col i">
                    <h1 className='font-play_fair text-[50px] text-left' >Book General Access ticket and <br/> enjoy the attractions for free</h1>
                    <Button className='mt-[38px] !w-[349px] h-[55px]' title='Book General Access Ticket' icon/>
                    <div className="mt-[63px]">
                        123
                    </div>
                </div>
            </div>
        </div>
    )
}

export default General
