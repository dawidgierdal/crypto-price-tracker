import axios from 'axios';

export const axiosOrigin = axios.create({
    baseURL: 'https://api.coindesk.com/v1/bpi',
});
