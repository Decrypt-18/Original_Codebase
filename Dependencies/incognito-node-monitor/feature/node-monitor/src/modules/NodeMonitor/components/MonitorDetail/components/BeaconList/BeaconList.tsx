import React, { memo } from 'react';
import styled, { ITheme } from 'styled-components';
import Row from 'src/components/Row';
import Card from '@material-ui/core/Card';
import { TextBold, TextMedium } from 'src/components';
import { IBeacon, IShard } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.interface';
import { isEmpty } from 'lodash';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { useTable } from 'react-table';
import { MockupColumnsBeacon } from 'src/modules/NodeMonitor/NodeMonitor.mockupData';
import enhance from './BeaconList.enhance';

const Styled = styled.div`
    width: 100%;
    > div:last-child {
        border-bottom-width: 0;
        margin-bottom: 10px;
    }
    .header-row {
        background-color: ${({ theme }: { theme: ITheme }) => theme.headerRow};
        th {
            font-weight: bold;
            text-align: center;
        }
    }
`;

const RowWrapper = styled(Row)<{ isEven: boolean }>`
    width: 100%;
    justify-content: space-between;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom: 1px solid ${({ theme }: { theme: ITheme }) => `${theme.border2}`};
    padding: 10px 0;
    background-color: ${({ theme, isEven }: { theme: ITheme; isEven: boolean }) =>
        isEven ? 'transparent' : theme.darkRow};
    > div {
        min-width: 100px;
    }
`;

interface IProps {
    beacon: IBeacon;
    shards: IShard[];
}

const BeaconList = memo((props: IProps & any) => {
    const { beacon, shards } = props;
    const { headerGroups } = useTable({
        columns: MockupColumnsBeacon || [],
        data: [],
    });
    const renderItem = (item: any, index: number) => {
        return (
            <RowWrapper isEven={index % 2 !== 0} key={item?.name}>
                <TextBold style={{ flex: 2, textAlign: 'center' }}>{item?.name}</TextBold>
                <TextMedium style={{ flex: 2, textAlign: 'center' }}>{item?.blockHeight}</TextMedium>
                <TextMedium style={{ flex: 3, textAlign: 'center' }} color={item?.color}>
                    {item?.message}
                </TextMedium>
            </RowWrapper>
        );
    };
    if (isEmpty(beacon) || isEmpty(shards)) return null;
    const renderContent = () => (
        <>
            {renderItem(beacon, 1)}
            {shards.map(renderItem)}
        </>
    );

    const renderHeader = () => (
        <TableHead style={{ display: 'flex', width: '100%' }}>
            {headerGroups.map((headerGroup) => {
                return (
                    <TableRow
                        style={{ display: 'flex', flex: 1 }}
                        className="header-row"
                        {...headerGroup.getHeaderGroupProps()}
                    >
                        {headerGroup.headers.map((column, index) => {
                            const flex = index === 2 ? 3 : 2;
                            return (
                                <TableCell style={{ flex, textAlign: 'center' }} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </TableHead>
    );
    return (
        <Card>
            <Styled>
                {renderHeader()}
                {renderContent()}
            </Styled>
        </Card>
    );
});

export default enhance(BeaconList);
