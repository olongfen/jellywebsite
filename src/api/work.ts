import {request} from "@/utils/http";

import type {Work} from "@/types/index";
export const getWorksAPI = async (personID: number)=>{
    return await request<Work[]>({
        url: "/work"+`/${personID}`,
        method: "get"
    })
}
