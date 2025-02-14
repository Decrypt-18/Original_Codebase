import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { compose } from 'recompose';
import { useDispatch } from 'react-redux';
import withData from './Table.enhanceData';
import withFetch from './Table.enhanceFetch';
import withPagination from './Table.enhancePagination';
import { actionUpdateVisibleModal as updateVisibleModal } from './Table.actions';
import { ITableData } from './Table.interface';
import { actionUpdateMonitorDetail, actionClearMonitorDetail } from '../MonitorDetail/MonitorDetail.actions';

interface IProps {}

const withTable = (WrappedComponent: React.FunctionComponent) => (props: IProps & any) => {
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
            <WrappedComponent
                {...{
                    ...props,
                    handleClickTableCell,
                    handleCloseMonitorModal,
                }}
            />
        </ErrorBoundary>
    );
};

export default compose(withData, withFetch, withPagination, withTable);
