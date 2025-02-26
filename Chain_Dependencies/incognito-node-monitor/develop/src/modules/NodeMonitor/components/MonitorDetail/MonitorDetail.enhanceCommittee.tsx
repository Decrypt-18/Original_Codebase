import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { useDispatch } from 'react-redux';
import { actionFetchCommitteeActivity } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.actions';

const withCommittee = (WrappedComp: React.FunctionComponent) => (props: any) => {
    const dispatch = useDispatch();

    const handleFetchCommitteeActivity = () => dispatch(actionFetchCommitteeActivity());

    React.useEffect(() => {
        handleFetchCommitteeActivity();
    }, []);

    return (
        <ErrorBoundary>
            <WrappedComp
                {...{
                    ...props,
                }}
            />
        </ErrorBoundary>
    );
};

export default withCommittee;
