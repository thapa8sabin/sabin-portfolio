'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkedAlt,
} from "react-icons/fa"
import { motion } from "framer-motion"

const info: Info[] = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+977) 9748 26 3456",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "thapasabin8@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Balkot, Bhaktapur, Nepal",
    },
]


const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4 } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia et optio, unde illo dicta tempore porro nulla labore sunt quaerat aliquam, quam aperiam nemo. Doloribus praesentium itaque ut obcaecati ad?
                            </p>
                            {/* inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="First name" />
                                <Input type="lastname" placeholder="Last name" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="Phone number" />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">Solution Architect</SelectItem>
                                        <SelectItem value="mst">Build Api</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* textarea */}
                            <Textarea className="h-[200px]" placeholder="Type your message here..." />

                            {/* button */}
                            <Button className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {
                                info.map((item: Info, index: number) => {
                                    return (
                                        <li
                                            key={index}
                                            className="flex items-center gap-6"
                                        >
                                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                                <div className="text-[28px]">{item.icon}</div>
                                            </div>
                                            <div className="flex-1 ">
                                                <p className="text-white/60">{item.title}</p>
                                                <h3 className="text-xl">{item.description}</h3>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact