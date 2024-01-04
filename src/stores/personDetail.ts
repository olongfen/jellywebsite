import {ref, computed} from "vue";
import {defineStore} from "pinia";
import type {PersonDetail} from '@/types/index'

export const usePersonDetailStore = defineStore('personDetail', () => {
    const person = ref<PersonDetail>({
        name: "Jelly",
        email: "jellylf@icloud.com",
        introduction: "我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。",
    })
    return {person}
})
