import React, { FC } from 'react';
import { CoinParams } from 'types';

type Props = {
    coin: CoinParams;
};

export const Coin: FC<Props> = ({ coin }) => {
    const { name, current_price } = coin;
    return (
        <div>
            {name} {current_price}
        </div>
    );
};
