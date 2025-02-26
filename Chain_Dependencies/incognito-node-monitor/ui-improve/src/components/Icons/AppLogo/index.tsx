import React from 'react';
import styled, { ITheme } from 'styled-components';

const Logo = styled.div<{ size: number }>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border-radius: ${({ size }) => `${size / 2}px`};;
    background-color ${({ theme }: { theme: ITheme }) => theme.black};
`;

interface IProps {
    size?: number;
}

const AppLogo = React.memo((props: IProps) => {
    const { size = 40 } = props;
    return <Logo className="app-logo" size={size} />;
});

export default AppLogo;
