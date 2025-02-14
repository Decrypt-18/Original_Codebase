import React, { memo } from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Styled = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;

const LoadingOverlay = () => {
    return (
        <Styled className="wrap-loading">
            <Spin />
        </Styled>
    );
};

export default memo(LoadingOverlay);
