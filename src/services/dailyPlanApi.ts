
import { axiosGet, axiosPost, axiosPut, axiosDelete } from './axiosInstance';

/**
 * 获取 所有
 * @returns string[]
 */
export const getPlanAllApi = () => {
    return axiosGet('/api/plan/');
}
/**
 * 通过 ID 获取
 * @returns string[]
 */
export const getPlanByIdApi = (id: number | string) => {
    return axiosGet(`/api/plan/${id}`);
}
/**
 * 通过 ID 新增
 * @returns string[]
 */
export const postPlanApi = (params: IDailyPlan) => {
    return axiosPost('/api/plan', params);
}
/**
 * 通过 ID 修改
 * @returns string[]
 */
export const putPlanApi = (params: IDailyPlan) => {
    return axiosPut(`/api/plan/${params.plan_id}`, params);
}
/**
 * 通过 ID 获取
 * @returns string[]
 */
export const deletePlanApi = (id: number | string) => {
    return axiosDelete(`/api/plan/${id}`, {});
}

export interface IDailyPlan {
    plan_id?: number;
    title: string;
    subtitle?: string;
    content?: string;
    execute_time?: string;
    remark?: string;
}