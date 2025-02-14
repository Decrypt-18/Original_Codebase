import React from 'react';
import { MockupColumns } from 'src/modules/NodeMonitor/NodeMonitor.mockupData';
import { Styled, ModalWrapper, CloseWrapper } from 'src/modules/NodeMonitor/components/Table/styled';
import { useTable } from 'react-table';
import Card from '@material-ui/core/Card';
import TablePagination from '@material-ui/core/TablePagination';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LoadingOverlay from 'src/components/LoadingOverlay';
import Modal from 'src/components/Modal';
import MonitorDetail from 'src/modules/NodeMonitor/components/MonitorDetail';
import withTable from 'src/modules/NodeMonitor/components/Table/Table.enhance';
import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import { CloseIcon } from 'src/components/Icons';
import { isEmpty } from 'lodash';
import SearchRow from 'src/modules/NodeMonitor/components/SearchRow';

interface IProps {
    data: ITableData[];
    currentPage: number;
    limitPage: number;
    rowsPerPage: number;
    fetching: boolean;
    isSearching: boolean;
    visibleModal: boolean;

    handleChangePage: (page: number) => void;
    handleChangeRowsPerPage: () => void;
    handleClickTableCell: (item: ITableData) => void;
    handleCloseMonitorModal: () => void;
}
const Table = (props: IProps & any) => {
    const {
        currentPage,
        limitPage,
        rowsPerPage,
        data,
        fetching,
        isSearching,
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

    const onChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, page: number) =>
        handleChangePage && handleChangePage(page);

    const onChangeRowsPerPage = () => handleChangeRowsPerPage && handleChangeRowsPerPage();

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

    const renderPagination = () => {
        if (!limitPage || isSearching) return null;
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

    const renderModal = () => (
        <Modal isOpen={visibleModal} onDismiss={onCloseModal}>
            <ModalWrapper>
                <CloseWrapper onClick={onCloseModal}>
                    <CloseIcon width="18" height="18" />
                </CloseWrapper>
                <MonitorDetail />
            </ModalWrapper>
        </Modal>
    );

    return (
        <Styled>
            <SearchRow />
            {!isEmpty(data) && (
                <Card className="card">
                    <MaUTable {...getTableProps()}>
                        {renderHeader()}
                        {!fetching && renderBody()}
                    </MaUTable>
                    {!!fetching && <LoadingOverlay />}
                    {renderPagination()}
                </Card>
            )}
            {renderModal()}
        </Styled>
    );
};

export default withTable(Table);
