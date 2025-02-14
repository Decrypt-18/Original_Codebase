import React, { memo } from 'react';
import withEnhance from 'src/modules/RedList/components/Table/TableValidator.enhance';
import Card from '@material-ui/core/Card';
import MaUTable from '@material-ui/core/Table';
import LoadingOverlay from 'src/components/LoadingOverlay';
import { ITableNodeProps } from 'src/modules/NodeMonitor/components/Table';
import { useTable } from 'react-table';
import { MockupColumns } from 'src/modules/NodeMonitor/NodeMonitor.mockupData';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import { Styled } from 'src/modules/NodeMonitor/components/Table/styled';
import MonitorDetailModal from 'src/modules/NodeMonitor/components/MonitorDetail/components/MonitorDetailModal';
import TablePagination from '@material-ui/core/TablePagination';

const TableValidator = memo((props: ITableNodeProps & any) => {
    const {
        currentPage,
        limitPage,
        rowsPerPage,
        data,
        fetching,
        visibleModal,
        handleChangePage,
        handleChangeRowsPerPage,
        handleClickTableCell,
        handleCloseMonitorModal,
    } = props;

    const columns = MockupColumns;
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    const onClickTableCell = (item: ITableData) => {
        if (!item) return;
        handleClickTableCell && handleClickTableCell(item);
    };

    const onCloseModal = () => {
        handleCloseMonitorModal && handleCloseMonitorModal();
    };

    const renderHeader = () => (
        <TableHead>
            {headerGroups.map((headerGroup) => (
                <TableRow className="header-row" {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => {
                        return <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>;
                    })}
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
                            const value: any = cell.row.original;
                            const header = cell.column.Header;
                            const className = header === 'Vote Stats' ? 'break-line' : '';
                            return (
                                <TableCell
                                    onClick={() => onClickTableCell(value)}
                                    className={`table-cell ${className}`}
                                    {...cell.getCellProps()}
                                >
                                    {cell.render('Cell')}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </TableBody>
    );

    const onChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, page: number) =>
        handleChangePage && handleChangePage(page);

    const onChangeRowsPerPage = () => handleChangeRowsPerPage && handleChangeRowsPerPage();

    const renderPagination = () => {
        if (!limitPage) return null;
        return (
            <TablePagination
                component="div"
                count={limitPage}
                page={currentPage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[]}
                onChangePage={onChangePage}
                onChangeRowsPerPage={onChangeRowsPerPage}
                className="pagination"
            />
        );
    };

    return (
        <Styled>
            <Card className="card">
                <MaUTable {...getTableProps()}>
                    {renderHeader()}
                    {!fetching && renderBody()}
                </MaUTable>
                {!!fetching && <LoadingOverlay />}
                {renderPagination()}
            </Card>
            <MonitorDetailModal visible={visibleModal} onClose={onCloseModal} />
        </Styled>
    );
});

export default withEnhance(TableValidator);
