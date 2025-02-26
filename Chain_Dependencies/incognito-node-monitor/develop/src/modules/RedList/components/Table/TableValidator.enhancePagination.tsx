import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';

interface IProps {
    fetchData: (page: number) => void;
}

const withPagination = (WrappedComp: React.FunctionComponent) => (props: IProps & any) => {
    const { fetchData } = props;
    const handleChangePage = async (page: number) => {
        /** Change number page */
        fetchData && fetchData(page);
    };

    return (
        <ErrorBoundary>
            <WrappedComp
                {...{
                    ...props,
                    handleChangePage,
                }}
            />
        </ErrorBoundary>
    );
};

export default withPagination;
