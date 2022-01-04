import axios from 'axios';

export const axiosOrigin = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
});
