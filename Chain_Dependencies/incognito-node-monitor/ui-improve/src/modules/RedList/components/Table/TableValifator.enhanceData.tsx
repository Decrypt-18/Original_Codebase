import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { useSelector } from 'react-redux';
import { tableValidatorSelector } from './TableValidator.selector';

interface IProps {}

const withData = (WrappedComp: React.FunctionComponent) => (props: IProps & any) => {
    const { currentPage, limitPage, rowsPerPage, data, fetching, visibleModal } = useSelector(tableValidatorSelector);
    return (
        <ErrorBoundary>
            <WrappedComp
                {...{
                    ...props,
                    currentPage,
                    limitPage,
                    rowsPerPage,
                    data,
                    fetching,
                    visibleModal,
                }}
            />
        </ErrorBoundary>
    );
};

export default withData;
