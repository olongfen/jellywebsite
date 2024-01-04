
// 个人信息详情
interface PersonDetail {
    name: string
    email: string
    introduction: string
    age?: number
    phone?: string
    address?: string
}


// 工作经历
interface JobExperience {
    time: string
    position: string
    descriptions: string[]
    company: string
    url: string

}

// 关于我
interface AboutMe {
    introduction: string[]
    skills: string[]
}

// 工作项目
interface Word {
    name: string
    descriptions: string[]
    skills: string[]
}

export type {
    PersonDetail,
    JobExperience,
    AboutMe,
    Word
}
