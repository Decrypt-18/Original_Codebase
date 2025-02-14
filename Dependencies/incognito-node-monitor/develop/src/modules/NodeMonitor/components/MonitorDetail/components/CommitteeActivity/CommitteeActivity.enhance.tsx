import React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';

const enhance = (WrappedComp: React.FunctionComponent) => (props: any) => {
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

export default enhance;
