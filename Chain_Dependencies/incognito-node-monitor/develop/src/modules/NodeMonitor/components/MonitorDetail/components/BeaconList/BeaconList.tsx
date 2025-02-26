import React, { memo } from 'react';
import styled, { ITheme } from 'styled-components';
import { IBeacon, IShard } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.interface';
import { isEmpty } from 'lodash';
import AntdTable from 'src/components/Table/AntdTable';
import { COLUMN_TABLE_BEACON } from 'src/modules/NodeMonitor/NodeMonitor.data';
import enhance from './BeaconList.enhance';

const Styled = styled.div`
    margin-bottom: 40px;
`;

interface IProps {
    beacon: IBeacon;
    shards: IShard[];
}

const BeaconList = memo((props: IProps & any) => {
    const { beacon, shards } = props;

    const TABLE_DATA = React.useMemo(() => {
        const _beacon = beacon ? [beacon] : [];
        const _shards = shards || [];
        return _beacon.concat(_shards);
    }, [beacon, shards]);

    if (isEmpty(beacon) || isEmpty(shards)) return null;

    return (
        <Styled>
            <AntdTable columns={COLUMN_TABLE_BEACON} data={TABLE_DATA} />
        </Styled>
    );
});

export default enhance(BeaconList);
