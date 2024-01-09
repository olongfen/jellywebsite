
// 个人信息详情
interface PersonDetail {
    id: number
    name: string
    email: string
    introduction: string
    aboutMeIntroduction: string[]
    aboutMeSkills: string[]
    age?: number
    phone?: string
    address?: string
}


// 工作经历
interface JobExperience {
    startTime: string
    endTime: string
    position: string
    descriptions: string[]
    company: string
    companyAddress?: string

}

// 关于我
interface AboutMe {
    introduction: string[]
    skills: string[]
}

// 工作项目
interface Work {
    name: string
    descriptions: string[]
    skills: string[]
}

// 定义响应类型
interface ApiResponse<T> {
    code: string;
    data: T;
    msg: string;
}

export type {
    PersonDetail,
    JobExperience,
    AboutMe,
    Work,
    ApiResponse
}
