"use client"
import React from 'react'
import { SiChakraui, SiClerk, SiCss3, SiDrizzle, SiExpress, SiFigma, SiFirebase, SiGooglecloud, SiGooglegemini, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiReactquery, SiSolana, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { BackgroundGradient } from '@/components/ui/background-gradient'

export default function Project() {

  const projects = [
    {
        title: "LabelMate",
        tech: [SiNextdotjs, SiTypescript, SiSolana, SiPostgresql, SiPrisma, SiFirebase, SiTailwindcss],
        link: "https://labelmate.vercel.app/",
        cover: "/labelmate.png",
        background: "bg-indigo-500",
    },
    {
        title: "InterviewAI",
        tech: [SiNextdotjs, SiGooglegemini ,SiPostgresql, SiDrizzle, SiClerk, SiTailwindcss],
        link: "https://interview-ai-vert.vercel.app/",
        cover: "/interviewai.png",
        background: "bg-green-500",
    },
    {
        title: "YourPlaces",
        tech: [SiReact, SiNodedotjs, SiExpress,SiMongodb, SiFirebase],
        link: "https://yourplaces1733.netlify.app/",
        cover: "/yourplaces.png",
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
                        <BackgroundGradient className="rounded-[22px] p-4 sm:p-5 bg-white dark:bg-zinc-900">
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
                        </BackgroundGradient>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}
