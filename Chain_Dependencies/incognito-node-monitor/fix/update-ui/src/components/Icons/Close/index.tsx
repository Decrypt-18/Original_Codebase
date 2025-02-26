import React, { memo } from 'react';
import styled from 'styled-components';

const Styled = styled.button``;

const CloseVector = (props: any) => {
    return (
        <svg width="13" height="13" viewBox="0 0 16 16" {...props} style={{ cursor: 'pointer' }}>
            <path
                d="M15.725 15.45a.884.884 0 000-1.231l-6.25-6.26 6.25-6.25a.875.875 0 000-1.23.878.878 0 00-1.24 0l-6.25 6.25-6.25-6.25a.87.87 0 00-1.24 0 .884.884 0 000 1.23l6.25 6.25-6.25 6.26a.875.875 0 000 1.23.897.897 0 001.24 0l6.25-6.25 6.25 6.25c.331.332.908.342 1.24 0z"
                fill="#000"
                fillRule="nonzero"
            />
        </svg>
    );
};

const Close = (props: React.ButtonHTMLAttributes<HTMLButtonElement> & any) => {
    return (
        <Styled className="close-icon">
            <CloseVector {...props} />
        </Styled>
    );
};

export default memo(Close);
