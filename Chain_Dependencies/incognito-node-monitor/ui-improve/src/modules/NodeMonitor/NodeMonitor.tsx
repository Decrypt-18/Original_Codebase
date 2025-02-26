import React from 'react';
import { Table } from 'src/modules/NodeMonitor/components';
import styled, { ITheme } from 'styled-components';
import Row from 'src/components/Row';
import { NavLink } from 'react-router-dom';

const HeaderFrame = styled(Row)`
    justify-content: space-between;
    padding: 30px 30px 0 30px;
    display: flex-root;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    `}
`;

const HeaderFrameRow = styled(Row)`
    justify-content: space-between;
    padding: 30px 30px 0 30px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    `}
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
    border-radius: 15px;
    padding: 5px 15px;
    border: none;
    background: #d8d8d8;

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

const NodeMonitor = React.memo(() => {
    return <Table />;
});

export default NodeMonitor;
