import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { useSelector } from 'react-redux';
import { monitorDetailSelector } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.selector';

const enhance = (WrappedComponent: React.FunctionComponent) => (props: any) => {
    const { syncStat } = useSelector(monitorDetailSelector);
    return (
        <ErrorBoundary>
            <WrappedComponent
                {...{
                    ...props,
                    beacon: syncStat?.beacon,
                    shards: syncStat?.shards,
                }}
            />
        </ErrorBoundary>
    );
};

export default enhance;
