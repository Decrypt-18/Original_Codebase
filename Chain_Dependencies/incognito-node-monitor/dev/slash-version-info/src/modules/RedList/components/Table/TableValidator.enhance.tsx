import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { compose } from 'recompose';
import { useDispatch } from 'react-redux';
import withData from 'src/modules/RedList/components/Table/TableValifator.enhanceData';
import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';
import {
    actionClearMonitorDetail,
    actionUpdateMonitorDetail,
} from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.actions';
import { actionUpdateVisibleModal as updateVisibleModal } from 'src/modules/RedList/components/Table/TableValidator.actions';
import withFetchData from './TableValidator.enhanceFetchData';
import withPagination from './TableValidator.enhancePagination';

interface IProps {}
const enhance = (WrappedComp: React.FunctionComponent) => (props: IProps & any) => {
    const dispatch = useDispatch();

    const handleClickTableCell = (node: ITableData) => {
        dispatch(actionUpdateMonitorDetail({ node }));
        dispatch(updateVisibleModal({ visible: true }));
    };

    const handleCloseMonitorModal = () => {
        dispatch(updateVisibleModal({ visible: false }));
        dispatch(actionClearMonitorDetail());
    };
    return (
        <ErrorBoundary>
            <WrappedComp
                {...{
                    ...props,
                    handleClickTableCell,
                    handleCloseMonitorModal,
                }}
            />
        </ErrorBoundary>
    );
};

export default compose(withData, withFetchData, withPagination, enhance);
