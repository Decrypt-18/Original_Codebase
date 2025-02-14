import React, { memo } from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const Styled = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;

const LoadingOverlay = () => {
    return (
        <Styled className="wrap-loading">
            <CircularProgress color="primary" />
        </Styled>
    );
};

export default memo(LoadingOverlay);
