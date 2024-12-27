import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Button = ({ icon = false,className ,title}: {title:string, icon?: boolean,className?:string }) => {
    return (
        <div className={`font-inter cursor-pointer bg-gradient-to-b from-customGold1 to-customGold2 text-white w-full h-[48px] flex items-center justify-center rounded-[16px] gap-5 ${className}`} >
            <p>{title}</p>
            {icon && <FaArrowRight size={20} color='white' className='opacity-45' />}
        </div>
    )
}

export default Button
