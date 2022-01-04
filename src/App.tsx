import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { axiosOrigin } from './api/axios-instances';
import { CoinParams } from './types';
import { ENDPOINTS } from './api/endpoints';
import { Coin } from './components/coin';

const App = () => {
    const [coins, setCoins] = useState<AxiosResponse | null | void>(null);

    const getData = async () => {
        try {
            const data = await axiosOrigin.get(ENDPOINTS.MARKETS);
            setCoins(data);
        } catch (e) {
            window.alert(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const { data } = coins || {};

    const coinsToRender = data?.map((coin: CoinParams) => <Coin key={coin.id} coin={coin} />);

    return <div>{coinsToRender}</div>;
};

export default App;
