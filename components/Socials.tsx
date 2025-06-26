import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/thapa8sabin" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sabin-thapa/" },
    { icon: <FaTimes />, path: "https://x.com/thapa_sabin" },
]

const Socials = () => {
    return (
        <div className="flex gap-6">
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                    >
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials