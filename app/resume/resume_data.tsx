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
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae reprehenderit necessitatibus! Blanditiis laboriosam voluptatibus dolorem itaque voluptas perspiciatis.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Sabin Thapa'
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+977) 9748 26 3456',
        },
        {
            fieldName: 'Whatsapp',
            fieldValue: 'call:9748263456'
        },
        {
            fieldName: 'Email',
            fieldValue: 'thapasabin8@gmail.com'
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
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae reprehenderit necessitatibus! Blanditiis laboriosam voluptatibus dolorem itaque voluptas perspiciatis.',
    items: [
        {
            company: 'F1Soft International Pvt. Ltd.',
            position: 'Software Engineer',
            duration: '2021 - 2023'
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
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae reprehenderit necessitatibus! Blanditiis laboriosam voluptatibus dolorem itaque voluptas perspiciatis.',
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
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae reprehenderit necessitatibus! Blanditiis laboriosam voluptatibus dolorem itaque voluptas perspiciatis.',
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