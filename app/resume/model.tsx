interface About {
    title: string,
    description: string,
    info: AboutInfo[]
}

interface AboutInfo {
    fieldName: string,
    fieldValue: any
}

interface Experience {
    icon: string,
    title: string,
    description: string,
    items: ExpItems[]
}

interface ExpItems {
    company: string,
    position: string,
    duration: string
}

interface Education {
    icon: string,
    title: string,
    description: string,
    items: EducationList[]
}

interface EducationList {
    insitution: string,
    degree: string,
    duration: string,
}

interface Skill {
    title: string,
    description: string,
    skillLists: SkillList[]
}

interface SkillList {
    icons: any,
    name: string
}