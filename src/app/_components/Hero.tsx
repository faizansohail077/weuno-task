"use client"
import { Button } from '@/components'
import React, { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <>
            <div className="bg-black/50 h-[80%] z-10  absolute w-[50vw]" />

            <div className='layout h-[80%]' >
                <div className="grid grid-cols-2 h-full ">
                    <div className="col-span-1 relative text-white  h-full flex flex-col  justify-center">
                        <Carousel
                            className="w-full h-full flex flex-col justify-center z-50"
                            setApi={(api) => {
                                api?.on('select', () => {
                                    setActiveSlide(api.selectedScrollSnap())
                                })
                            }}
                        >
                            <CarouselContent className='z-50' >
                                {[1,2,3,4].map((slide) => (
                                    <CarouselItem key={slide}>
                                        <div className="text-white  h-full flex flex-col  justify-center">
                                            <p className='font-inter text-[13px] z-50' >KHAWAJA YANNI</p>
                                            <h1 className='font-play_fair text-[68px] z-50 md:leading-[76px] mt-[18px]' >The new <br /> era of luxury</h1>
                                            <p className='text-[15px] mt-[27px] z-50' >Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum.</p>
                                            <Button className='mt-[45px] z-50 !w-[299px] h-[55px]' title='Book reservation now' icon />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <div className="absolute bottom-5 right-5 -translate-x-1/2 flex gap-2">
                                {[1,2,3,4].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setActiveSlide(index)
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all ${activeSlide === index
                                            ? 'bg-white w-4'
                                            : 'bg-white/50'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </Carousel>
                    </div>
                  

                </div>
            </div>
        </>
    )
}

export default Hero
