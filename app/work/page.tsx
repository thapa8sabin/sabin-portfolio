'use client'

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderButton from "@/components/WorkSliderButton"

const projects: ProjectItem[] = [
    {
        num: '01',
        category: 'Superstack',
        title: 'BizMessage',
        description: `Text message platform trusted by thousands of businesses just like yours. With Biz Message System, sending important updates, promotions, and staying connected is simpler than ever. Enjoy seamless communication that's fast, reliable, and effective. Let's start messaging.`,
        stacks: ["DDD", "Angular", "hyperf", "Symfony", "MinIO", "Docker", "Kubernetes", "redis", "Kafka", "Jenkins", "GitLab"],
        image: '/assets/work/thumb1.png',
        live: 'https://www.bizmessages.com/',
        github: ''
    },
    {
        num: '02',
        category: 'Superstack',
        title: 'FeeMS',
        description: 'A banking application designed for officials to efficiently and conveniently manage Fee Management Services (FeeMS) across Mobile Banking, Demat accounts, Lockers, and Internet Banking.',
        stacks: ["DDD", "Angular", "hyperf", "Symfony", "MinIO", "Docker", "Kubernetes", "redis", "rabbitMQ", "Jenkins", "GitLab", "MySQL"],
        image: '/assets/work/f1soft.png',
        live: '',
        github: ''
    },
    {
        num: '03',
        category: 'Superstack',
        title: 'Secured Transaction Registry Office',
        description: 'This is the site for searching for notices of security interests in movable property and for registering notices of security interests in movable property.',
        stacks: ["DDD", "Angular", "hyperf", "Symfony", "MinIO", "Docker", "Kubernetes", "redis", "Jenkins", "GitLab", "MySQL"],
        image: '/assets/work/stro.png',
        live: 'https://stro.org.np/#/',
        github: ''
    },
    {
        num: '04',
        category: 'Backend',
        title: 'Nepal Education Portals',
        description: 'An education-based online platform where students can interact with colleges and different education facility providers like scholarship providers to know, apply and process for their desired courses.',
        stacks: ["Laravel", "Vuejs", "Docker", "GitLab", "MySQL"],
        image: '/assets/work/nep.png',
        live: 'https://nepaleducationportal.com/',
        github: ''
    },
    {
        num: '04',
        category: 'Backend',
        title: 'Nepguide',
        description: 'Based on the property management system, the application allows travellers to book hotels, vehicles & planes to reach their destiny.',
        stacks: ["Laravel", "CodeIgniter", "GitLab", "MySQL"],
        image: '/assets/work/computalaya.png',
        live: '',
        github: ''
    },
    {
        num: '05',
        category: 'Fullstack',
        title: 'Pagoda Ayurveda',
        description: 'N/A',
        stacks: ["Wordpress", "GitLab", "MySQL"],
        image: '/assets/work/computalaya.png',
        live: 'https://pagodaayurveda.com/',
        github: ''
    },
    {
        num: '06',
        category: 'Backend',
        title: 'Impact Energy Nepal',
        description: 'N/A',
        stacks: ["Laravel", "GitLab", "React", "MySQL"],
        image: '/assets/work/computalaya.png',
        live: 'https://impactenergynepal.com/',
        github: ''
    },
    {
        num: '06',
        category: 'Fullstack',
        title: 'Hangover Nepal',
        description: 'N/A',
        stacks: ["Virtuemart", "GitLab", "MySQL", "Google maps"],
        image: '/assets/work/computalaya.png',
        live: 'https://dev.hangovernepal.com/',
        github: ''
    },
    {
        num: '07',
        category: 'Wordpress plugin',
        title: 'Exportfeed',
        description: 'Etsy Marketplace Integration for WooCommerce: Real-time Order, Inventory and Product Sync. Streamline your e-commerce operations with seamless product, order, and inventory sync between WooCommerce and Etsy. Simplify product import and export, ensuring accurate stock levels and efficient order management.',
        stacks: ["Virtuemart", "Wordpress", "MySQL", "Google Merchants", "Etsy", "Amazon MWS"],
        image: '/assets/work/exportfeed.png',
        live: 'https://wordpress.org/plugins/exportfeed-for-woocommerce-product-to-etsy/',
        github: ''
    },
    {
        num: '08',
        category: 'Ecommerce',
        title: 'Gold Durbar',
        description: 'Online e-commerce for jewellery store',
        stacks: ["Zencart", "MySQL"],
        image: '/assets/work/smart.png',
        live: 'https://www.instagram.com/golddurbar/',
        github: ''
    },
    {
        num: '09',
        category: 'Backend',
        title: 'BKFK',
        description: 'An online portal for young enterpreneur',
        stacks: ["Joomla", "MySQL"],
        image: '/assets/work/smart.png',
        live: 'https://www.bykidsforkids.co/',
        github: ''
    },
]


const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper: any): void => {
        const currentIndex: number = swiper.activeIndex;
        setProject(projects[currentIndex])
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4 } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <span className="text-accent text-[42px] font-extralight">{project.title}</span>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            {/* stacks */}
                            <ul className="flex flex-wrap gap-4">
                                {project.stacks.map((item: string, index) => {
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
                                                    <Image src={project.image} alt='' fill className="object-cover" />
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