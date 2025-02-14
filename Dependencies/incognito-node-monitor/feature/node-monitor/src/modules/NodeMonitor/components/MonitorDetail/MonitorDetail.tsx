import React from 'react';
import { BeaconList, CommitteeActivity } from 'src/modules/NodeMonitor/components/MonitorDetail/components';
import { useSelector } from 'react-redux';
import LoadingOverlay from 'src/components/LoadingOverlay';
import { isEmpty } from 'lodash';
import { Styled } from './MonitorDetail.styled';
import ColumnText from '../ColumnText';
import { monitorDetailSelector } from './MonitorDetail.selector';
import enhance from './MonitorDetail.enhance';
import RowText from '../RowText';

interface IProps {
    isWebview: boolean;
}

const MonitorDetail = React.memo(({ isWebview }: IProps & any) => {
    const { node, fetching } = useSelector(monitorDetailSelector);
    const renderContent = () => (
        <>
            <BeaconList />
            <CommitteeActivity />
        </>
    );

    const getStatus = () => {
        if (!node) return '';
        if (
            isEmpty(node?.role) ||
            node?.role === '-' ||
            node.role === 'Not stake' ||
            node.committeeChain === 'Not stake'
        )
            return 'Not stake';
        let shardName = `${node?.role} Shard ${node.committeeChain}`;
        if (!node?.autoStake) {
            shardName += ` (unstaking)`;
        }
        return shardName;
    };

    return (
        <Styled isWebview={isWebview}>
            {!!node && (
                <>
                    {!!node.name && <ColumnText title="Name" content={node.name} />}
                    <ColumnText title="Validator Public key" content={node.publicKey} />
                    <ColumnText title="Status" content={getStatus()} />
                    <RowText title="Sync state:" content={node.status === 'Offline' ? 'Offline' : node.syncState} />
                </>
            )}
            {fetching ? <LoadingOverlay /> : renderContent()}
        </Styled>
    );
});

export default enhance(MonitorDetail);
