import React, { memo } from 'react';
import withEnhance from 'src/modules/RedList/components/Table/TableValidator.enhance';
import { ITableNodeProps } from 'src/modules/NodeMonitor/components/Table';
import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import { Styled } from 'src/modules/NodeMonitor/components/Table/styled';
import MonitorDetailModal from 'src/modules/NodeMonitor/components/MonitorDetail/components/MonitorDetailModal';
import { Table } from 'antd';
import { getColumnsRedList } from 'src/modules/NodeMonitor/NodeMonitor.data';

const TableValidator = memo((props: ITableNodeProps & any) => {
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

    const onClickTableCell = (item: ITableData) => {
        if (!item) return;
        handleClickTableCell && handleClickTableCell(item);
    };

    const onCloseModal = () => {
        handleCloseMonitorModal && handleCloseMonitorModal();
    };

    const onChangePage = (page: number) => handleChangePage && handleChangePage(page);

    const columns = getColumnsRedList();
    return (
        <Styled>
            <Table
                columns={columns}
                dataSource={data}
                loading={fetching}
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
                rowClassName={(record, index) => `table-row ${index % 2 !== 0 ? 'table-row-dark' : 'table-row-light'}`}
            />
            <MonitorDetailModal visible={visibleModal} onClose={onCloseModal} />
        </Styled>
    );
});

export default withEnhance(TableValidator);
