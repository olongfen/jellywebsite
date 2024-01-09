
import  axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import type {ApiResponse} from "@/types";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'



// 封装 Axios 实例
const createAxiosInstance = (): AxiosInstance => {
    const instance: AxiosInstance = axios.create({
        baseURL: 'http://127.0.0.1:8818/api',
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
        },
    });
     // 请求拦截器
    instance.interceptors.request.use(
        (config) => {
            // 在发送请求之前做些什么
            return config;
        }
    )
    // 添加响应拦截器
    instance.interceptors.response.use(
        (response) => {
            // 统一处理响应
            return handleResponse(response);
        },
        (error) => {
            // 统一处理错误
            return Promise.reject(handleError(error));
        }
    );

    return instance;
};

// 处理响应
const handleResponse = <T>(response: AxiosResponse<ApiResponse<T>>): ApiResponse<T>|any => {
    const res =response.data
    // 根据自定义错误码判断请求是否成功
    if (res.code === "SUCCESS") {
        // 将组件用的数据返回
        return response;
    } else {
        // 处理业务错误。
        ElMessage.error(res.msg);
    }
};

// 处理错误
const handleError = (error: AxiosError): ApiResponse<null> => {
    // 在这里可以添加其他统一处理错误逻辑
    return {
        code: "FAILURE",
        data: null,
        msg: error.message,
    };
};






// 使用泛型定义请求函数
export const request = <T>(config: Record<string, any>): Promise<T> => {
    const instance = createAxiosInstance();
    return instance.request<ApiResponse<T>>(config)
        .then((response) => {
               return   response.data.data
            }
        )
        .catch((error) => {
            throw error;
        });
};
