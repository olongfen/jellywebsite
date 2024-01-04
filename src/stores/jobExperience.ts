import {computed, ref} from "vue";
import type {JobExperience} from '@/types/index'
import {defineStore} from "pinia";

export const useJobExperienceStore = defineStore('workExperience', () => {
    const jobExperienceList = ref<JobExperience[]>([
        {
            position: "Developer",
            time: "2022.6 - 至今",
            descriptions: [
                "我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。dslkjglkrewjglkqjewlkgjlw",
                "我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。",
                "我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。",
                "我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。",
                "我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。"],
            company: "阿里巴巴集团控股有限公司",
            url: "https://www.baidu.com"
},
        {
            position: "Developer",
            time: "2022.6 - 至今",
            descriptions: ["我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。","我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。"],
            company: "北京字节跳动科技有限公司",
            url: "https://www.baidu.com"
        }
        ,
        {
            position: "Developer",
            time: "2022.6 - 至今",
            descriptions: ["我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。","我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。"],
            company: "百度在线网络技术（北京）有限公司",
            url: "https://www.baidu.com"
        }
])
    const jobDetail = ref<JobExperience>(jobExperienceList.value[0])
    const getJobExperience = (company: string) =>{
        jobExperienceList.value.forEach((item)=>{
            if(item.company === company){
                jobDetail.value = item
            }
        })
    }
    return { jobExperienceList, getJobExperience, jobDetail}
})

