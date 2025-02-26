import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { compose } from 'recompose';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';
import withCommittee from './MonitorDetail.enhanceCommittee';
import withSyncStat from './MonitorDetail.enhanceSyncStat';
import { getMiningPublicKey } from '../Table/Table.utils';
import { actionFetchNodeSyncInfo } from './MonitorDetail.actions';

interface IProps {
    isWebview: boolean;
}
const enhance = (WrappedComp: React.FunctionComponent) => (props: IProps & any) => {
    const dispatch = useDispatch();
    const [isWebview, setIsWebview] = React.useState(false);
    const handleOpenNewTab = () => {
        const mpk = getMiningPublicKey();
        if (isEmpty(mpk)) return;
        setIsWebview(true);
        dispatch(actionFetchNodeSyncInfo(mpk));
    };

    React.useEffect(() => {
        handleOpenNewTab();
    }, []);
    return (
        <ErrorBoundary>
            <WrappedComp
                {...{
                    ...props,
                    isWebview,
                }}
            />
        </ErrorBoundary>
    );
};

export default compose(withSyncStat, withCommittee, enhance);
