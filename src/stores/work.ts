import {ref} from "vue";
import {defineStore} from "pinia";
import type {Word} from '@/types'

export  const useWorkStore = defineStore('work', () => {
    const workList = ref<Word[]>([
        {
            name: "Hello World",
            descriptions: ["我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。",
                "我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。"
            ],
            skills: ["Goland","Gdal","Postgresql","GORM","GIN","Goland","Gdal","Postgresql","GORM","GIN"]
        },
        {
            name: "Hello World Hello World Hello World",
            descriptions: ["我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。",
                "我是一名软件工程师，专门致力于构建卓越的数字体验。 目前，我在 Upstatement 专注于打造易于使用、以人为本的产品。"
            ],
            skills: ["Goland","Gdal","Postgresql","GORM","GIN"]
        }
    ])
    return {workList}
})
