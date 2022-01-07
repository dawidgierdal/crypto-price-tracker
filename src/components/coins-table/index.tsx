import React from 'react';
import { useMarkets } from 'api/swr/hooks/coins/useMarkets';
import { Column, useTable } from 'react-table';
import { CoinResponse } from 'api/axios/coins/types';

export const CoinsTable = () => {
    const { data } = useMarkets();

    const tableData = React.useMemo<CoinResponse[] | undefined>(() => data, [data]) || [];

    const columns = React.useMemo<Column<CoinResponse>[]>(
        () => [
            {
                Header: 'Rank',
                accessor: 'market_cap_rank',
            },
            {
                Header: 'Coin',
                accessor: 'name',
            },
            {
                Header: 'Price',
                accessor: 'current_price',
            },
            {
                Header: 'Market Cap',
                accessor: 'market_cap',
            },
        ],
        [],
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data: tableData,
    });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => {
                    const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                    return (
                        <tr key={key} {...restHeaderGroupProps}>
                            {headerGroup.headers.map((column) => {
                                const { key, ...restColumn } = column.getHeaderProps();
                                return (
                                    <th key={key} {...restColumn}>
                                        {column.render('Header')}
                                    </th>
                                );
                            })}
                        </tr>
                    );
                })}
            </thead>
            <tbody {...getTableBodyProps}>
                {rows.map((row) => {
                    prepareRow(row);
                    const { key, ...restRowProps } = row.getRowProps();
                    return (
                        <tr key={key} {...restRowProps}>
                            {row.cells.map((cell) => {
                                const { key, ...restCellProps } = cell.getCellProps();
                                return (
                                    <td key={key} {...restCellProps}>
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
