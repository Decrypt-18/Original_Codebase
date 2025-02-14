import React, { memo } from 'react';
import styled, { ITheme } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { isEmpty } from 'lodash';
import Row from '../Row';

export interface ItemSelectedProps {
    title: string;
    link?: string;
    key?: string;
}

const activeClassName = 'ACTIVE';

interface IProps {
    data: ItemSelectedProps[];
    onSelect: (item: ItemSelectedProps) => void;
}

const Wrapper = styled(Row)`
    justify-content: flex-end;
`;

const WrapperLink = styled.div<{ selected: boolean }>`
    outline: none;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.text4};
    font-size: 15px;
    width: fit-content;
    margin-left: 6px;
    font-weight: 500;
    border-radius: 17px;
    padding: 6px 15px;
    border: none;
    :hover {
        color: ${({ theme }) => theme.text4};
    }
    background-color: ${({ selected, theme }: { selected: boolean; theme: ITheme }) =>
        selected ? theme.black : theme.white};
    color: ${({ selected, theme }: { selected: boolean; theme: ITheme }) => (selected ? theme.white : theme.text5)};
    ${({ theme }) => theme.mediaWidth.upToSmall`
        padding: 4px 10px;
        font-size: 11px;
        text-align: center;
    `}
`;

const StyledNavLink = styled(NavLink).attrs({
    activeClassName,
})`
    outline: none;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.text5};
    font-size: 15px;
    width: fit-content;
    margin-left: 6px;
    font-weight: 500;
    border-radius: 18px;
    padding: 6px 15px;
    border: none;
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

const SelectedList = (props: IProps) => {
    const { data, onSelect } = props;
    const renderItem = (item: ItemSelectedProps) => {
        return !isEmpty(item?.key) ? (
            <StyledNavLink
                id={item?.key}
                to={item?.key || ''}
                onClick={() => {
                    onSelect && onSelect(item);
                }}
            >
                {item?.title}
            </StyledNavLink>
        ) : (
            <WrapperLink
                selected={false}
                onClick={() => {
                    onSelect && onSelect(item);
                }}
            >
                {item?.title}
            </WrapperLink>
        );
    };
    return <Wrapper className="wrapper-selection-list">{data.map(renderItem)}</Wrapper>;
};

export default memo(SelectedList);
