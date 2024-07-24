"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '../../../components/ui/card-hover-effect'
import { SiDrizzle, SiFirebase, SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

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
            text: "MySQL",
            Icon: SiMysql,
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
            text: "Firebase",
            Icon: SiFirebase,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
        {
            text: "Typescript",
            Icon: SiTypescript,
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs,
        },
        {
            text: "Prisma",
            Icon: SiPrisma,
        },
        {
            text: "Drizzle",
            Icon: SiDrizzle,
        }
    ]

  return (
    <div className=' max-w-5xl mx-auto px-8'>
        <Title text="Skills 🔪" className='flex flex-col items-center justify-center text-center -rotate-6'/>

        <HoverEffect  items={skills}/>
    </div>
  )
}
