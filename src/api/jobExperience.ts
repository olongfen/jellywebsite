import {request} from "@/utils/http";
import type {JobExperience} from "@/types/index";
export const getJobExperienceListAPI = async (personId: number)=>{

    return await request<JobExperience[]>({
        url: "/job-experience"+`/${personId}`,
        method: "get"
    })
}
