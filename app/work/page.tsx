'use client'

import { motion } from "framer-motion"
import  React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderButton from "@/components/WorkSliderButton"

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit facere magni tenetur provident quos dicta asperiores ex! Excepturi dicta repellat maxime illum alias hic veniam laudantium delectus.',
        stacks: [ "Html 5", "Css 3", "Javascript" ],
        image: '/assets/work/thumb1.png',
        live: '',
        github: ''
    },
    {
        num: '02',
        category: 'fullstack',
        title: 'project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit facere magni tenetur provident quos dicta asperiores ex! Excepturi dicta repellat maxime illum alias hic veniam laudantium delectus.',
        stacks: [ "Html 5", "Css 3", "Javascript" ],
        image: '/assets/work/thumb2.png',
        live: '',
        github: ''
    },
    {
        num: '03',
        category: 'frontend',
        title: 'project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit facere magni tenetur provident quos dicta asperiores ex! Excepturi dicta repellat maxime illum alias hic veniam laudantium delectus.',
        stacks: [ "Next Js", "Tailwind" ],
        image: '/assets/work/thumb1.png',
        live: '',
        github: ''
    },
]


const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }
    return (
        <motion.section 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4 }}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            {/* stacks */}
                            <ul className="flex gap-4">
                                {project.stacks.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item}
                                            {/* remove comma in the end */}
                                            {index !== project.stacks.length - 1 && ','}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project link */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project link */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {
                                projects.map((project, index) => {
                                    return (
                                        <SwiperSlide key={index} className='w-full'>
                                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                                {/* overlay */}
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                                {/* image */}
                                                <div className="relative w-full h-full">
                                                    <Image src={project.image} alt='' fill className="object-cover"/ >
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            {/* slider buttons */}
                            <WorkSliderButton />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>   
    )
}

export default Work