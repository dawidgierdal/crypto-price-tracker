import useSWR, { SWRResponse } from 'swr';
import { ENDPOINTS } from 'api/endpoints';
import { AxiosResponse } from 'axios';
import { CoinResponse } from 'api/axios/coins/types';

type Response = SWRResponse<CoinResponse[] | undefined, AxiosResponse> & {
    isLoading: boolean;
};

export const useMarkets = (): Response => {
    const { data, error, ...rest } = useSWR(ENDPOINTS.MARKETS);

    const isLoading = data === undefined && !error;

    return { data, error, isLoading, ...rest };
};
