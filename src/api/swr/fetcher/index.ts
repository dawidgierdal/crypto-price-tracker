import { axiosOrigin } from 'api/axios-instances';
import { AxiosResponse } from 'axios';

export const fetcher = <T>(url: string): Promise<AxiosResponse<T>> =>
    axiosOrigin.get(url).then((res) => res.data);
