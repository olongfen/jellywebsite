import {ref} from "vue";
import {defineStore} from "pinia";
import type {Work} from '@/types'
import {getWorksAPI} from "@/api/work";

export  const useWorkStore = defineStore('work', () => {
    const workList = ref<Work[]>()
    const getWorkList = async ()=>{
        workList.value = await getWorksAPI(1)
    }
    return {workList,getWorkList}
})
