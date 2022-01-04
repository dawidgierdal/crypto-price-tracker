import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { axiosOrigin } from './api/axios-instances';

function App() {
    const [bitcoinData, setBitcoinData] = useState<AxiosResponse | null | void>(null);

    const getData = async () => {
        try {
            const data = await axiosOrigin.get('currentprice.json');
            setBitcoinData(data);
        } catch (e) {
            window.alert(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const { data } = bitcoinData || {};

    return (
        <div>
            {data?.chartName} {data?.bpi.USD.rate}
        </div>
    );
}

export default App;
