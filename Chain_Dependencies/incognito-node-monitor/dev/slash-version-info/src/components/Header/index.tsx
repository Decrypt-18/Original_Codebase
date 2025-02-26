import React from 'react';
import styled, { ITheme } from 'styled-components';
import Row from 'src/components/Row';
import { AppLogo } from 'src/components/Icons';
import { getMiningPublicKey } from 'src/modules/NodeMonitor/components/Table/Table.utils';
import SelectedList, { ItemSelectedProps } from 'src/components/SelectedList';
import { isEmpty } from 'lodash';
import MobileDrawer from 'src/components/Drawer';
import MenuIcon from 'src/components/Icons/Menu/index';
import CloseIcon from 'src/components/Icons/Close/index';

export const HeaderFrame = styled(Row)`
    justify-content: space-between;
    align-items: center;
    .small-screen-right {
        display: none;
    }
    .wrapper-selection-list {
        display: flex;
    }
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
        .small-screen-right {
            display: flex;
        }
        .wrapper-selection-list {
           display: none;
        }
    `}
    .wrapper-selection-list {
        padding: 30px 0 0;
    }
    .menu-icon {
        margin-top: 22px;
        padding: 20px 0 20px 10px;
    }
    .close-icon {
        margin-top: 22px;
        padding: 20px 0 20px 10px;
    }
`;

export const HeaderFrameRow = styled(Row)<{ displayEnd?: boolean }>`
    justify-content: ${({ displayEnd }) => (displayEnd ? `flex-end` : 'space-between')};
    width: fit-content;
    padding: 30px 0 0;
`;

const WrapLogo = styled(Row)`
    cursor: pointer;
    width: fit-content;
`;

export const HeaderTabs: ItemSelectedProps[] = [
    { title: 'My nodes', key: '/node-monitor' },
    { title: 'Inactive nodes', key: '/red-list' },
    { title: 'User guide', link: 'https://we.incognito.org/t/how-to-use-the-node-monitor/11684' },
    { title: 'FAQs', link: 'https://incognito.org/faq' },
];

const Header = React.memo(() => {
    const [visibleModal, setVisibleModal] = React.useState(false);

    const onSelectedHeaderTab = (item: ItemSelectedProps) => {
        setVisibleModal(false);
        if (window && !isEmpty(item.link)) return window.open(item.link);
    };

    const onChangeModalState = () => setVisibleModal(!visibleModal);

    const renderRightIcon = () =>
        visibleModal ? <CloseIcon onClick={onChangeModalState} /> : <MenuIcon onClick={onChangeModalState} />;

    const renderMenuList = () => {
        return (
            <>
                <div className="small-screen-right">
                    {renderRightIcon()}
                    <MobileDrawer visible={visibleModal} onSelect={onSelectedHeaderTab} />
                </div>
                <SelectedList data={HeaderTabs} onSelect={onSelectedHeaderTab} />
            </>
        );
    };

    if (getMiningPublicKey()) return null;
    return (
        <div style={{ marginLeft: 30, marginRight: 30 }}>
            <HeaderFrame>
                <HeaderFrameRow>
                    <WrapLogo>
                        <AppLogo />
                    </WrapLogo>
                </HeaderFrameRow>
                {renderMenuList()}
            </HeaderFrame>
        </div>
    );
});

export default Header;
