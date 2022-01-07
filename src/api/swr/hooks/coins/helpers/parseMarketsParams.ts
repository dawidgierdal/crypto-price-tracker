import qs from 'qs';
import { MarketsParams } from '../useMarkets';

enum QUERY_PARAMS {
    vs_currency = 'vs_currency',
    order = 'order',
    per_page = 'per_page',
    page = 'page',
    sparkline = 'sparkline',
}

export const parseMarketsParams = ({
    vs_currency,
    order,
    per_page,
    page,
    sparkline,
}: MarketsParams): string => {
    const params = {
        [QUERY_PARAMS.vs_currency]: vs_currency,
        [QUERY_PARAMS.order]: order,
        [QUERY_PARAMS.per_page]: per_page,
        [QUERY_PARAMS.page]: page,
        [QUERY_PARAMS.sparkline]: sparkline,
    };

    return qs.stringify(params, { arrayFormat: 'repeat' });
};
