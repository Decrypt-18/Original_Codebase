import React from 'react';
import { Card } from '@material-ui/core';
import { useTable } from 'react-table';
import MaUTable from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Styled } from './styled';

interface IProps {
    columns?: any[];
    showHeader?: boolean;
    data: any[];
}

const Table = React.memo((props: IProps) => {
    const { columns, data, showHeader } = props;
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
        columns: columns || [],
        data: data || [],
    });

    const renderHeader = () => (
        <TableHead>
            {headerGroups.map((headerGroup) => (
                <TableRow className="header-row" {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                    ))}
                </TableRow>
            ))}
        </TableHead>
    );

    const renderBody = () => (
        <TableBody>
            {rows.map((row, index) => {
                prepareRow(row);
                return (
                    <TableRow className={`table-row ${index % 2 !== 0 ? 'dark-row' : ''}`} {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return (
                                <TableCell className="table-cell" {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </TableBody>
    );

    return (
        <Styled>
            <Card className="card">
                <MaUTable {...getTableProps()}>
                    {!!showHeader && renderHeader()}
                    {renderBody()}
                </MaUTable>
            </Card>
        </Styled>
    );
});

export default Table;
