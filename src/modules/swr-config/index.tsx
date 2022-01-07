import React, { FC } from 'react';
import { fetcher } from 'api/swr/fetcher';
import { SWRConfig } from 'swr';

export const SwrConfig: FC = ({ children }) => {
    return (
        <SWRConfig
            value={{
                fetcher,
            }}
        >
            {children}
        </SWRConfig>
    );
};
