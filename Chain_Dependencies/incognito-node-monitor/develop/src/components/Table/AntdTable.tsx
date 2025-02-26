import React, { memo } from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

interface IProps {
    columns: any;
    data: any;
    loading?: boolean;
    renderRow?: (record: any, index: number) => string;
}

const Wrapper = styled.div`
    overflow: auto;
    thead > tr > th {
        text-align: center;
        font-weight: 600;
    }
`;

const AntdTable = (props: IProps) => {
    const { columns, data, loading, renderRow } = props;

    const onRenderRow = (record: any, index: number) => {
        let suffix = '';
        if (renderRow) {
            suffix = renderRow(record, index);
        }
        return `${suffix} table-row ${index % 2 !== 0 ? 'table-row-dark' : 'table-row-light'}`;
    };

    return (
        <Wrapper>
            <Table
                columns={columns}
                dataSource={data}
                loading={!!loading}
                pagination={false}
                rowClassName={onRenderRow}
            />
        </Wrapper>
    );
};

export default memo(AntdTable);
