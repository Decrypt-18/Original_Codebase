import { useDispatch } from 'react-redux';
import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { actionFetchSyncStat } from './MonitorDetail.actions';

const withSyncStat = (WrappedComponent: React.FunctionComponent) => (props: any) => {
    const dispatch = useDispatch();
    const handleFetchSyncState = () => dispatch(actionFetchSyncStat());

    React.useEffect(() => {
        handleFetchSyncState();
    }, []);

    return (
        <ErrorBoundary>
            <WrappedComponent
                {...{
                    ...props,
                }}
            />
        </ErrorBoundary>
    );
};

export default withSyncStat;
