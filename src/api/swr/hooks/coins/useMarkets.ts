import useSWR, { SWRResponse } from 'swr';
import { ENDPOINTS } from 'api/endpoints';
import { AxiosResponse } from 'axios';
import { CoinResponse } from 'api/axios/coins/types';
import { parseMarketsParams } from './helpers/parseMarketsParams';

export type MarketsParams = {
    vs_currency: string;
    order: string;
    per_page: number;
    page: number;
    sparkline: boolean;
};

type Response = SWRResponse<CoinResponse[] | undefined, AxiosResponse> & {
    isLoading: boolean;
};

export const useMarkets = ({
    vs_currency,
    order,
    per_page,
    page,
    sparkline,
}: MarketsParams): Response => {
    const { data, error, ...rest } = useSWR(
        `${ENDPOINTS.MARKETS}?${parseMarketsParams({
            vs_currency,
            order,
            per_page,
            page,
            sparkline,
        })}`,
    );

    const isLoading = data === undefined && !error;

    return { data, error, isLoading, ...rest };
};
