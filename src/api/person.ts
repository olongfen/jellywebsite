import {request} from "@/utils/http";
import type {PersonDetail} from "@/types/index";

export const getPersonAPI = async (email: string) => {
    return   await request<PersonDetail>({
        url: "/person",
        method: "get",
        params: {
            email
        }
    })
}
