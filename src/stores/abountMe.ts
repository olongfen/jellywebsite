import {ref} from "vue";
import type {AboutMe} from '@/types/index'
import {defineStore} from "pinia";

export const useAboutMeStore = defineStore('aboutMe', () => {
    const data = ref<AboutMe>({
        introduction: ["我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。","我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。"],
        skills: ["Goland","Docker","Devops","Python","Gdal","Postgresql","Linux","Vue3", "Typescript","CSS","Html"]
    })
    return {data}
})
