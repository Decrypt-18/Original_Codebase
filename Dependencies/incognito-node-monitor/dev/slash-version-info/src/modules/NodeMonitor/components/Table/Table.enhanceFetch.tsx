import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { useDispatch } from 'react-redux';
import { actionFetchTableData } from './Table.actions';

interface IProps {
    handleFetchData: () => void;
}

const withFetch = (WrappedComponent: React.FunctionComponent) => (props: IProps & any) => {
    const dispatch = useDispatch();
    const handleFetchData = async (page: number) => dispatch(actionFetchTableData(page));

    const firstTimeFetchData = () => handleFetchData(0);

    React.useEffect(() => {
        firstTimeFetchData().then();
    }, []);
    return (
        <ErrorBoundary>
            <WrappedComponent
                {...{
                    ...props,
                    handleFetchData,
                }}
            />
        </ErrorBoundary>
    );
};

export default withFetch;
