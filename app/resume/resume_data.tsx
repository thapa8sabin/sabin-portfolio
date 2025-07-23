import Link from 'next/link'
import {
    FaHtml5,
    FaPhp,
    FaJs,
    FaDocker,
    FaJenkins,
    FaNodeJs,
    FaAngular,
    FaJira
} from 'react-icons/fa'

import {
    SiBootstrap,
    SiNextdotjs,
    SiScrumalliance,
    SiKubernetes,
    SiRabbitmq,
    SiApachekafka,
    SiRedis,
    SiMysql,
} from "react-icons/si"


// about data
export const about: About = {
    title: 'About me',
    description: `I'm a web developer and software engineer with close to ten years of experience building robust, full-stack web applications. I specialize in PHP, Symfony, and Angular, and I’ve led cross-functional teams to deliver impactful projects from end to end. Over the years, I’ve also grown deeply skilled in modern DevOps practices—working with Docker, Kubernetes via Rancher, Git, and Jenkins to streamline deployment and ensure scalable, reliable systems.
    I’m always looking for smarter ways to automate workflows, solve challenging problems, and build tech that makes a real difference. Remote collaboration comes naturally to me, and I'm excited to contribute to teams that value clean architecture, thoughtful design, and continuous learning.
    `,
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Sabin Thapa'
        },
        {
            fieldName: 'Phone',
            fieldValue: <Link href={"tel://9779748263456"} target='_blank'>(+977) 9748 26 3456</Link>,
        },
        {
            fieldName: 'Whatsapp',
            fieldValue: <Link href={"https://wa.me/9779748263456"}> Text Me</Link>
        },
        {
            fieldName: 'Email',
            fieldValue: <Link href={"mailto://thapasabin8@gmail.com"}>thapasabin8@gmail.com</Link>
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Available'
        },
        {
            fieldName: 'Languages',
            fieldValue: 'Nepali, Hindi & English'
        },
    ]
}

// experience data
export const experience: Experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experiences',
    description: 'With nearly a decade of hands-on experience in web development and software engineering, I have delivered scalable, high-performance applications across diverse industries. I’ve led cross-functional teams to execute complex projects, combining strong technical leadership with deep expertise in full-stack technologies like PHP, Symfony, and Angular. My DevOps skill set includes containerization with Docker, orchestration using Kubernetes (via Rancher), and automation with Git and Jenkins, enabling reliable CI/CD workflows. I’m passionate about solving problems, optimizing systems, and building impactful digital products—especially in remote, collaborative environments.',
    items: [
        {
            company: 'F1Soft International Pvt. Ltd.',
            position: 'Software Engineer',
            duration: '2021 - 2024'
        },
        {
            company: 'Computalaya Networks Pvt. Ltd.',
            position: 'Software Engineer',
            duration: '2018 - 2020'
        },
        {
            company: 'Proshore Nepal Pvt. Ltd.',
            position: 'Wordpress Plugin Developer',
            duration: '2016 - 2018'
        },
        {
            company: 'Smart Solutions Pvt. Ltd.',
            position: 'Software Developer',
            duration: '2014 - 2016'
        }
    ]
}

// education data
export const education: Education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: `I hold a Bachelor's degree in Bsc. Hons In Computer Science, which laid the foundation for my career in software engineering and full-stack development. Additionally, I'm a Certified Scrum Developer (CSD) through the Scrum Alliance, demonstrating my commitment to agile best practices and collaborative, team-driven development.`,
    items: [
        {
            insitution: 'Scrum Alliance',
            degree: 'Certified Scrum Developer',
            duration: 'Early 2023'
        },
        {
            insitution: 'Softwarica College of IT & E-Commerece',
            degree: 'BSc. Hons in Computer Science',
            duration: '2012 - 2015'
        }
    ]
}

// skills data
export const skills: Skill = {
    title: 'My Skills',
    description: 'I excel across 12+ technology stacks, combining deep proficiency in full-stack development, DevOps, and automation. With strong command over PHP, Symfony, Angular, and JavaScript, I build responsive, data-driven applications. I’m also highly skilled in Docker, Kubernetes (Rancher), Git, Jenkins, and CI/CD workflows—ensuring seamless deployment and scalable infrastructure. My experience leading cross-functional teams and scripting for workflow automation reinforces my ability to deliver end-to-end digital solutions in modern development environments.',
    skillLists: [
        {
            icons: <FaHtml5 />,
            name: 'HTML 5'
        },
        {
            icons: <FaPhp />,
            name: 'PHP'
        },
        {
            icons: <FaDocker />,
            name: 'Docker'
        },
        {
            icons: <FaJenkins />,
            name: 'Jenkins'
        },
        {
            icons: <FaJs />,
            name: 'Javascript'
        },
        {
            icons: <FaNodeJs />,
            name: 'node.js'
        },
        {
            icons: <FaAngular />,
            name: 'Angular Js & Cli'
        },
        {
            icons: <SiBootstrap />,
            name: 'Bootstrap'
        },
        {
            icons: <SiNextdotjs />,
            name: 'Next.js'
        },
        {
            icons: <SiScrumalliance />,
            name: 'Scrum'
        },
        {
            icons: <FaJira />,
            name: 'jira'
        },
        {
            icons: <SiKubernetes />,
            name: 'k3s'
        },
        {
            icons: <SiRabbitmq />,
            name: 'rabbitMQ'
        },
        {
            icons: <SiApachekafka />,
            name: 'Apache Kafka'
        },
        {
            icons: <SiRedis />,
            name: 'Redis'
        },
        {
            icons: <SiMysql />,
            name: 'MySQL'
        },
    ]
}