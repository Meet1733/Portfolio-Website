import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import {SiCodeforces, SiCodechef, SiLeetcode, SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar({className}: {className?:string}) {

    const socials = [
        {
            Link: "https://www.linkedin.com/in/meet1733/",
            Label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            Link: "https://github.com/Meet1733",
            Label: "Github",
            Icon: SiGithub,
        },
        {
            Link: "https://leetcode.com/Meet1733/",
            Label: "Leetcode",
            Icon: SiLeetcode ,
        },
        {
            Link: "https://codechef.com/users/meet1733",
            Label: "Codechef",
            Icon: SiCodechef  ,
        },
        {
            Link: "https://codeforces.com/profile/Meet1733",
            Label: "Codeforces",
            Icon: SiCodeforces,
        },
        {
            Link: "https://x.com/harsoda_meet",
            Label: "X",
            Icon: SiX,
        },
    ]

  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down' , className)}>

        <Link href="/">
            <h1 className=' text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Meet Harsoda 👨‍💻</h1>
        </Link>

        <div className='flex items-center gap-5'>
            {socials.map((social,index) => {
                const Icon = social.Icon;
                return <Link href={social.Link} key={index} aria-label={social.Label} target='_blank'>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                </Link>
            })}
        </div>
    </nav>
  )
}