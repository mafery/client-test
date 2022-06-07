import axios, { AxiosRequestConfig } from 'axios';

const options: AxiosRequestConfig = {
    // baseURL: 'http://localhost:8080',
    withCredentials: true,
    timeout: 20000
}

const axiosInstance = axios.create(options);

/**
 * 请求拦截器
 * 1、取消重复请求
 * 2、显示加载中
 */
 axiosInstance.interceptors.request.use(
    request => {
        console.log('-----------------request start----------------');
        console.log(request);
        return request;
    },
    error => {
        console.log('-----------------request error----------------');
        console.error(error);
        return Promise.reject(error);
    }
)

/**
 * 响应拦截器
 * 1、取消重复响应
 * 2、隐藏加载中
 * 3、错误处理
 *      1.未登录，token失效
 *      2.没有权限
 *      3.服务端错误
 * 4、超时处理
 */
 axiosInstance.interceptors.response.use(
    response => {
        console.log('-----------------response start----------------');
        console.log(response);
        return response.data;
    },
    error => {
        console.log('-----------------response error----------------');
        console.error(error);
        Promise.reject(error);
    }
)

// 'content-type': 'application/x-www-form-urlencoded'
// 'content-type': 'application/json;charset=UTF-8'
/**
 * get 请求
 * @param url string, 请求路径
 * @param params object 请求参数
 * @returns promise 对象
 */
export function axiosGet(url: string, params: any = {}): Promise<any> {
    return axiosInstance.get(url, {
        params: params,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        }
    });
}

/**
 * post 请求
 * @param url string, 请求路径
 * @param params object 请求参数
 * @returns 
 */
//  * @param options options: AxiosRequestConfig = {}
export function axiosPost(url: string, params: any = {}): Promise<any> {
    return axiosInstance.post(url, params, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        }
    });
}

/**
 * put 请求
 * @param url string, 请求路径
 * @param params object 请求参数
 * @returns 
 */
//  * @param options options: AxiosRequestConfig = {}
export function axiosPatch(url: string, params: any = {}): Promise<any> {
    return axiosInstance.patch(url, params, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        }
    });
}

/**
 * put 请求
 * @param url string, 请求路径
 * @param params object 请求参数
 * @returns 
 */
//  * @param options options: AxiosRequestConfig = {}
export function axiosPut(url: string, params: any = {}): Promise<any> {
    return axiosInstance.put(url, params, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        }
    });
}

/**
 * delete 请求
 * @param url string, 请求路径
 * @param params object 请求参数
 * @returns 
 */
//  * @param options options: AxiosRequestConfig = {}
export function axiosDelete(url: string, params: any = {}): Promise<any> {
    return axiosInstance.delete(url, {
        params: params,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        }
    });
}