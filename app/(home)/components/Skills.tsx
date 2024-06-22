"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '../../../components/ui/card-hover-effect'
import { SiFirebase, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills() {

    const skills = [
        {
            text: "React",
            Icon: SiReact,
        }, 
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "Firebase",
            Icon: SiFirebase,
        },
        {
            text: "Postgres",
            Icon: SiPostgresql,
        },
        {
            text: "Mongodb",
            Icon: SiMongodb,
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
        {
            text: "Typescript",
            Icon: SiTypescript,
        },
    ]

  return (
    <div className=' max-w-5xl mx-auto px-8'>
        <Title text="Skills 🔪" className='flex flex-col items-center justify-center text-center -rotate-6'/>

        <HoverEffect  items={skills}/>
    </div>
  )
}
