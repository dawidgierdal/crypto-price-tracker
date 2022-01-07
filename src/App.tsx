import React from 'react';
import { SwrConfig } from './modules/swr-config';
import { CoinsTable } from './components/coins-table';

const App = () => {
    return (
        <SwrConfig>
            <CoinsTable />
        </SwrConfig>
    );
};

export default App;
