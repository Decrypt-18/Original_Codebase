import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Row from 'src/components/Row';

const activeClassName = 'ACTIVE';

export const Wrapper = styled(Row)`
    justify-content: flex-end;
    margin-top: 50px;
    margin-bottom: 20px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        align-items: flex-end;
        margin-top: 40px;
        margin-bottom: 20px;
    `}
`;

export const StyledNavLink = styled(NavLink).attrs({
    activeClassName,
})`
    outline: none;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.text4};
    font-size: 15px;
    width: fit-content;
    margin-left: 12px;
    font-weight: 500;
    border-radius: 18px;
    padding: 8px 25px;
    border: none;
    background: ${({ theme }) => theme.gray1};
    :hover {
        color: ${({ theme }) => theme.text4};
    }
    &.${activeClassName} {
        font-weight: 500;
        background-color: ${({ theme }) => theme.black};
        color: ${({ theme }) => theme.white};
    }
    ${({ theme }) => theme.mediaWidth.upToSmall`
        padding: 7px 14px;
    `}
`;

export const WrapLink = styled(Row)`
    cursor: pointer;
    width: fit-content;
    justify-content: flex-end;
`;
