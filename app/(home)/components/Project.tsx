"use client"
import React from 'react'
import { SiChakraui, SiCss3, SiExpress, SiFigma, SiFirebase, SiGooglecloud, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiReactquery, SiSolana, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { MovingBorderBtn } from '@/components/ui/moving-border'

export default function Project() {

  const projects = [
    {
        title: "LabelMate",
        tech: [SiNextdotjs, SiTypescript, SiSolana, SiPostgresql, SiPrisma, SiFirebase],
        link: "https://github.com/Meet1733/LabelMate",
        cover: "/labelmate.png",
        background: "bg-indigo-500",
    },
    {
        title: "YourPlaces",
        tech: [SiReact, SiNodedotjs, SiExpress,SiMongodb, SiFirebase],
        link: "https://yourplaces1733.netlify.app/",
        cover: "/yourplaces.png",
        background: "bg-green-500",
    },
    {
        title: "CodeAlgo",
        tech: [SiReact, SiNodedotjs, SiExpress,SiMongodb,SiChakraui],
        link: "https://codealgo.netlify.app/home",
        cover: "/codealgo.png",
        background: "bg-green-500",
    },
    {
        title: "Omkarz",
        tech: [SiReact, SiCss3, SiFigma],
        link: "https://omcarz.github.io/Omkarz/",
        cover: "/omkarz.png",
        background: "bg-green-500",
    },
  ]  

  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text="Projects 🎨" className='flex flex-col items-center justify-center text-center rotate-6'/>

        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project,index) => {
                return (
                    <Link href={project.link} key={index} target='_blank'>
                        {/* <MovingBorderBtn> */}
                        <BackgroundGradient className="rounded-[22px] p-4 sm:p-5 bg-white dark:bg-zinc-900">
                        {/* <div className={cn("p-5 rounded-md", project.background)}> */}
                            <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                                <div className='space-y-5'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-5'>
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className='w-8 h-8' key={index}/>
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        {/* </div> */}
                        </BackgroundGradient>
                        {/* </MovingBorderBtn> */}
                    </Link>
                )
            })}
        </div>
    </div>
  )
}
