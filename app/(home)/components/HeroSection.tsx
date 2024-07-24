import Link from 'next/link'
import React from 'react'
import { MovingBorderBtn } from '../../../components/ui/moving-border'
import Title from './Title'

export default function HeroSection() {
  return (
    <div className=' min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
        <div className=' space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold'>
                Welcome to My Profile 👋
                <br/> <span className='underline underline-offset-8 decoration-green-500'>{"I'm Meet."}</span>
            </h1>

            <p className='md:w-[42rem] text-lg text-gray-300'>
                {"I am a Fullstack Developer from India, passionate about creating modern web applications that users love. With a knack for both front-end and back-end development, I strive to build seamless and engaging digital experiences."}
            </p>

            <div>
                <Link href={"https://drive.google.com/file/d/1ZD1ctELiGwETk64FJ9sBDtZe6llhZLFj/view"} target='_blank' className='inline-block group mr-5'>
                    <Title text="Resume 📄"/>
                </Link>
                <Link href={"mailto:meetharsoda5@gmail.com"} className='inline-block group'>
                    <Title text="Contact Me 📭"/>
                </Link>
            </div>
            
        </div>
        
        <div className='relative'>
            <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                <div className='flex gap-3 translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                    <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                </div>
                <div className='flex gap-3 -translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                    <div className='w-32 h-32 rounded-full bg-green-500'></div>
                </div>
                <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
            </div>

            <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
                <MovingBorderBtn borderRadius='0.5rem' className=' p-3 font-semibold'>
                    <Link href={"https://wa.me/+918758451703"} target='_blank'>
                        📢 Available for Work
                    </Link>
                    {/* <p>
                        
                    </p> */}
                </MovingBorderBtn>
            </div>
        </div>
    </div>
  )
}
