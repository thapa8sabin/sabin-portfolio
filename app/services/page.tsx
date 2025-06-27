'use client'

import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"
import Link from "next/link"

const services: SericeItem[] = [
    {
        num: "01",
        title: "Web Developer",
        description: "Covers frontend and backend development, including frameworks like Symfony, Angular, hyperf, redis, MySQL, NextJs etc. API integrations and data-driven web solutions",
        href: ""
    },
    {
        num: "02",
        title: "Software Engineering",
        description: "End-to-end software development lifecycle expertise. Building robust, secure, and high-performance applications. Problem-solving complex technical challenges",
        href: ""
    },
    {
        num: "03",
        title: "DevOps & CI/CD",
        description: "Docker containerization, Kubernetes orchestration, and Rancher management. Git, Jenkins, and automated deployment pipelines. Optimizing development workflows for efficiency and reliability.",
        href: ""
    },
    {
        num: "04",
        title: "Technical Consulting",
        description: "Advising on software architecture, system design, and technology selection. Code review, best practices implementation, and performance optimization. Guiding businesses in technical decision-making",
        href: ""
    },
    {
        num: "05",
        title: "Remote Engineering & Team Leadership",
        description: "Managing and collaborating with cross-functional teams remotely. Leading software engineering projects with Agile methodologies. Streamlining communication and project delivery in distributed environments",
        href: ""
    },
    {
        num: "06",
        title: "Application Modernization & Optimization",
        description: "Upgrading legacy applications to modern technology stacks. Performance tuning and optimization for scalable software solutions. Implementing best practices for efficient code and infrastructure.",
        href: ""
    },
    {
        num: "07",
        title: "Automation & Scripting",
        description: "Developing custom scripts for workflow automation. API automation, task scheduling, and process optimization. Leveraging JavaScript and other technologies for automation",
        href: ""
    }
]

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service: SericeItem, index: number) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/* description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services