import React, { memo } from 'react';
import 'src/components/Drawer/drawer.scss';
import { Drawer } from 'antd';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { HeaderTabs } from '../Header';
import { ItemSelectedProps } from '../SelectedList';
import { TextRegular } from '../Text';

interface IProps {
    visible: boolean;
    onSelect: (item: ItemSelectedProps) => void;
}

const activeClassName = 'ACTIVE';

const StyledNavLink = styled(NavLink).attrs({
    activeClassName,
})`
    outline: none;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.text5};
    font-size: 15px;
    width: fit-content;
    font-weight: 500;
    border: none;
    height: 50px;
    color: ${({ theme }) => theme.text4};
    text-align: center;
    :hover {
        color: ${({ theme }) => theme.text4};
    }
    &.${activeClassName} {
        font-weight: 600;
        color: ${({ theme }) => theme.black};
    }
`;

const MobileDrawer = (props: IProps) => {
    const { visible, onSelect } = props;
    const renderItem = (item: ItemSelectedProps) => {
        const component = !isEmpty(item?.key) ? (
            <StyledNavLink id={item?.key} to={item?.key || ''}>
                {item?.title}
            </StyledNavLink>
        ) : (
            <TextRegular color="text4" fontWeight="500" height="50px">
                {item?.title}
            </TextRegular>
        );
        return (
            <div
                key={item.title}
                onClick={() => onSelect && onSelect(item)}
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                {component}
            </div>
        );
    };
    return (
        <Drawer
            className="ant-drawer-container"
            placement="right"
            closable={false}
            visible={visible}
            key="right"
            width="100%"
            style={{ marginTop: 80 }}
        >
            <div style={{ marginTop: 50 }}>{HeaderTabs.map(renderItem)}</div>
        </Drawer>
    );
};

export default memo(MobileDrawer);
