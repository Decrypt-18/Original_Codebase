import React from 'react';
import styled, { ITheme } from 'styled-components';
import Row from 'src/components/Row';
import { AppLogo } from 'src/components/Icons';
import { TextBold } from 'src/components';
import { useSelector } from 'react-redux';
import { appTranslateSelector } from 'src/configs';
import { getMiningPublicKey } from 'src/modules/NodeMonitor/components/Table/Table.utils';
import { NavLink } from 'react-router-dom';

const HeaderFrame = styled(Row)`
    justify-content: space-between;
    padding: 30px 30px 0 30px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    `}
`;

const WrapLogo = styled(Row)`
    cursor: pointer;
    width: fit-content;
`;

const activeClassName = 'ACTIVE';
const StyledNavLink = styled(NavLink).attrs({
    activeClassName,
})`
    outline: none;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.text1};
    font-size: 15px;
    width: fit-content;
    margin: 0 12px;
    font-weight: 500;
    border-radius: 8px;
    padding: 5px 15px;
    border: 1px solid ${({ theme }: { theme: ITheme }) => theme.border2};

    &.${activeClassName} {
        font-weight: 600;
        background-color: ${({ theme }) => theme.black};
        color: ${({ theme }) => theme.white};
    }
`;

const WrapLink = styled(Row)`
    cursor: pointer;
    width: fit-content;
`;

const Header = React.memo(() => {
    const appTranslate = useSelector(appTranslateSelector);
    if (getMiningPublicKey()) return null;
    return (
        <HeaderFrame>
            <WrapLogo>
                <AppLogo />
                <TextBold fontSize={20} marginLeft={10}>
                    {appTranslate.company}
                </TextBold>
            </WrapLogo>
            <WrapLink>
                <StyledNavLink id="stake-nav-link" to="/node-monitor">
                    Monitor
                </StyledNavLink>
                <StyledNavLink id="stake-nav-1" to="/red-list">
                    Red list
                </StyledNavLink>
            </WrapLink>
        </HeaderFrame>
    );
});

export default Header;
