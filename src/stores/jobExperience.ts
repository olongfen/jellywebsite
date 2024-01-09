import { ref} from "vue";
import type {JobExperience} from '@/types/index'
import {defineStore} from "pinia";
import {getJobExperienceListAPI} from "@/api/jobExperience";
import {usePersonDetailStore} from "@/stores/personDetail";


export const useJobExperienceStore = defineStore('workExperience', () => {
    const personDetail = usePersonDetailStore()
    const jobExperienceList = ref<JobExperience[]>()
    const jobDetail = ref<JobExperience>()
    const getJobExperience = (company: string) =>{
        jobExperienceList?.value?.forEach((item)=>{
            if(item.company === company){
                jobDetail.value = item
            }
        })
    }
    const getJobExperienceList = async ()=>{
        jobExperienceList.value = await getJobExperienceListAPI(personDetail.person?.id!)
        jobDetail.value = jobExperienceList.value?.[0]
    }

    return { jobExperienceList, getJobExperience, jobDetail,getJobExperienceList}
})

