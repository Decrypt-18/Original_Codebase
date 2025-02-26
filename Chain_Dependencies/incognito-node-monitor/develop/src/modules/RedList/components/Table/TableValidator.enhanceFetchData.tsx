import React from 'react';
import { useDispatch } from 'react-redux';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { actionGetRedList } from './TableValidator.actions';

interface IProps {
    fetchData: (page: number) => void;
}

const withFetchData = (WrappedComp: React.FunctionComponent) => (props: IProps & any) => {
    const dispatch = useDispatch();
    const fetchData = (page: number) => dispatch(actionGetRedList({ page }));
    React.useEffect(() => {
        fetchData(0);
    }, []);
    return (
        <ErrorBoundary>
            <WrappedComp
                {...{
                    ...props,
                    fetchData,
                }}
            />
        </ErrorBoundary>
    );
};

export default withFetchData;
