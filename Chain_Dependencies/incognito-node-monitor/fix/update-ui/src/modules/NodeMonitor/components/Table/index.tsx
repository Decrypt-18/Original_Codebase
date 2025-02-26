import React from 'react';
import { Styled } from 'src/modules/NodeMonitor/components/Table/styled';
import withTable from 'src/modules/NodeMonitor/components/Table/Table.enhance';
import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import SearchRow from 'src/modules/NodeMonitor/components/SearchRow';
import { Table } from 'antd';
import { getColumnsNodeMonitor } from 'src/modules/NodeMonitor/NodeMonitor.data';
import { useDispatch } from 'react-redux';
import MonitorDetailModal from '../MonitorDetail/components/MonitorDetailModal';
import { actionDeleteNode } from './Table.actions';

export interface ITableNodeProps {
    data: ITableData[];
    currentPage: number;
    limitPage: number;
    rowsPerPage: number;
    fetching: boolean;
    visibleModal: boolean;

    handleChangePage: (page: number) => void;
    handleClickTableCell: (item: ITableData) => void;
    handleCloseMonitorModal: () => void;
}

const TableNodeMonitor = (props: ITableNodeProps & any) => {
    const {
        currentPage,
        limitPage,
        rowsPerPage,
        data,
        fetching,
        visibleModal,
        handleChangePage,
        handleClickTableCell,
        handleCloseMonitorModal,
    } = props;

    const dispatch = useDispatch();

    const onChangePage = (page: number) => handleChangePage && handleChangePage(page);

    const onClickTableCell = (item: ITableData) => {
        if (!item) return;
        handleClickTableCell && handleClickTableCell(item);
    };

    const onCloseModal = () => {
        handleCloseMonitorModal && handleCloseMonitorModal();
    };

    const columns = getColumnsNodeMonitor({
        deleteCell: (node) => {
            dispatch(actionDeleteNode(node));
        },
    });

    return (
        <Styled>
            <SearchRow />
            <div className="card">
                <Table
                    columns={columns}
                    dataSource={data}
                    loading={!!fetching}
                    pagination={{
                        current: currentPage + 1,
                        pageSize: rowsPerPage,
                        total: limitPage,
                        showSizeChanger: false,
                        showQuickJumper: true,
                    }}
                    onRow={(record) => ({
                        onClick: () => {
                            onClickTableCell && onClickTableCell(record);
                        },
                    })}
                    onChange={(pagination: any) => {
                        const { current } = pagination;
                        onChangePage(current - 1);
                    }}
                    rowClassName={(record, index) =>
                        `table-row ${index % 2 !== 0 ? 'table-row-dark' : 'table-row-light'}`
                    }
                />
            </div>
            <MonitorDetailModal visible={visibleModal} onClose={onCloseModal} />
        </Styled>
    );
};

export default withTable(TableNodeMonitor);
