import {ref,onMounted} from "vue";
import {defineStore} from "pinia";
import type {PersonDetail} from '@/types/index'
import {getPersonAPI} from "@/api/person";

export const usePersonDetailStore = defineStore('personDetail', () => {
    const person = ref<PersonDetail>()
    const getPerson =   async (email: 'olongfen@gmail.com') => {
        person.value = await getPersonAPI(email)
    }
    return {person,getPerson}
})
