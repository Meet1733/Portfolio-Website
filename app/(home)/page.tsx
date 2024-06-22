import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
import { TracingBeam } from '@/components/ui/tracing-beam'

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      {/* <TracingBeam className="px-6 z-10 max-w-max"> */}
        <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
          <div className='max-w-7xl mx-auto p-5'>
            <Navbar/>
            <HeroSection/>
          </div>

          <div className=' h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:-bottom-[50px] w-full'>
          </div>
        </div>

        <div className=' max-w-7xl mx-auto p-5 mt-20'>
          <Skills/>
          <Project/>
          <Footer/>
        </div>
      {/* </TracingBeam> */}
    </div>
  )
}
